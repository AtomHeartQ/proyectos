const datos = {
  categorias: [
    {
      text: "Personajes",
      path: "/personajes",
      url: "https://swapi.dev/api/people/",
    },
    {
      text: "Planetas",
      path: "/planetas",
      url: "https://swapi.dev/api/planets/",
    },
    {
      text: "Vehículos",
      path: "/vehiculos",
      url: "https://swapi.dev/api/vehicles/",
    },
  ],
};

function crearEnlace(linkTxt, funcion) {
  const a = document.createElement("a");
  const link = document.createTextNode(linkTxt);
  a.appendChild(link);
  a.setAttribute("href", "#");

  a.addEventListener("click", function (e) {
    e.preventDefault();
    funcion();
  });
  return a;
}

function clearContainer() {
  console.log("Soy el clearContainer");
  document.querySelector("article").innerHTML = "";
}

function contenido() {
  const main = document.querySelector("main");
  const contenido = document.createElement("div");
  //Aquí iria un contenido.classList.add() para el estilo
  main.appendChild(contenido);
  const articulo = document.createElement("article");
  contenido.appendChild(articulo);
}

function crearContenido(txt) {
  const articulo = document.querySelector("article");
  const titulo = document.createElement("h1");
  const tituloTxt = document.createTextNode(txt);
  titulo.appendChild(tituloTxt);
  articulo.appendChild(titulo);
}

function crearContenidoSecundario(list) {
  const articulo = document.querySelector("article");
  const subtitulo = document.createElement("h1");
  const subtituloText = document.createTextNode(list);
  subtitulo.appendChild(subtituloText);
  articulo.appendChild(subtitulo);
}

function crearTablaSecundaria(list) {
  const articulo = document.querySelector("article");
  const listDos = document.createElement("ul");
  listDos.classList.add("contenido");
  console.log(list);

  for (let item in list) {
    const txtTres = document.createTextNode(list[item]);
    const txtDos = document.createTextNode(item);
    const parDos = document.createElement("p");
    const parTres = document.createElement("p");

    parDos.appendChild(txtDos);
    parTres.appendChild(txtTres);

    const listItem = document.createElement("li");
    listItem.appendChild(parDos);
    listItem.appendChild(parTres);
    listDos.appendChild(listItem);
  }
  articulo.appendChild(listDos);
}

function crearTabla(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      const articulo = document.querySelector("article");
      const list = document.createElement("ul");

      for (let i = 0; i < data.results - 2; i++) {
        const listItem = document.createElement("li");
        const aText = crearEnlace(data.results[i].name, function () {
          clearContainer();
          crearContenidoSecundario(data.results[i].name);
          crearTablaSecundaria(data.results[i]);
        });
        listItem.appendChild(aText);
        list.appendChild(listItem);
        articulo.appendChild(list);
      }
    })
    .catch(function (errors) {
      console.log(errors);
    });
}

function cabecera() {
  const main = document.querySelector("main");
  const cabecera = document.createElement("div");
  const imgCabecera = document.createElement("img");
  imgCabecera.src = "./img/Star_Wars_Logo.png";

  cabecera.appendChild(imgCabecera);
  main.appendChild(cabecera);
}

function navegador() {
  const main = document.querySelector("main");
  const nav = document.createElement("div");

  main.appendChild(nav);

  for (let i = 0; i < datos.categorias.length; i++) {
    const enlace = crearEnlace(datos.categorias[i].text, function () {
      clearContainer();
      crearContenido(datos.categorias[i].text);
      crearTabla(datos.categorias[i].url);
    });
    nav.appendChild(enlace);
  }
}

window.onload = function () {
  cabecera();
  navegador();
  contenido();
};
