/*  Typescript nos indica a nosotros a tener un tener un tipado estricto e ir indicandole a nuestro codigo
    que tipo van a tener nuestras bariales o que tipo de objeto seran*/

let name = 'Strider'; // tipo de dato especificado por su valor
const lastname = 'Doe' // constante
let hpPints:number = 95;// tipo de dato especificado antes de asignar valor

let hpPoints2:number|string = 23 // indicando que este dato puede ser numero o string
let stringNumber:number|'FULL' = 23 // indicando que este dato puede ser numero o que el unico string permitido será FULL
hpPoints2 = 'Jon'
stringNumber = 'FULL'

const isLive:boolean = true;

    console.log({
        hpPints,hpPoints2,stringNumber
    });
// name = 123
// export {};