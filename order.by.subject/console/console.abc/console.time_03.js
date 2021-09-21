
console.time("sp");

console.info("Sp Start");
for (var i = 0; i < 10000; i++) {
    console.log(i);
  }
console.info("Sp End");

console.timeEnd("sp");

// //----[tip]------------//
// //millisecond (ms) = second * 1000
// //second = millisecond (ms) / 1000
