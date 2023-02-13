fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

fetch("https://api.genderize.io?name=peter")
  .then((res) => res.json())
  .then((resParsed) => {
    console.log(resParsed);
  });

fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((resParsed) => {
    console.log(resParsed);
  });

const baseUrl = "https://api.nationalize.io";

function searchName() {
  const input$$ = document.querySelector("input");
  const newUrl = baseUrl + "?name=" + input$$.value;
  fetch(newUrl)
    .then((res) => res.json())
    .then((person) => {
      createNationalizeP(person);
    });
}

const createNationalizeP = (person) => {
  const p$$ = document.createElement("p");
  let text = `El nombre ${person.name} tiene`;
  for (const country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    text += ` un ${percentage} por ciento de ser de ${country.country_id} `;
  }
  p$$.textContent = text;
  document.body.appendChild(p$$);

  const deleteButton$$ = document.createElement("button");
  deleteButton$$.innerHTML = "X";
  p$$.appendChild(deleteButton$$);
  deleteButton$$.addEventListener("click", function () {
    if (p$$) {
      p$$.remove();
      deleteButton$$.remove();
    }
  });
};

const button$$ = document.querySelector("button");

button$$.addEventListener("click", searchName);
