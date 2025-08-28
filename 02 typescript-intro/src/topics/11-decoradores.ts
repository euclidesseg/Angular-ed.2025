/*  Los decorarodes son funciones que modifican clases, metodos propiedades o parametros se utilizan 
    para agregar metadasos o modificar comportamientos de componentes */
    
    function classDecorador<T extends {new (... args:any[]):{}}>(constructor:T)
    {
        return class extends constructor{
            newProperty = 'New Property';
            hello='override';
        }
    }
    @classDecorador 
    //  Tecnicamente lo que esta haciendo este decorador es extender a la SuperClass de un constructor es decir, al decorador se le pasa la clase SuperClass
    //  y este hace que la SuperClasss extienda del parametro constructor de la funcion decoradora tambien a su vez a esta SuperClass se le agregan dos propiedes con el decorador
    //  newProperty y  hello
    class SuperClass{
        public myProperty:string = 'Abc123';
        print(){
            console.log('Hola mundo')
        }
    }

    console.log(SuperClass)
    const myClass = new SuperClass();
    console.log(myClass)