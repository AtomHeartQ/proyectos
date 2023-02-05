//------ DESTRUCTURING -------

const user = { userName: "Abel", role: "Professor" };

const { userName, role } = user;

//Asigna a las variables entre llaves las propiedadades de user
//es igual a declararlo:
//const name = user.name
//const role = user.role
//En el destructuring las variables tienen que llamarse igual que las propiedades del objeto
//evidentemene, duh

console.log(name); //Abel

const returnAObj = () => {
  return { city: "Seul", country: "South Korea" };
};

const { city, country } = returnAObj();
//esto es muy normal en React, tanto con objetos como arrays
//ejemplo con un array:

const returnArray = () => {
  return ["Seul", "Corea del Sur"];
};

const [skyline, countripiti] = returnArray;
//podemos darles nombres distintos a las variables al ser un array.
//la asignación de variables se hace por posición
//más ejemplos prácticos:

const game = {
  title: "The Last of Us 2",
  genre: ["action", "zombie", "survival"],
  year: 2020,
};
const { title, genre, year } = game;

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };
const { name, itv } = car;
const [itv1, itv2, itv3] = itv;

const animalFunction = () => {
  return { animalName: "Bengal Tiger", type: "tiger" };
};
const { animalName, type } = animalFunction;

//------------------ SPREAD OPERATOR -------------------
//Permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos.
//los tres puntos quitan los corchetes

let xmen = ["Ciclops", "Beast", "Angel", "Marvel-girl"];
let newXmen = ["Wolverine", "NightCrawler", "Storm"];

//Se puede usar para copiar los valores en un nuevo array
let xmenCopy = [...xmen];

//Antes se usaba el concat y ahora ...
let myMutants = [...xmen, "pikachu", ...newXmen, "Bulbasaur"];

//se usa para jugar con tu array sin modificarlo
let [lastMutant] = [...xmen].reverse();
let arraySpliced = [...myMutants].splice(0, 5);

//no se ha modificado
console.log(xmen);
console.log(myMutants);
console.log(lastMutant);
console.log(arraySpliced);

//con objetos
const pokemon1 = { name: "Pikachu", gen: 1, type: "electric" };
const pokemon2 = { name: "Charmander", gen: 1, type: "fire" };

const copy1 = { ...pokemon1 }; //tiene los valores de pokemon1 en un nuevo objeto, aka una copia
const copy2 = { ...pokemon1, ...pokemon2 }; //al tener las mismas propiedades, el segundo objeto machacará al primero

const action = { action: "fly", time: "60 seconds" };
const copy3 = { ...pokemon1, ...action }; //hará un mix de ambos objetos
