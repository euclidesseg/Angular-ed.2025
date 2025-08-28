export interface Passenger{
    name:string;
    children?:string[];
}

const passengerOne:Passenger = {
    name:'Euclides',
}
const passengerTwo:Passenger = {
    name: 'Yeinis',
    children:['Sofia']
}

const printChildren = (passenger:Passenger) =>{
    // esto encadenamento opcional nos dice que si passenger.children?.length no existe devuelva 0
    const howManyChildren = passenger.children?.length || 0; 
    
    // if(!passenger.children) return 0;
    // aqui se le dice a typescript que nunca va a resibir un dato null o undefined
    // const howManyChildren = passenger.children!.length; 
    console.log(passenger.name, howManyChildren)
}

printChildren(passengerTwo)
printChildren(passengerOne)