let pepe: string = "Pepe";
let a: number = 10;
let list: number[] = [1,2,3,40];
let listString: string[] = ['a', 'b', 'c'];


//en la terminal: tsc .\ejemplo_1.ts sirve para compilar este ejemplo en un js
//typescript es un lenguaje de testeo, que ha de ser compilado siempre
//sirve a la hora de desarrollar

let abc: any;

abc= 'asdsdasd';
abc = 1;
abc = true;
let listMix: any[] = [1, 'b', 'c', true];
//any declara la variable como de cualquier tipo

//también nos permite tipar funciones, para especificar qué retorna. 
function addTwoNumbers(a: number, b: number): number{
    return a+b;
}

let addedNumber: number = addTwoNumbers(1,2);

console.log(addedNumber);

function sayMyName(name: string): void {
    console.log("Your name is " + name);
}
//una función void no retorna nada
//es algo redundante

//---------------- INTERFACES ---------------------
//permite crear nuestro propio tipo de dato
interface Car{
    brand: string;
    years: number;
    numberOfWheels?: number;
}

let car1: Car = {years: 5, brand: 'Mercedes', numberOfWheels: 5};
//hay que construir el objeto con todas sus propiedades obligatoriamente

interface Persona {
    nombre: string;
    edad: number;
    profesion?: Profesion[];
}

interface Profesion{
    nombre: string;
    exp: number;
}

let juan: Persona = {nombre: 'Huan Pérez', edad: 20};
let magdalena: Persona = {nombre: 'Magdalena Pérez', edad: 20, profesion: [{nombre: 'Repostera', exp: 5}]};
console.log(juan);