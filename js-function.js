// 1
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(add(100, 10));
console.log(subtract(100, 10));
console.log(multiply(100, 10));
console.log(divide(100, 10));


// 2
myInfo('Pattarin', 'Khonkaen', 'playing with cats');
function myInfo(firstName, location, hobby) {
    console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);
}