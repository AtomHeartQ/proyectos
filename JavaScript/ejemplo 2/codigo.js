//mezclando tipos de datos
var concatena = "upgrade" + 5 + 5;
//upgrade55 -> se convierte todo en un string de texto

var sumaConcatena = 5 + 5 + "upgrade";
//8upgrade -> la suma va antes de que se interprete todo como cadena de texto

//-------------------------Objetos---------------------------------
var persona ={
    nombre:"Peter",
    apellido:"Parker",
    pais:"USA",
    profesion:"student"
}
//Accedemos a sus propiedades, con el punto o con los paréntesis
console.log("La persona se llama "+persona.nombre);
console.log("Y es "+persona.profesion);
console.log("Y es de "+persona['pais']);

persona.gender ="M"
console.log(persona['gender']) //se pueden añadir propiedades dinámicamente

//-------------------Arrays-------------------------------------
//se accede a ellos por posición
var bingueros = ["Hulk", "Spiderman", "Antman", "CapitanAmerica", "ViudaNegra"];
console.log(bingueros);
var binguero = bingueros[0]; //devuelve Hulk
console.log(binguero);

//Propiedad .length -> devuelve el número de posiciones. 
console.log(bingueros.length); //Devuelve 3

//El array funciona como una pila y se puede manipular y modificar.
//método push
bingueros.push("Ironman", "Thor");
console.log(bingueros);
//se añaden al final

//método pop -> eliminar elementos de un array
bingueros.pop();
console.log("Pop: "+ bingueros);
//elimina el último elemento

//método splice
bingueros.splice(0,1);
bingueros.splice(1,1); //recorta el número de elementos correspondiente al segundo número desde la posición indicada por el primer parámetro
console.log("Splice: " + bingueros);

//método sort -> ordena la lista alfabéticamente
bingueros.sort();
console.log("Sort: "+ bingueros);

//método reverse -> invierte el orden del array
//otros: shift, unshift...

//método concat: concatena un array a otro, pero no lo modifica. 
//método join: sin parámetro, devuelve una cadena con los valores del array separados con comas. Se puede especificar una cadena que sirva de separador.
//slice: como splice pero no modifica el array
//tostring

//Localizar un índice en un array
//método indexof

const indexOfIronman = bingueros.indexOf("Ironman");

bingueros.splice(indexOfIronman, 1);
console.log(bingueros); //forma útil de eleminiar un elemento concreto del que no sabemos el índice. 


//bucles

for (let i = 0; i < bingueros.length; i++) {
    console.log("Bucle: " + bingueros[i]);
    
}

//Un bucle y una condición para imprimir por consola los usuarios menores de edad y los mayores clasificados
const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16} ]

const mayores =[];
const menores =[];

for (let i =0; i < users.length;i++){
    if (users[i].years < 18){
        console.log("El usuario "+ users[i].name + " es menor de edad" );
        menores.push(users[i].name);
    } else{
        console.log("El usuario "+ users[i].name + " es mayor de edad" )
        mayores.push(users[i].name);
    }
}
console.log("Usuarios mayores de edad: "+ mayores);
console.log("Usuarios menores de edad: " + menores);