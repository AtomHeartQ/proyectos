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
