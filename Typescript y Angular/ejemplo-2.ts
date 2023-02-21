//----------------------- CLASES ----------------------

//Estructura básica:
class Car {
    brand;
    years;
    numberOfWheels;

    constructor(brand, years, numberOfWheels){
        this.brand = brand;
        this.years = years;
        this.numberOfWheels = numberOfWheels; 
    }
}

const car1 = new Car('Audi', 5, 4);
const car2 = new Car('Mercedes', 2, 5);
const car3 = new Car('Volvo', 1, 4);

class Toy {
    name: string;
    brand: string;
    minYears: number;

    //además de definir los atributos tenemos funciones, como el constructor
    constructor (name: string, brand: string, minYears: number = 2){
        this.name = name;
        this.brand = brand;
        this.minYears = minYears;
    }

    sayMyName(): string {
        return this.name;
    }
}

const toy1 = new Toy('Coche molón', 'HotWheels', 6);
const toy2 = new Toy('Buddy', 'Jossi Prechicochi', 2);
const toy3 = new Toy('Buzz', 'Control Z');

console.log(toy1.sayMyName()); //'Coche molón'
console.log(toy2.sayMyName()); //'Buddy'
console.log(toy3.minYears); //2


// -----> EXTENDS
class Human {
    name: string;
    human: boolean;

    constructor(name: string, human: boolean){
        this.name = name;
        this.human = human;
    }
}

class Mutant extends Human {
    mutant: boolean;

    constructor(mutant: boolean, name: string, human: boolean = true){
        super (name, mutant);

        this.mutant = mutant;
    }
}

let myMutant = new Mutant(true, 'Logan', true);
let myMutant2 = new Mutant(true, 'Storm');

console.log(myMutant);
