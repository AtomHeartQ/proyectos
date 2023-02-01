//Crea 3 funciones llamadas father, confirmExample, promptExample. confirmExample recibirá una variable de texto (text),
//que mostrará como título de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt
//La función father recibirá como parámetros tex, con el valor del título de las ventanas y una función callback.
//la función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array
//ejecuta father varias veces y haz un log del array

const userAnswers = [];

function confirmExample(text) {
  return confirm(text);
}
function promptExample(text) {
  return prompt(text);
}
function father(text, callbcak) {
  userAnswers.push(callbcak(text));
}

father("Esto es el ejemplo 1", confirmExample);
father("Esto es el ejemplo 2", promptExample);
father("Esto es el ejemplo 3", confirmExample);
father("Esto es el ejemplo 4", promptExample);

console.log(userAnswers);
