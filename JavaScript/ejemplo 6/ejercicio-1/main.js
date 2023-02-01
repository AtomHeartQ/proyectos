//Crea 3 funciones llamadas father, sum, substract. La función sum sumará dos parámetros a y b y los retornará.
// La función substract hará lo mismo pero restando. La función father recibirá a, b como parámetros y una función callback (sum o substract).
//La función father deberá ejecutar la función como callback y añadir el número que retorne al array.
//Ejecuta varias veces la función father y finalmente haz un console.log del Array.

const numbersList = [];

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function father(a, b, callback) {
  var number = callback(a, b);
  numbersList.push(number);
}

father(2, 2, sum);
father(10, 5, substract);
father(20, 5, sum);
father(25, 5, substract);

console.log(numbersList);
