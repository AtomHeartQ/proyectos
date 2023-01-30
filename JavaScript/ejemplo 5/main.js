const div$$ = document.createElement("div");

document.body.appendChild(div$$);

const p$$ = document.createElement("p");
const insertHere = document.querySelector('[data-function="insertHere"]');
insertHere.appendChild(p$$);
//inserta siempre al final
//realizar acciones en el DOM es costoso
//hacerlo lo menos posible es la opción correcta

//eliminar un elemento
const removeMe$$ = document.querySelector(".fn-remove-me");
removeMe$$.remove();

//insertar código
const pDin$$ = document.createElement("p");
pDin$$.textContent = "Soy dinámico";

insertHere.appendChild(pDin$$);

const insertSec$$ = document.querySelector(".fn-insert-here-sec");
insertSec$$.innerHTML =
  '<img src="https://picsum.photos/300/200?random=2"/><p class="soy-una-p"><span class="edit-me">Hola, </span> soy el div secundario<p>';

//la diferencia entre textContent e innerHTML es que el segundo es más potente
//innerHTML nos permite insertar código HTML, p. ej.: <p>

const insertOverMe$$ = document.querySelector(".fn-insert-over-me");
insertOverMe$$.outerHTML = "<div><p>Estoy sobrescribiendo</p></div>";

//outerHTML sobrescribe el elemento, el h2 orginal del documento pasa a ser un div

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twittar"];

const list = document.createElement("ul");
apps.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  list.appendChild(li);
});

document.body.appendChild(list);

const pepeDiv$$ = document.querySelector(".fn-check-me");

console.log(pepeDiv$$.attributes);
console.log(pepeDiv$$.className);
console.log(pepeDiv$$.classList); //crea un array con las clases
//classList tiene funciones propias
pepeDiv$$.classList.add("clase-nueva");
pepeDiv$$.classList.remove("pepe-class");
pepeDiv$$.classList.toggle("clase-nueva"); //si está la quita, si no, la añade

console.log(pepeDiv$$.id);
console.log(pepeDiv$$.innerHTML);

console.log(pepeDiv$$.nodeName);
console.log(pepeDiv$$.nodeValue);

console.log(pepeDiv$$.style); //obtener valores o añadirlos en línea
pepeDiv$$.style.color = "red";
pepeDiv$$.style.fontSize = "24px";
pepeDiv$$.style.fontFamily = "Arial";

console.log(pepeDiv$$.tagName);
console.log(pepeDiv$$.title);
console.log(pepeDiv$$.childNodes);
console.log(pepeDiv$$.firstChild);
console.log(pepeDiv$$.lastChild);
console.log(pepeDiv$$.nextSibling);
console.log(pepeDiv$$.previousSibling);
console.log(pepeDiv$$.parentNode);
console.log(pepeDiv$$.childNodes);

//ejemplos de acceso
const accessP$$ = document.querySelector(".fn-access-here p");
const accessH4$$ = document.querySelector(".fn-access-here h4");

const accessDiv$$ = document.querySelector(".fn-access-here");
const anotherAccessP$$ = accessDiv$$.querySelector("p");
const anotherAccessH4$$ = accessDiv$$.querySelector("h4");
//el segundo método resulta más óptimo
