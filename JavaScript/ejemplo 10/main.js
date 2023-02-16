//---------------------------------- EJEMPLOS DE ASYNC Y AWAIT --------------------------

/**const runTimeOut = () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
  promise.then(() => {
    console.log("Time out!");
  });
};

runTimeOut(); **/

const runTimeOut = async () => {
  await new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
  console.log("Time out!");
};

runTimeOut();

/**function getCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((characters) => console.log(characters));
}**/

const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  console.log(characters);
};

getCharacters();

//Promise.all genera un array de promesas. Al resolverse todas, se ejecuta el código.
Promise.all([
  fetch("https://rickandmortyapi.com/api/character"),
  fetch("https://rickandmortyapi.com/api/location"),
]).then((rickAndMortyData) => {
  console.log(rickAndMortyData);
});
