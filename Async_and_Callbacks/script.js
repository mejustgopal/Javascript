console.log("Subham is a hecker");
console.log("I am hacker");

// setTimeout(() => {
//     console.log("I am inside Timeout Function");

// }, 2000);

setTimeout(() => {
    console.log("I am inside SetTimeout Function");

}, 3000);

setTimeout(() => {
    console.log("I am inside SetTimeout2 Function");

}, 2000);

console.log("Khatam!");


const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Gopal", fn);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )