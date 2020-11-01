// ds.js

// object with animal data
const animal = {
    name: 'uri',
    type: 'dog',
    legs: 2,
    hands: 2,
    age: 60,
    single: true
}

// example #1: dispaly data with alot of use of 'animal' variable keyword.
function showAnimal(animal) {
    // return 'Animal  Data: ${animal.name}, ${animal.type}, ${animal.age}';
    return ':::Animal Data::: ' + animal.name + ' , ' + animal.type + ' , ' + animal.age ;
}


// example #2: object destructuring
function showAnimal2({ name, type, age, legs}) {
    return ':::Animal Data::: ' + name + ' , ' + type + ' , ' + age + ' , ' + legs ;
}


// example #3: pass 'animal' object
function showAnimal3(animal) {

    // set a variable that have the name of the properties in that object set equal to the object 
    // name = animal.name; type = animal.type; age = animal.age
    const {name, type, age} = animal;

    return ':::Animal Data::: ' + name + ' , ' + type + ' , ' + age ;
}



// ShowAnimal();
console.log('%c___Show Animal Basic, property keyword___', 'color: red; font-weight: bold');
console.log( showAnimal(animal) );


// showAnimal2();
console.log('%c___Show Animal, copy object property to local variable___', 'color: red; font-weight: bold');
console.log( showAnimal2(animal) );


// showAnimal3();
console.log('%c___Show Animal, pass all object to local variable by name___', 'color: red; font-weight: bold');
console.log( showAnimal3(animal) );



// test zone
//
// console.table(animal);
// console.table( animal.name, animal.type, animal.age );
