import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/formUtils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html'
})
export default class RegisterPage {

  fBuilder = inject(FormBuilder)
  formUtils = FormUtils;

  myForm: FormGroup = this.fBuilder.group(
    {
      name: ['', [Validators.required,Validators.pattern(this.formUtils.firstNameAndLastnamePattern)]], // para name usaremos una expresion regular
      email: ['', [Validators.required, Validators.pattern(this.formUtils.emailPattern)], [this.formUtils.checkIngServerResponse]], // para email usaremos una expresion regular
      username: ['', [Validators.required, Validators.pattern(this.formUtils.notOnlySpacesPattern), this.formUtils.canIsBeingUsed]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required]],
    },
    // el formulario myForm va a pasar implicitamente como argumento a las funsiones que yo agregue dentro de mi objeto de validadors
    {
      validators: [this.formUtils.isFieldOneEqualsFielTwo('password', 'password2')]
    }
  )


  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}

  // El Validator.pattern es una función utilizada en validadores en el 
    // desarrollo de aplicaciones web para verificar si un valor cumple con un patrón específico.
    // En el código proporcionado, se utiliza para validar el formato de los campos "name" y "email" 
    // en un formulario.

    // estas funciones reciben una expresion regular como parametro.
    // Validators.pattern(customValidators.emailPattern) se utiliza para validar el campo "email" 
    // y asegurarse de que cumpla con un patrón de expresión regular específico

    // al igual que Validators.pattern(customValidators.firstNameAndLastnamePattern)



    // email : ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [new EmailValidator()] ],
    // este campo tiene validaciones syncronas y asyncronas y lo primero que se dispara son las validaciones syncronas