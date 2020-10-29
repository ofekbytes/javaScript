/*
** console.log.js
**
*/

// TODO 
// split file - each example a file. ???

const rec1 = {name: 'shalom', age: 30, state:'usa', single: false};
const rec2 = {name: 'yifat', age: 40, state:'il', single: false};
const rec3 = {name: 'yaron', age: 46, state:'il', single: false};


// example #1: 
// dispay console log data without variable name
console.log(rec1);
console.log(rec2);
console.log(rec3);


// example #2: 
// dispay console log data with variable name
// add variable to an object.
console.log({rec1, rec2, rec3});


// example #3: 
// dispay console log data with variable name and 
// css style
console.log('%c___A Team List___', 'color: red; font-weight: bold');
console.log({rec1, rec2, rec3});


// example #3: 
// dispay console log data with variable name and 
// css style
// table style
console.log('%c___A Team List Table___', 'color: red; font-weight: bold');
console.table([rec1, rec2, rec3]);

// example #4: time
console.log('%c___A Timer___', 'color: red; font-weight: bold');

// define the time with a variable 'lp'
console.time('lp');

let i = 0;
while (i < 100000) {
    i++;
}

console.timeEnd('lp');


// example #5: stack trace the code
// where the code have been called
const submit = () => console.trace('submit the data');

submit();
submit();
