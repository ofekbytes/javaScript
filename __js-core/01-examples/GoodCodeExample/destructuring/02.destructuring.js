
/*
** 02.destructuring.js
**
*/

/**
 * 'text name' -or- 'text name ' + animal.name
 * "text name" -or- "text name " + animal.name 
 * ` ${animal.name} `
 */

// object with animal data
const animal = {
    name: 'uri',
    type: 'dog',
    legs: 2,
    hands: 2,
    age: 60,
    single: true
}

// dispaly data with alot of use of 'animal' variable keyword.
function showAnimal1(animal) {
    return ':::Animal #1 Data::: ' + animal.name + ' , ' + animal.type + ' , ' + animal.age;
}



console.log('\n%c___Show Animal Basic, property keyword___', 'color: red; font-weight: bold');
console.log(showAnimal1(animal));