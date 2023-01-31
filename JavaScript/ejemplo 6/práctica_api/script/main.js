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
      console.log("Hola");
    });
  }
}

window.onload = function () {
  cabecera();
  navegador();
};
