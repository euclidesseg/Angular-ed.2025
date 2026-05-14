import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { filter, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export default class CountryPage {

  fBuilder = inject(FormBuilder)
  countryService = inject(CountryService);

  regions = signal(this.countryService.regions);
  countriesByRegions = signal<Country[]>([]);
  borders = signal<Country[]>([]);



  myForm = this.fBuilder.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required]
  })

  // ==========================================================================================
  // Escucha los cambios del formulario relacionados con región y país.
  // Aquí se crean las suscripciones que reaccionan automáticamente
  // cuando el usuario cambia un valor en los selectores.

  // ==========================================================================================
  onFormChange = effect((onCleanUp) => {

    // Suscripción que escucha cambios en el selector de región
    const regionSubscription: Subscription = this.onRegionChanged();

    // Suscripción que escucha cambios en el selector de país
    const countrySubscription = this.onCountryChanged();

    // Limpieza de memoria para evitar fugas de memoria (memory leaks)
    onCleanUp(() => {
      regionSubscription.unsubscribe();
      countrySubscription.unsubscribe();
    });
  })


  // ==========================================================================================
  // Escucha los cambios del selector de región.
  //
  // valueChanges:
  // Cada FormControl tiene una propiedad llamada valueChanges.
  // Esta propiedad devuelve un Observable que emite el nuevo valor
  // cada vez que el usuario cambia el control.
  //
  // switchMap():
  // Permite cancelar peticiones anteriores y ejecutar una nueva.
  // Muy útil cuando el usuario cambia rápidamente de opción.
  // ==========================================================================================
  onRegionChanged() {

    // Observable que emite el nuevo valor cada vez que cambia la región
    return this.myForm.get('region')!.valueChanges
      .pipe(

        // Limpio el país porque ahora debe seleccionarse otro
        tap((region) => {
          this.myForm.get('country')!.setValue('')
        }),

        // Limpio la frontera porque depende del país seleccionado
        tap((region) => {
          this.myForm.get('border')!.setValue('')
        }),

        // Limpio los arreglos para evitar mostrar información vieja
        tap(() => {
          this.borders.set([]);
          this.countriesByRegions.set([]);
        }),

        // Realiza la petición HTTP según la región seleccionada
        switchMap((region) =>
          this.countryService.getCountriesByRegion(region ?? '')
        )
      )

      // Se ejecuta cuando llegan los países desde el servicio
      .subscribe((countries) => {

        console.log(countries);

        // Guardo los países obtenidos en el signal
        this.countriesByRegions.set(countries)
      })

  }


  // ==========================================================================================
  // Escucha los cambios del selector de país.
  //
  // filter():
  // Permite filtrar valores antes de continuar el flujo.

  // Flujo:
  // 1. Usuario selecciona un país
  // 2. Obtengo la información completa del país
  // 3. Obtengo los países fronterizos usando sus códigos
  // ==========================================================================================
  onCountryChanged() {

    return this.myForm
      .get('country')!

      // Observable que emite el valor cada vez que cambia el país
      .valueChanges

      .pipe(

        // Limpio la frontera porque cambiará según el nuevo país
        tap(() =>
          this.myForm.get('border')!.setValue('')
        ),

        // Evita ejecutar el flujo si el valor está vacío
        filter((value) => value!.length > 0),

        // Obtengo toda la información del país seleccionado
        switchMap((alphaCode) =>
          this.countryService.getCountryByAlphaCode(alphaCode ?? '')
        ),

        // Obtengo los países fronterizos usando los códigos del país
        switchMap((country) =>
          this.countryService.getCountryBordersNamesByCodeArray(country.borders)
        ),
        tap((country) =>{
          console.log(country)
        })
      )

      // Se ejecuta cuando llegan los países fronterizos
      .subscribe((borders) => {

        // Guardo las fronteras en el signal
        this.borders.set(borders);
      });
  }
}