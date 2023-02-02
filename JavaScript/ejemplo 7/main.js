//---------------------- Template Literals ----------------------------------------------
const edad = 33;
const str = `Hola, tengo ${edad} años`;

//También permiten meter saltos de línea
const divNodeText = `
    <div>
        <p>Hola, chicos!<p>
    <div>
`;

//---------------------- Arrow functions -------------------------------------------------
//permiten declarar funciones de manera más compacta, así como lidiar mejor con el scope.
//pueden ser anónimas o asignarse a una variable

const a = () => {};

//tienen distinto contexto del .this

const hello = "Hello";
const name = "Abel";

function getText(hello, name) {
  return hello + " " + name;
}

const getText = (hello, name) => {
  return hello + " " + name;
};

const getText = (hello, name) => hello + " " + name;
//otra posibilidad, igual que la arrow function, si lo único que hace es retornar algo.

const getText = (hello, name) => {
  name += " Jimenez";
  return hello + " " + name;
};
//si hacemos algo más tenemos que usar la estructura completa

const printText = "Hello World";
function print() {
  console.log(printText);
}

const print = (printText) => {
  console.log(printText);
};
//si solo hay un parámetro, podemos usar este atajo

const getPrint = (printText) => printText;
//o incluso hacer un combo de ambos atajos. Es raro, pero se puede encontrar, I guess.

const generateMultiplier = (a) => (b) => a * b;
//o rizar el rizo xD
//esto es equivalente de:
//const generateMultiplier = function(a){
//  return function (b) {
//      return b * a;
//}}

const coso = (b = 10, c = 5) => {
  console.log(b + c);
};

coso(); //15
coso(4); //9
coso(12, 10); //22

//las arrow functions no pueden usarse para construir objetos
//no pueden ser usadas como funciones generadoras (aka cada vez que las ejecutas, generan un valor distinto)
//los métodos call y apply (que modifican el contexto del this) no pueden ser usadas

//--------- FUNCIÓN CALL -------
// Función para cambiar el valor de this

var fantasticFour = {
  nombre: "Reed Richards",
  saludar: function (amigo1, amigo2) {
    console.log(`Hola, ${amigo1} y ${amigo2}, yo soy ${this.nombre}`);
  },
};
var newThisvalue = { nombre: "Pepe" };

var miFantastic = fantasticFour.saludar;

miFantastic("Sue Storm", "Johnny Storm"); //nombre: Reed Richards
miFantastic.call(newThisvalue, "Sue Storm", "Johnny Storm"); //nombre: Pepe

// apply() actúa de manera similar a call(), pero solo recibe dos argumentos, el primero el contexto de la función, el valor de this
//el segundo, un array que contendrá los argumentos que se le pasarán a la función

miFantastic.apply(fantasticFour, ["Ben Grimm", "Sue Storm"]);

//bind() nos permite guardar el nuevo contexto en una variable
const newSaludar = fantasticFour.saludar.bind(
  newThisvalue,
  "Sue Storm",
  "Johnny Storm"
);
