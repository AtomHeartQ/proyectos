//el código se ejecuta de arriba a abajo, línea a línea
//console.log(prueba); resultaría en undefined
const prueba = 10;
console.log(prueba);

//La ejecución de JS es muy rápida
setTimeout(function () {
  console.log(1);
}, 1000);

console.log(2); //este aparecerá primero

//ejemplo de callback
function callbackExample(list, message) {
  console.log(`El listado final es: ${list.join(",")}`, message);
}

function addItemAndTriggerCallback(item, list, callback) {
  if (!list) {
    setTimeout(() => {
      throw new Error("No existe el array");
    }, 2000);
  } else {
    setTimeout(() => {
      list.push(item);
      callback(list, "[ok]");
    }, 2000);
  }
}

addItemAndTriggerCallback("Mario", ["Alberto", "José"], callbackExample);

//-------FUNCIÓN FETCH------
fetch("https://pokeapi.co/api/v2/")
  .then((res) => res.json())
  .then(function (res) {
    console.log(res);
  });
