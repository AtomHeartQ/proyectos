console.log('Ejemplo de código en un fichero js');
var name = 'Pepito Pérez';
console.log(name);
console.log(edad); //la consola lo muestra como undefined porque la variable aún no tiene un valor asignado
var edad = 16;
console.log(edad); 

//var no se suele usar ya, en su lugar usamos let y const
//let tiene un contexto más específico y es una buena práctica a día de hoy
//var es una declaración a nivel más global
//const declara una variable constante, que no cambia ni recibirá diferentes asignaciones en un futuro

const nombre = 'Albert';
const apellido = 'Valado';
const años = 26;

//concatenación de elementos
console.log('Me llamo '+nombre+' '+apellido+' y tengo '+años+' años.'); 

//operadores aritméticos
var numa=5;
var numb=2;
console.log(numa + numb); //Imprime 7
console.log(numa - numb); //Imprime 3
console.log(numa * numb); //Imprime 10
console.log(numa / numb); //Imprime 2.5

var num1=5;
var num2=10;

//asignación
num1 = num2; //num 1 pasa a valer 10
num1 +=num2; //asignación y suma, vale 20
num1 -=num2; //asignación y resta, vuelve a valer 10
num1 *=num2; //asignación y multiplicación, pasa a valer 100
num1 /= num2; //asignación y división, pasa a valer 10

//Boolean
var isActive= true;
var isDisabled= false;

//operador lógico OR
var tengoEfectivo=true;
var tengoTarjeta=false;
var puedoPagar= tengoEfectivo || tengoTarjeta; 
console.log(puedoPagar); //devuelve true, porque tengo efectivo

//operador lógico AND
var tengoCoche = true;
var tengoCarnet = false;
var puedoConducir = tengoCoche && tengoCarnet;
console.log(puedoConducir); //devuelve false

//operador lógico NOT
!true // -> false
!false // -> true

// JavaScript no es un lenguaje fuertemente tipado
var a = 10;
a = 'Pepe';
a = 15;
a = true;

//valores primitivos: string, number, boolean, null, undefined
//hay dos valores más, no primitivos, formados de conjuntos de datos: objetos y arrays
a = {name: 'Paco', surname: 'Clavo', years: 99};
console.log(a.name); //acceder a una de las propiedades del objeto
a = ['azul', 'rojo', 'negro', 'verde'];
//lista de datos enumerados, se accede a ellos por la posición
console.log(a[0]);
console.log(a[2]);

//Referencias
let b=10;
let c=b;
c=20;
//b = 10 y c = 20

let d={name: 'Pepe', surname: 'Gotera'};
let e=d;
e.name = 'Pedro';
//e.name = 'Pedro' y d.name = 'Pedro'. No se hace una copia del objeto, sino que apunta al mismo sitio en memoria