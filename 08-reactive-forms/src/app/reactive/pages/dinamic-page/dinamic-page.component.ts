import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/formUtils';

@Component({
  selector: 'app-dinamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dinamic-page.component.html',
})
export class DinamicPage {

  fBuilder = inject(FormBuilder);
  formsUtils = FormUtils;

  public newFavorite: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)])

  myForm = this.fBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fBuilder.array(
      [ // favoriteGames es un arreglo de tipo FormArray
        ['Metal Gear', [Validators.required, Validators.minLength(3)]],
        ['MDeathetal Strading', Validators.required],
      ],
      Validators.minLength(3)
    )
  })

  //Obtener el arreglo de favoritos dentro del formularlio
  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index); // llamamos a nustro getter que ya lo tenemos
  }

  // agregar elementos a un formarray
  onAddToFavorite(): void {
    if (this.newFavorite.invalid) return;
    // extraemos el valor del formcontrol
    const newGame: any = this.newFavorite.value;
    this.favoriteGames.push(this.fBuilder.control(newGame, Validators.required));

    this.newFavorite.reset();
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    else {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fBuilder.array([])
    this.myForm.reset()
  }


}
