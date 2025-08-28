
/*  La idea de tener exportaciones e importaciones se trata de tener funcionalidades encapsuladas*/

/*  La idea de tener exportaciones e importaciones se trata de tener funcionalidades encapsuladas*/
import { Product,calcularImpuesto,TaxCalculationOptions} from "./06-function-destructuring";
const shoppingCart:Product[] = [
    {
        description:'Nokia',
        price: 100
    },
    {
        description:'iPad',
        price: 150
    }
];

const impuesto:number = 0.51;

const options:TaxCalculationOptions = {
    inpuesto:impuesto,
    products:shoppingCart
}
const [total, impuestoAply] = calcularImpuesto(options);

console.log(`Total: ${total}`)
console.log(`Impuesto: ${impuestoAply}`)


/* === NOTA: Siempre que se va a importar un archivo no se debe tener en dicho archivo codigo ejecutable, a menos que sea estrictamente necesario*/