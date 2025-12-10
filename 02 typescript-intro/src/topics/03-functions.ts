// ** funcion tradicional
/* Todas las funciones funcionan undefined por defecto */
function addNumbers(a:number,b:number):string{
    return `${a+b}`;
}

// ** lamda function
const addNumberArrow = (a:number,b:number):string =>{
    return `${a + b}`;
}

// ** Parametros opcionales, obligatorios y inicializados en funciones
function multiPly(fisrtNumber:number, secondNumber?:number, base:number = 2){
    return fisrtNumber * base;
}

// typescript infiere el tipo de datos de una variable si esta depende del valor de retorno de una funcion
// const result = addNumbers(1,2)
// const result2 = addNumberArrow(5,2);
// const multiPlyResult = multiPly(2,5);
// console.log({ result, result2})


// recordemos que con angular y typescripe debemos tipar a todas las variables ya que el modo estricto no permite implicitamente el tipo any
// esto tambien se debe hacer para los parametros que van en las funciones para el siguiente caso character pa a tipara de una interface

interface Character{
    nombre:string;
    hp:number;
    showHp:() => string; // esta es la manera como se define un metodo en una interface con su valor de retorno cual quiera se desee

}

// ** Esta funcion entonces resibe un objeto que cumple con la interface Character
const healCharacter = (character:Character, amount:number) =>{
    character.hp += amount;
    console.log(character.showHp())
}

const strider:Character = {
    nombre: "Birelman",
    hp: 100,
    showHp: function (): string {
       return `Puntos de vida ${this.hp}`;
    }
}

healCharacter(strider,100);

export {};