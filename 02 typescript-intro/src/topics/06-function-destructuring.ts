
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

export interface TaxCalculationOptions{
    impuesto:number;
    products:Product[];
}

const soppingCart = [phone, tablet] // opciones de compra
const impuesto = 0.51; // impuesto de cada compra




// const calcularImpuesto = (options:TaxCalculationOptions):number[] =>{
export const calcularImpuesto = (options:TaxCalculationOptions):[number,number] =>{// devuelve una tupla o arreglo con solo dos elementos
    // let total = 0;
    const  {products:productos} = options;

    // tradicional con forEach
    //  options.products.forEach(({price}) =>{
    //     total += price;
    // })

    // Con .reduce para contar
    let total = productos.reduce((t, {price}) => t + price,0)

    return [total, total * options.impuesto]
}


// aplicando destructuring a este arreglo que devuelve la función calcularImpuesto
const [total, impuestoAply] = calcularImpuesto({
    'impuesto': impuesto,
    products:soppingCart

})

console.log(`Total: ${total}`);
console.log(`Impuesto: ${impuestoAply}`);


