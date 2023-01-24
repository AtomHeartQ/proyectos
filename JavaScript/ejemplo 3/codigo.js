//-------FUNCIONES-----
//se ejecutan al ponerle los paréntesis
//hay muchas ya creadas dentro del propio JS, como .log()

//se declaran a través de la palabra reservada function

function suma(num1, num2){
    return num1 + num2;
}
//ejemplo de una función para sumar dos números. 
//Los ítems en el paréntesis son los parámetros que entran en la función
//return es el valor que devuelve la función

var result = suma(2, 2);
var result2 = suma(4, 6);
console.log(result, result2);

function printMessage(textToPrint){
    console.log(textToPrint)
}

printMessage('Patatas');

//podemos asignar funciones a variables
var sayHello = function(){
    return "Hello!";
}

sayHello(); //Devuelve "Hello!"

const products =['Camiseta básica', 'Pantalón vaquero', 'Gorra de béisbol', 'Camiseta de basket', 'Cinturón de Orión', 'Camiseta AC/DC']
for (let i = 0; i < products.length; i++) {
    const element= products[i];

    if (element.toLowerCase().includes('Camiseta'.toLowerCase())){
        console.log(element);
    }
    
}

//--------SWITCH------
var name = prompt("Favorite Marvel character:");
var team ="";

switch(name){
    case "Daredevil":
        team="The Defenders";
        break;
    case "Spiderman":
        team="Avengers";
        break;
    default:
        team="Team Marvel";
        break;
}
printMessage("Your favourite character is from team "+team);


//-----Operador Ternario------
//Similar a un if/else pero más corto. el orden es true : false, en cuanto a si se cumple o no la condición.

var score = 5;
console.log(score >= 6 ? "Aprobado" : "Suspenso");

var word = 'Strawberry';
var isLongWord = word.length > 8? "is a big word" : "is a short word";
var isLongWord = word.length > 8? (word.length > 12? "is a huge word" : "is a big word") : "is short word";
//ejemplo de concatenación de operadores ternarios


const alumns = [
    {name: 'Pepe Viyuela', T1: false, T2: false, T3: true}, {name: 'Abel Caballero', T1: false, T2: true, T3: true},
    {name: 'Lucía Aranda', T1: true, T2: false, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Bonito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const element = alumns[index];
    var approved = 0;
    approved = element.T1 == true ? approved++ : approved;
    approved = element.T2 == true ? approved++ : approved;
    approved = element.T3 == true ? approved++ : approved;
    element.isApproved = approved >= 2 ? true : false;

}

//---- FOR EACH ------
const myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

const myFunction = function (element){
    console.log(element);
}

myArray.forEach(myFunction);

//o, de forma más elegante, con menos código:

myArray.forEach(function (element){
    console.log(element);
})

// FOROF
for (element of myArray){
    console.log(element);
}
// FOR IN
//Definimos un objeto con una serie de valores y lo recorremos

var spiderman = {
    nombre: "Peter",
    apellidos: "Parker",
    país: "USA",
    profesion:"Student"
}

for (var key in spiderman){
    console.log("Spiderman tiene "+key+" con valor: "+spiderman[key]);
}

const placesToTravel =['Japón', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];
for (const element of placesToTravel) {
    console.log("Viaje a: "+element);
}

const alien ={
    name: 'Wormcuck',
    race: 'cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien){
    console.log('Propiedad: ${key}, valor: alien[${key}]')
}

const placesToGo =[{id:5, name:'Japón'}, {id:11, name:'Venecia'}, {id: 23, name:'Murcia'},{id:40, name:'Santander'} , {id: 44, name:'Filipinas'},{id: 59, name: 'Madagascar'}];
for (const element of placesToGo){
    for (let key in element){
        console.log(key+ ': ' + element[key])
    }
}
/**for (const element of placesToGo) {
    if (element.id == 11 || element.id == 40){
        let indexOfElement = placesToGo.indexOf(element);
        placesToGo.splice(indexOfElement, 1);
    }
}Vamos a hacerlo ahora con un bucle for normal */

for (let index = 0; index < placesToGo.length; index++) {
    if (placesToGo[index].id == 11 || placesToGo[index].id == 40){
        placesToGo.splice(index, 1);
    }
}

for (const element of placesToGo){
    for (let key in element){
        console.log(key+ ': ' + element[key])
    }
}
