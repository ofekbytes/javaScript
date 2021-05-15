/*
** 03.console.log.js
**
*/

const rec1 = { name: 'shalom', age: 30, state: 'usa', single: false };
const rec2 = { name: 'yifat', age: 40, state: 'il', single: false };
const rec3 = { name: 'yaron', age: 46, state: 'il', single: true };


console.table({ rec1, rec2, rec3 });

console.log();

console.table([rec1, rec2, rec3]);

