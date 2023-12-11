let age = 25;
let year = 2023; 

console.log(age, year); // equivalent of system.out.println

let firstName = "Danielle";
let lastName = "Shi";

let fullName = firstName + " " + lastName
console.log(fullName);

console.log(fullName.length);

console.log(fullName[2]);

console.log(fullName.toUpperCase());

//Conditionals 
let date = 17; 
if(date === "17"){ //three = signs (===) checks for typing
    console.log("yay!"); //== equal ===equal and same type 
}

if(date===17){
    console.log("Good!");
}

//functions/methods

function add(a, b){
    return a + b; 

}
console.log(add(1,2));

function printHi(name){
    return "hi" + name; 
}

function printBye(func){
    return func("Jolene") + " bye";
}

console.log(printBye(printHi));

const multiply = (a, b) => a*b;
console.log(multiple(2,3));

console.log(multiple(3,3) === 9? "YAY" : "BOO");