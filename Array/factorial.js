// let arr = [6,5,4,3,2,1]

// const red = (a, b) => {
//     return a * b
// }

// console.log('Factorial of 6 is : ');

// console.log(arr.reduce(red));


// let num = 8;
// let fact = 1;

// for (i = 1; i <= num; i++) {
//     fact *= i;
// }

// console.log(`Factorial of 8 is ${fact}`);

let a = 6;
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    console.log(arr.slice(1,));
    // let c = arr.slice(1,).reduce((a, b) => {
    //     return a * b
    // })
    let c = arr.slice(1,).reduce((a, b) => a * b);
    return c;

}
console.log(factorial(a));
