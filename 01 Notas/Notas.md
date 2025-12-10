====================================================================================================

**Vite es una herramienta de desarrollo moderna,  que sirve para crear y empaquetar aplicaciones web rápidas y eficientes,** 

**sobre todo para proyectos con frameworks modernos como Vue, React, Angular, entre otros.**



npm create vite@latest:  Con este comando, se puede crear una nueva aplicación que use este empaquetador.



npm run dev:  Ejecuta una aplicación de vite.

npm install: instala las dependencias del package.json	

====================================================================================================





====================================================================================================

En el archivo tsconfig.json hay una parte en donde podemos indicar que typescript será estricto con la propiedad     "strict": true

esto:

Activa el máximo nivel de verificación de tipos

Previene errores sutiles en tiempo de ejecución.

Evita que puedas usar null o undefined como si fueran cualquier otro tipo.

let name:string = null;  ///// ❌ Error con strictNullChecks

Te obliga a declarar tipos explícitamente cuando TypeScript no puede inferirlos.

====================================================================================================



====================================================================================================

A partir de TypeScript 5.0, la palabra clave type se volvió obligatoria al importar tipos, interfaces, clases o enums, si tu configuración en el archivo tsconfig.json así

lo esta indicando.

Esta restricción se puede evitar modificando en el archivo tsconfig.json

"verbatimModuleSyntax": true

por 

"verbatimModuleSyntax": false,

====================================================================================================





====================================================================================================

Angular se conoce como un framework es decir, significa que con el podemos crear una aplicación

con la menor cantidad de dependencias externa ya que contiene

Gestor de contenido

Enrutamiento

Reactividad

Peticiones HTTP

Directivas 

Etc.



Los puntos fundamentales son 

COMPONENTES

RUTAS

DIRECTIVAS

SERVICIOS

MODULOS

PIPES

====================================================================================================





