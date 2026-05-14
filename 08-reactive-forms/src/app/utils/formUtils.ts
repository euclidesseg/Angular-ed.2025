import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";


const sleep = async () =>{
  return new Promise(resolve =>{
    setTimeout(() => {resolve(true)}, 2500)
  })
}
export class FormUtils {


    static firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    static emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';


  // Validar un campo del formularilo para mostrar un mensaje de error
  static isValidField(fieldName: string, myForm: FormGroup): boolean | null {
    return myForm.controls[fieldName].errors && myForm.controls[fieldName].touched
  }

  // Medoto para obtener el tipo de error de un campo y en función mostrar un mensaje respectivo
  static getFieldError(fieldName: string, myForm: FormGroup): string | null {
    if (!myForm.controls[fieldName]) return null;
    else {
      const errors = myForm.controls[fieldName].errors || {};
      return this.getTextError(errors);
    }
    return '';
  }
  
  // Este metodo es el mismo de formularios basicos pero devemos tener en cuenta que este validara un controlArray 
  // nesetio saber cual es el arreglo de controles y saber cual es el indice que esta fallando
  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return formArray.controls[index].errors && formArray.controls[index].touched
  }
  
  // Metodo para obtener el tipo de error de un control de formulario el cual es un arreglo y en función mostrar un mensaje respectivo
  static getFieldArrayError( formArray: FormArray, index:number): string | null {
    if (!formArray.controls[index]) return null;
    else {
      const errors = formArray.controls[index].errors || {};
      const value = formArray.controls[index].value
      return this.getTextError(errors);
    }
    return '';
  }

   // validar que las dos contraseñas sean iguales
   // esta funcion validadora regresara una funcion que sera utilizada para comparar los dos campos
    static isFieldOneEqualsFielTwo(field1:string, field2: string){ 
        return (formGroup: AbstractControl) :ValidationErrors | null =>{
            // el parametro que toma esta funcion es todo mi formulario el cual tengo definido en mi componente
            const fieldValue1 = formGroup.get(field1)?.value;
            const fieldValue2 = formGroup.get(field2)?.value;
            
            if(fieldValue1 !== fieldValue2){
                formGroup.get(field2)?.setErrors({notEqual:true})
                return {notEqual:true}
            }else if(!fieldValue2){
              formGroup.get(field2)?.setErrors({required:true})
              return {required:true}
            }
            formGroup.get(field2)?.setErrors(null);
            return null;
        }
    }


    // Obtener el txt error para mostrar
  private static getTextError(errors:ValidationErrors,control?:string){
    console.log(errors)
    for (const key of Object.keys(errors)) {
        switch (key) {
          case 'required':
            return 'Este campo es requerido';
          case 'minlength':
            return `Minimo ${errors['minlength'].requiredLength} caracteres`
          case 'email':
            return `Debe tener un formato de email correcto`
          case 'notEqual':
            return `Esta contraseña no es igual que la anterior`
          case 'min':
            return `Valor minimo ${errors['min'].min}`
          case 'emailTaken':
            return `Este correo ya está siendo utilizado por otro usuario`
          case 'isBeingUsed':
            return `Este nombre de usuario está siendo usado`
          case 'pattern':
            if(errors['pattern'].requiredPattern === this.emailPattern)
            {
              return `Esto no parece un correo`
            }
            else{
              return `El esto debe contener nombre y apellido`
            }
        }
      }
      return null;
  }


  // validacion asyncrona para email
  static async checkIngServerResponse(control:AbstractControl):Promise<ValidationErrors | null>{
    console.log('validando contra servidor')
    await sleep(); // esperar 2.5 segundos
    const formValue = control.value;

    if(formValue == 'euclides2696@gmail.com'){
      return {emailTaken:true};
    }
    return null;
  }

  // validacion sincrona para username en uso

    static canIsBeingUsed = (control: FormControl): ValidationErrors | null => {

        const value: string = control.value.trim().toLowerCase();

        if (value === 'strider') {
            return {
                isBeingUsed: true,
            }
        }
        return null
    }
}

// Un validatorErrors no es mas que un objeto que tiene una llave que define el nombre del error
// y un valor que define que es el error