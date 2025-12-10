
// Siempre debemos tratar de no usar el tip de datos any este tipo admite cualquier tipo de datos en typescript
// ya que este le quita cualquier restriccion que tenga typescript sobre el tipo de datos

// any tambien nos quita mucho control sobre el tipo de retorno y argumentos que tiene una función
export function whatsMyType<T>(argument:T):T{
    return argument;
}

/*  Dado a que a la funcion anterior se le puede enviar cualquier tipo de datos, typescript tiene un concepto llamado generic el cual permite que a una
    función se le indique el tipo de datos que retornará dependiendo de el contexto en el que se use
    con la sintaxis  <T> se le indica que al funcion devuelve un tipo generico la letra T puede ser P, U, J cualquir la letra T simplemente es un 
    estandar*/

const amIString = whatsMyType<string>('Hola Mundo');
const amISNumber = whatsMyType<number>(100);
const amISArray = whatsMyType<number[]>([1,2,3,4]);

console.log(amIString.split(' '))
console.log(amISNumber)
console.log(amISArray)
