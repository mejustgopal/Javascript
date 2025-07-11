// console.log("Hello World")

// var a = 5;
// var b = 6;

// console.log(a+b+8)

// // var a = "Lampat"

// console.log(typeof(a));

// // var a = 23.45;
// console.log(typeof(a));

// let a = 51;

// a = a + 6;

// {
//     let a = 69;
//     console.log("Inside block scope ", a);
// }

// console.log("Global scope", a);


var a = 51;

a = a + 6;

{
    var a = 69;
    // console.log("Inside block scope ", a);
}

// console.log("Global scope", a);


//Conclusion: let has both local scope and Global scope whereas var has only global scope no any local scope


let x = "Avi";
let y = 22;
let z = 3.55;
const c = true;
let m = undefined;
let n = null;

// console.log(x, y, z, c, m, n);
// console.log(typeof x, typeof y, typeof z, typeof c, typeof m, typeof n);

let o = {
    "name": "Mukesh",
    "job role ": "Jr-Dev",
    "is_smart" : true
}

console.log(o)
o.salary = 56000;
console.log(o)
o.salary = 696969;
console.log(o);