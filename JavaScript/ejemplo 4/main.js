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