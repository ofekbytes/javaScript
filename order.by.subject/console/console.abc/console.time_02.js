

console.time("sp");

console.info("Sp Start");
console.log("01.02");
console.warn("01.03");
console.error("01.04");
console.debug("01.05");
console.timeEnd("sp");

/***
 * BUG: 
 * erase all variable 
 ***/ 
console.clear(); 

console.time("sp");
console.info("02.01");
console.log("02.02");
console.warn("02.03");
console.error("02.04");
console.debug("Sp End");

console.timeEnd("sp");