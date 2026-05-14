import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/formUtils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPage {

  formUtil = FormUtils;

  private fBuilder = inject(FormBuilder);

  myForm: FormGroup = this.fBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })


  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value);
    this.myForm.reset({ price: 0, inStorage: 0 })
  }

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   price: new FormControl(0, [Validators.required, Validators.min(0)]),
  //   inStorage: new FormControl(0, [Validators.required, Validators.min(0)]),
  // })


  //Notas:  name:new FormControl('',[],[]),  name:['',[],[]],

  // '' = representa el valor por defecto ese valor se mostrara en el html
  // [] = el primer corchete representa validador sincrono puede ser una unica validacion o un arreglo de validaciones
  // [] = el segundo corchete representa validador asincrono puede ser una unica validacion o un arreglo de validaciones
  // al establces el valor por defecto tambien indico el tipo de datos que tendra eseo campo



  // Algunos estados de los formControl y FormGroup
  // Pristine: Indica que un campo de formulario no ha sido modificado por el usuario, sera true si no esta modificado.
  // Touched: Indica que un campo de formulario ha sido interactuado por el usuario.
  // Dirty: Indica que un campo de formulario ha sido modificado por el usuario sera true si fue modificado.
  // Valid: Indica que un campo de formulario cumple con las reglas de validación definidas.

}
