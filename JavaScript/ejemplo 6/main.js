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
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then(function (res) {
    console.log(res);

    for (const pokemon of res.results) {
      const p$$ = document.createElement("p");
      p$$.textContent = pokemon.name;
      document.body.appendChild(p$$);
    }
  });

fetch("https://rickandmortyapi.com/api/character")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res);

    for (const character of res.results) {
      const p$$ = document.createElement("p");
      const img$$ = document.createElement("img");
      p$$.textContent = character.name;
      img$$.setAttribute("src", character.image);
      document.body.appendChild(p$$);
      document.body.appendChild(img$$);
    }
  });
