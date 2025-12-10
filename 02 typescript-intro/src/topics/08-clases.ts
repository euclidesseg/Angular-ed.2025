export class Person{
    //propiedades
    public name:string;
    public address:string;
    public lastName:string;
    private country:string;


    // metodos

    //** se deben inicializar las propiedades de  una clase en el constructor
    //** El constructor de una clase en angular sienta las bases para lo que es inyeccion de dependencias*/
    constructor(lastName:string,country:string){
        this.name = lastName; // lastName se asigna a name y a lastName por eso en el contructor hijo se mandan estos dor argumentos
        this.address = 'Medellin';
        this.lastName = lastName;
        this.country = country;
    }
    // el constructor es el primer metodo que se llama cuando se crea una instancia de cualquier clase

    // constructor(age:number = 29){

    // }

    // el segundo constructor es la forma mas usada en la cual se crean las propiedades de la clase directamente en el contructor y si es posible,
    // tambien se pueden asignar sus valores
    public getCountry():string{
        return this.country
    }
}


// Extender una clase en typescript es heredar las propiedades de esta para usarlas en otra clase
export class Hero extends Person{
  
    
    constructor(public alterEgo:string, public age:number, public realName:string,){
        super('Man','Marvel');
    }

}
const ironMan = new Hero('Iron',40, 'Tony');

console.log(ironMan.getCountry())
console.log(ironMan)

