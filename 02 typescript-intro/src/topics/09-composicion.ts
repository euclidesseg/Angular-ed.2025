
/** La composición consiste en que si queremos dejar de extender una clase podemos simplemente declarar un objeto 
 *  de la clase a la cual deseamos extender y usarla en nuestra clase actual**/
export class Person{
    public name:string;
    public address:string;
    constructor(name:string,address:string){
        this.name = name;
        this.address = address;
    }
}

export class Hero{

    constructor(public alterEgo:string,public age:number,public realName:string,public person:Person){
        this.person = new Person(realName,'New York');
    }
}   


const person:Person = new Person('Iron Man','New York');
const hero:Hero = new Hero('Iron man',40,'Tony', person);

console.log(hero)