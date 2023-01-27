//getElemenyById
document.getElementById("btn").addEventListener("click", handleClick);

function handleClick(event){
    console.log(event);
}

//getElementsByName
const emails$$ = document.getElementsByName('email');
console.log(emails$$);

//querySelector
const btn2$$ = document.querySelector('#btn');
console.log(btn2$$);

const h2$$ = document.querySelector('.text-heading');
console.log(h2$$);

const p$$ = document.querySelector('p'); //Solo pilla el primer 'p'
const pAll$$ = document.querySelectorAll('p');
console.log(p$$);
console.log(pAll$$);

const dataFunction$$ = document.querySelector('[data-function="test"]');
console.log(dataFunction$$);

const google$$ = document.querySelector('[href="https://www.google.es/"]');
console.log(google$$);


//ejercicio práctico

let rayo = "El rayo es el mejor";
rayo = rayo.toUpperCase();
rayo = rayo.split("").join("-");
console.log(rayo);

//otro ejercicio: pirámide y pirámide invertida
for (let i = 1; i <10; i++){
    let row="";
    for(let j = 0; j < i; j++){
        row = row + i + " ";
    }
    console.log(row);
}

for (let i = 9; i>0; i--){
    let row ="";
    for (let j = 0; j < i; j++){
        row = row + i + " ";
    }
    console.log(row);
}