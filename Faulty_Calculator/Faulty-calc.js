let random = Math.random()


console.log(random);

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

console.log("You entered ", a);
console.log("You entered ", b);
console.log("You entered ", c);


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if (random > 0.1) {
    //performs correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    //performs wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}