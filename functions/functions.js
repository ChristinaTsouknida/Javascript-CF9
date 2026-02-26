// Basic funtion syntax

function sayHello(name) {
    return `Hello ${name}!`;
}

console.log(sayHello("Alice"));


// Function Expression

const add = function (a, b) {
    return a + b;
}
console.log(add(5, 3)); //8


// Arrow Function

const multiply = (a, b) => a * b;
console.log(multiply(4, 6))  //24


// Optional Params

function sayHi(name) {
    if (!name) {
        name = "Guest"
    }
    console.log(`Hi ${name}`)
}

sayHi();

// Default Params, Overloading

function sayHi2(name = "Guest") {
    console.log(`Hi ${name}`)
}
sayHi2();

function addUser(name = "Anonymous", age = 18, isAdmin = false) {
    return {name, age, isAdmin};
}

// Rest params

function max(...numbers) {
    return Math.max(...numbers);
}
console.log(max(2, 3, 4, 5, 7, 5, 7, 9, 35));  //35