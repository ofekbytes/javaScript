

///----[group() ... groupEnd()]------------

console.info("TOP");

console.group("#1 - Group-Title");
console.info("01");
console.groupEnd();
console.log();

console.group("#2 - Group-Title");
    console.warn("01");
    console.error("02");
console.groupEnd();
console.log();

console.group("#3 - Group-Title");
console.debug("01");
    console.group("#3.1 - Group-Title");
    console.warn("01.01");
        console.group("#3.2 - Group-Title");
        console.warn("01.02");
        console.groupEnd();
    console.groupEnd();
console.error("01.03");
console.groupEnd();

