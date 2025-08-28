
export interface Product{
    description:string;
    price:number;
}

const phone:Product = {
    description:'Nokia',
    price:200
}

const tablet:Product = {
    description: "iPad Air",
    price: 500
}

const soppingCart = [phone, tablet] // opciones de compra
const impuesto = 0.51; // impuesto de cada compra



export interface TaxCalculationOptions{
    inpuesto:number;
    products:Product[];
}

// const calcularImpuesto = (options:TaxCalculationOptions):number[] =>{
export const calcularImpuesto = (options:TaxCalculationOptions):[number,number] =>{
    let total = 0;
    options.products.forEach(({price}) =>{ //({price}) desestructura el precio del o bjeto actual
        total += price;
    })
    return [total, total * options.inpuesto]
}


// aplicando destructuring a este arregloq ue devuelve la función calcularImpuesto
const [total, impuestoAply] = calcularImpuesto({
    inpuesto:impuesto,
    products:soppingCart

})

console.log(`Total: ${total}`);
console.log(`Impuesto: ${impuestoAply}`);


