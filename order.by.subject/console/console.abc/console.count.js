

///----[console.count()]------------

var name = "";

function sayHi() 
{
    console.count();
    return "Hello ${name}";
}

user = "ifat";
sayHi();  //1

user = "uri";
sayHi();  //2

user = "shalom";
sayHi();  //3

user = "jron";
sayHi();  //4

console.log("hi"); //5

