//------ DESTRUCTURING -------

const user = { userName: "Abel", role: "Professor" };

const { userName, role } = user;

//Asigna a las variables entre llaves las propiedadades de user
//es igual a declararlo:
//const name = user.name
//const role = user.role
//En el destructuring las variables tienen que llamarse igual que las propiedades del objeto
//evidentemene, duh

console.log(userName); //Abel

const returnAObj = () => {
  return { city: "Seul", country: "South Korea" };
};

const { city, country } = returnAObj();
//esto es muy normal en React, tanto con objetos como arrays
//ejemplo con un array:

const returnArray = () => {
  return ["Seul", "Corea del Sur"];
};

const [skyline, countripiti] = returnArray();
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

//--------------------------------------- IMPORT/EXPORT ----------------------------------

//*ver otros ejemplos en la carpeta*

//--------------------------------------- LOOPS -------------------------------------------
//-------- .map() -------------------------
const revacholians = [
  { id: 20, name: "Harrier DuBois" },
  { id: 24, name: "Kim Kitsuragi" },
  { id: 56, name: "Measurehead" },
  { id: 88, name: "Klassje Amandou" },
];

const revacholiansId = revacholians.map((revacholian, index) => {
  console.log(index);
  return revacholian.id;
});
//.map() devuelve un array que podemos guardar en una variable

console.log(revacholiansId); //[20,24,56,88]

for (const revacholian of revacholians) {
  console.log(revacholian);
} //for solo lo recorre, no crea un nuevo array

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 1, name: "Amanda" },
];

const usersNameList = users.map((user) => {
  if (user.name.startsWith("A")) {
    return "Anacleto";
  } else {
    return user.name;
  }
});

const newUsersNameList = users.map((user) =>
  user.name[0] === "A" ? "Anacleto" : user.name
);

console.log(usersNameList);
console.log(newUsersNameList);

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesList = cities.map((city) =>
  city.isVisited === true ? city.name + " (Visitado)" : city.name
);

console.log(citiesList);

//-------------------------------------- .filter() -----------------------------
const animalsdAigo = [
  { id: 1, name: "Albert", faction: "Rebels" },
  { id: 2, name: "Mangel", faction: "Empire" },
  { id: 3, name: "Toforu", faction: "Rebels" },
  { id: 4, name: "Andreu", faction: "Empire" },
];

const empireAnimals = animalsdAigo.filter((animal) => {
  return animal.faction === "Empire";
});

console.log(empireAnimals);

//la diferencia con .map()
const empireBooleanAnimals = animalsdAigo.map((animal) => {
  return animal.faction === "Empire";
});

console.log(empireBooleanAnimals);

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90, 18];

const older = ages.filter((age) => {
  return age >= 18;
});

console.log(older);

//----------------------------------------- .find() -------------------------------
//devuelve el valor del primer elemento que cumple la función de prueba proporcionada
//a diferencia de filter que siempre devuelve un array aunque sea de una sola posición

const array1 = [5, 12, 20, 8, 25, 130];

const found = array1.find((element) => element > 10);
console.log(found); //devuelve 12

const aliens = [
  { name: "Zalameto", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumusu", planet: "Marte", age: 5023021 },
];

const mutations = [
  { name: "Porompompero", description: "Permite tocar el tambor" },
  {
    name: "Fly me to the moon",
    description: "Permite volar, pero solo a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const foundAlien = aliens.find((alien) => alien.name === "Cucushumusu");
const foundMutation = mutations.find(
  (mutation) => mutation.name === "Porompompero"
);

const mutatedAlien = { ...foundAlien, mutation: { ...foundMutation } };
console.log(mutatedAlien);

//----------------------------------------- .reduce() -------------------------------
const mesAnimalsdAigo = [
  { id: 1, name: "Albert", years: 26 },
  { id: 2, name: "Mangel", years: 28 },
  { id: 3, name: "Toforu", years: 26 },
  { id: 4, name: "Andreu", years: 28 },
];

const totalYears = mesAnimalsdAigo.reduce((accumulator, pilot) => {
  return accumulator + pilot.years;
}, 0);

console.log(totalYears);

const exam = [
  { name: "Paquita Salas", score: 5 },
  { name: "Pepe Palotes", score: 3 },
  { name: "Fulanito Pascual", score: 8 },
  { name: "Menganito de Tal", score: 7 },
  { name: "Teresa Gonzalez", score: 4 },
  { name: "Pedro Pascal", score: 7 },
  { name: "Lluc Garau", score: 10 },
  { name: "darkdeathy69", score: 2 },
];

const totalScore = exam.reduce((accum, alumn) => {
  return accum + alumn.score;
}, 0);

console.log(totalScore);

const approvedScore = exam.reduce((accum, alumn) => {
  return alumn.score >= 5 ? accum + alumn.score : accum;
}, 0);

console.log(approvedScore);

const averageExamScore = exam.reduce((accum, alumn) => {
  return accum + alumn.score / exam.length;
}, 0);

const averageExam = totalScore / exam.length;

console.log(averageExamScore, averageExam); //mismo resultado de dos maneras distintas

/**const videogames = [
  { name: "Final Fantasy VII", genre: ["RPG"], score: 9.5 },
  { name: "AC Valhalla", genre: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genre: ["Accion", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros.", genre: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genre: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Breath of the Wild",
    genre: ["RPG", "Masterpiece"],
    score: 10,
  },
];

const vdgRPG = videogames.filter((game) => {
  game.genre.forEach((element) => {
    return element === "RPG";
  });
});

const vdgRPGAverage = vdgRPG.reduce((accum, game) => {
  return accum + game.score / vdgRPG.length;
});

console.log(vdgRPGAverage); **/
