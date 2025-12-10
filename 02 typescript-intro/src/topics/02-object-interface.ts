const skills:string[] = ['Bash','Counter','Healing'];


// Así como tipamos de manera estricta una variable tambien podemos tipar de manera estricta un objeto, indicando
// que cada una de sus propiedades será de un tipo especifico. Esto se hace de la siguiente manera.

// 1. Inteface
interface Character {
    name:string;
    hp:number;
    skills:string[];
    hometown?:string; //** ? indica que una propiedad de una interface es netamente opcional en este caso hometown es opcional
    age?:number|undefined; //undefined indica que una propiedad de una interface podrá tener un valor indefinido
}
// Ahora tengo una interrface de la cual cualquier dato tipado con ella representará un objeto con cada una de estas propiedades

const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],    
}

strider.hometown = 'Rivendell';
console.log(strider);