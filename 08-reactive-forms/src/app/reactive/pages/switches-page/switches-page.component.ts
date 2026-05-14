import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormUtils } from '../../../utils/formUtils';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
})
export class SwitchesPage implements OnInit {

  ngOnInit(): void {
    console.log(this.myForm.value)
  }

  formUtils = FormUtils;

  fBuilder = inject(FormBuilder)

  myForm: FormGroup = this.fBuilder.group({
    gender: ['M', [Validators.required]],
    wantNotifications: [true, [Validators.required]],
    termsAndNotifications: new FormControl(false, [Validators.requiredTrue])
  })



   public person = {
    gender:'F',
    wantNotifications:'false',
  }

   onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    else {
      const {termsAndNotifications, ...newPerson} = this.myForm.value; // me crea un nuevo objeto de persona y me excluye la propiedad termsAndNotifications
      this.person = newPerson;
      console.log(this.myForm.value)
      console.log(this.person)

    }
  }
}


// Notas: el valor de person no tiene el valor de termsAndNotifications esto se debe a que este dato se 
// en ocaciones solo se usa para validar el formulario, no para guardar su valor en base de datos.
// pero cuando vamos a mandar la persona hasta la persistencia con el metodo onSave 
// a persona se le asignara todo el valor del formulario incluyendo termsAndNotifications
// por lo que nos dara un error o dependiendo del backend para eso usamos la desestructuracion de el formulario myForm
// para sacar el valor de termsAndNotifications