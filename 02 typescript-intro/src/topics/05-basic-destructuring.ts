

interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}
interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Pero te conoci",
    details: {
        author: "Reick",
        year: 2019
    }
}


// destructuring es tomar propiedades que me interesen de un objeto 
// const {song:anotherSong} = audioPlayer  // song:anotherSong esta sintaxis renombra la la propiedad song del objeto y la guarda en una nueva constante
// const {songDuration:anotherDuration} = audioPlayer  // song:anotherSong esta sintaxis renombra la la propiedad song del objeto y la guarda en una nueva constante
const {details:{author:anotherAuthor}} = audioPlayer // Ingresando a la propiedad author dentro de details
// console.log(`Song: ${anotherSong}`)
// console.log(`songDuration: ${anotherDuration}`)
console.log(`songAuthor: ${anotherAuthor}`)


// ** Desestructuración de arreglos
const dbz:string[] = ['Goku','Vegeta','Trunk']

// acceder tradicionalmente
console.log(`Personaje 3: ${dbz[2]}`);

// aceder con destructuracion
const [p1,p2, trunk] = dbz;

// puedo tambien acceder hasta la ultima posición sin acceder a las primeras posiciones
const [, , trunk2] = dbz
console.log(trunk2)






export{}