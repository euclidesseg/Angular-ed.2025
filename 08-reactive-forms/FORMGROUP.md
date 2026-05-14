# 📚 Formularios Reactivos en Angular

## 📖 ¿Qué son los Formularios Reactivos?

Los formularios reactivos en :contentReference[oaicite:0]{index=0} permiten controlar completamente el estado del formulario desde TypeScript.

La lógica del formulario vive en el componente y no directamente en el HTML.

Características:

- Más escalables
- Mejor control del estado
- Mejor integración con RxJS
- Validaciones más fáciles
- Ideales para aplicaciones grandes

---

# 🧩 ReactiveFormsModule

## ¿Qué es?

Es el módulo que habilita los formularios reactivos en Angular.

---

## 📌 Importación

```ts
import { ReactiveFormsModule } from '@angular/forms';
```

---

## 📌 Uso

```ts
@Component({
  imports: [ReactiveFormsModule]
})
```

---

## 📌 ¿Qué habilita?

Permite usar:

- `formGroup`
- `formControlName`

---

# 🧠 FormGroup

## ¿Qué es?

`FormGroup` representa un grupo de controles.

Es básicamente el formulario completo.

---

## 📌 Ejemplo

```ts
myForm = new FormGroup({
  name: new FormControl(''),
  price: new FormControl(0),
  inStorage: new FormControl(0),
})
```

---

## 📌 Conceptualmente

```txt
FormGroup
 ├── name
 ├── price
 └── inStorage
```

Cada propiedad interna es un `FormControl`.

---

# 🎯 FormControl

## ¿Qué es?

`FormControl` representa un único campo del formulario.

---

## 📌 Puede representar

- un input
- un select
- un textarea
- un checkbox

---

## 📌 Ejemplo

```ts
name: new FormControl('')
```

---

## 📌 ¿Qué hace?

Angular administra automáticamente:

- el valor
- los errores
- el estado touched
- el estado pristine
- validaciones
- cambios reactivos

---

## 📌 Valor inicial

```ts
new FormControl('')
```

El valor inicial será:

```txt
''
```

---

## 📌 Otro ejemplo

```ts
price: new FormControl(0)
```

El valor inicial será:

```txt
0
```

---

# 🔗 formGroup

## ¿Qué es?

`formGroup` es una directiva HTML de Angular.

Conecta el formulario HTML con el `FormGroup` de TypeScript.

---

## 📌 Ejemplo

```html
<form [formGroup]="myForm">
```

---

## 📌 ¿Qué ocurre?

Angular toma:

```ts
myForm
```

y lo enlaza con el formulario HTML.

---

## 📌 Sin formGroup

Angular no sabrá qué formulario reactivo utilizar.

---

# 🔗 formControlName

## ¿Qué es?

`formControlName` conecta un input HTML con un `FormControl`.

---

## 📌 Ejemplo

```html
<input formControlName="name">
```

---

## 📌 ¿Qué busca Angular?

Busca dentro del `FormGroup`:

```ts
myForm = new FormGroup({
  name: new FormControl('')
})
```

el control llamado:

```txt
name
```

---

## 📌 Relación completa

```txt
formControlName="name"
            ↓
FormControl llamado "name"
            ↓
myForm
```

---

# 🧠 Flujo mental correcto

```txt
HTML input
    ↓
formControlName
    ↓
FormControl
    ↓
FormGroup
    ↓
TypeScript
```

---

# 📌 Ejemplo completo

## HTML

```html
<form [formGroup]="myForm">

  <input
    type="text"
    formControlName="name"
  >

</form>
```

---

## TypeScript

```ts
myForm = new FormGroup({
  name: new FormControl('')
})
```

---

# 📊 Estados del formulario

Angular administra automáticamente varios estados reactivos.

---

# ✅ valid

## ¿Qué es?

Indica si TODO el formulario es válido.

---

## 📌 Uso

```html
{{ myForm.valid }}
```

---

## 📌 Resultado

```txt
true
```

o

```txt
false
```

---

# ❌ invalid

## ¿Qué es?

Indica si el formulario es inválido.

Es lo contrario de `valid`.

---

## 📌 Uso

```html
{{ myForm.invalid }}
```

---

# ✨ pristine

## ¿Qué es?

Indica que el formulario NO ha sido modificado desde que cargó.

---

## 📌 Uso

```html
{{ myForm.pristine }}
```

---

## 📌 Valor inicial

```txt
true
```

---

## 📌 Cuando el usuario escribe

```txt
false
```

---

# ✏️ dirty

## ¿Qué es?

Indica que el formulario YA fue modificado.

Es lo contrario de `pristine`.

---

## 📌 Uso

```html
{{ myForm.dirty }}
```

---

# 👆 touched

## ¿Qué es?

Indica que el usuario tocó un campo.

Por ejemplo:

- hizo click
- entró al input
- salió del input

---

## 📌 Uso

```html
{{ myForm.touched }}
```

---

# 👻 untouched

## ¿Qué es?

Indica que el formulario NO ha sido tocado.

Es lo contrario de `touched`.

---

## 📌 Uso

```html
{{ myForm.untouched }}
```

---

# 📦 value

## ¿Qué es?

Obtiene todos los valores actuales del formulario.

---

## 📌 Uso

```html
{{ myForm.value | json }}
```

---

## 📌 Resultado

```json
{
  "name": "Laptop",
  "price": 100,
  "inStorage": 5
}
```

---

# 🎯 Acceder a controles específicos

## 📌 Obtener valor

```html
{{ myForm.controls['price'].value }}
```

---

## 📌 Obtener errores

```html
{{ myForm.controls['price'].errors }}
```

---
---
---
---


# 🧠 Filosofía de los Formularios Reactivos

La idea principal es:

> El estado del formulario vive en TypeScript.

El HTML solamente refleja ese estado

---
---
---
---




# 🏗️ FormBuilder

## ¿Qué es?

`FormBuilder` es una utilidad de Angular que permite crear formularios reactivos de forma más limpia y rápida.

---

# 📌 Forma tradicional

```ts
myForm: FormGroup = new FormGroup({
  name: new FormControl(''),
  price: new FormControl(0),
  inStorage: new FormControl(0),
})
```

---

# 📌 Forma moderna usando FormBuilder

```ts
private fBuilder = inject(FormBuilder);

myForm = this.fBuilder.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  price: [0, [Validators.required, Validators.min(0)]],
  inStorage: [0, [Validators.required, Validators.min(0)]],
})
```

---
---
---
---


# 🧠 ¿Por qué se recomienda FormBuilder?
Porque:

- reduce muchísimo código
- es más legible
- es más fácil de escalar
- es el estándar moderno en Angular
- facilita formularios grandes
- mejora la organización


# 📌 Diferencia visual

## ❌ FormGroup + FormControl

```ts
name: new FormControl('')
```

---

## ✅ FormBuilder

```ts
name: ['']
```

Angular internamente convierte eso en:

```ts
new FormControl('')
```

---

# 🧠 Lo importante

Con `FormBuilder` NO dejas de usar `FormControl`.

Simplemente Angular lo crea automáticamente por ti.

---

# 📦 Estructura de un campo con FormBuilder

## 📌 Sintaxis

```ts
campo: [
  valorInicial,
  validadoresSync,
  validadoresAsync
]
```

---

# 📌 Ejemplo completo

```ts
name: [
  '',
  [
    Validators.required,
    Validators.minLength(3)
  ]
]
```

---

# 🧠 Explicación detallada

## Primer parámetro

```ts
''
```

Es el valor inicial del campo.

---

## Segundo parámetro

```ts
[
  Validators.required,
  Validators.minLength(3)
]
```

Es un arreglo de validaciones síncronas.

Angular ejecutará todas esas validaciones automáticamente.

---

## Tercer parámetro

Se usa para validaciones asíncronas.

Ejemplo:
- validar usuario en servidor
- validar email existente
- peticiones HTTP

---

# ✅ Validators

## ¿Qué es?

`Validators` es una clase que contiene validadores listos para usar.

---

# 📌 Importación

```ts
import { Validators } from '@angular/forms';
```

---

# 📌 Validators.required

## ¿Qué hace?

El campo es obligatorio.

---

## 📌 Ejemplo

```ts
Validators.required
```

---

## 📌 Error que genera

```json
{
  "required": true
}
```

---

# 📌 Validators.minLength()

## ¿Qué hace?

Exige una cantidad mínima de caracteres.

---

## 📌 Ejemplo

```ts
Validators.minLength(3)
```

---

## 📌 Significa

El campo debe tener mínimo:

```txt
3 caracteres
```

---

## 📌 Error que genera

```json
{
  "minlength": {
    "requiredLength": 3,
    "actualLength": 1
  }
}
```

---

# 📌 Validators.min()

## ¿Qué hace?

Exige un valor mínimo numérico.

---

## 📌 Ejemplo

```ts
Validators.min(0)
```

---

## 📌 Significa

El número no puede ser menor a:

```txt
0
```

---

# 📌 Otros validators importantes

## Validators.max()

```ts
Validators.max(100)
```

Número máximo permitido.

---

## Validators.maxLength()

```ts
Validators.maxLength(50)
```

Máxima cantidad de caracteres.

---

## Validators.email

```ts
Validators.email
```

Valida formato email.

---

## Validators.pattern()

```ts
Validators.pattern(/^[A-Z]+$/)
```

Valida usando expresiones regulares.

---

# 🧠 Ejemplo explicado completamente

```ts
private fBuilder = inject(FormBuilder);

myForm = this.fBuilder.group({

  name: [
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  ],

  price: [
    0,
    [
      Validators.required,
      Validators.min(0)
    ]
  ],

  inStorage: [
    0,
    [
      Validators.required,
      Validators.min(0)
    ]
  ]

});
```

---

# 📌 Explicación del campo name

```ts
name: [
  '',
  [
    Validators.required,
    Validators.minLength(3)
  ]
]
```

---

## 📌 ¿Qué significa?

### Valor inicial

```ts
''
```

El input inicia vacío.

---

### Validación 1

```ts
Validators.required
```

El usuario DEBE escribir algo.

---

### Validación 2

```ts
Validators.minLength(3)
```

Debe escribir mínimo 3 caracteres.

---

# 📌 Explicación del campo price

```ts
price: [
  0,
  [
    Validators.required,
    Validators.min(0)
  ]
]
```

---

## 📌 ¿Qué significa?

### Valor inicial

```ts
0
```

El campo inicia en cero.

---

### Validación 1

```ts
Validators.required
```

El campo es obligatorio.

---

### Validación 2

```ts
Validators.min(0)
```

No puede ser negativo.

---

# 🧠 Idea importante

Los validadores se ejecutan automáticamente cada vez que el usuario modifica el campo.

Angular actualiza automáticamente:

- `valid`
- `invalid`
- `errors`
- `touched`
- `dirty`

sin necesidad de hacerlo manualmente.

---

# 🚀 Ventajas de FormBuilder

- Menos código
- Mejor legibilidad
- Más mantenible
- Más limpio
- Mejor para formularios complejos
- Estándar moderno en Angular