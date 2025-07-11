async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

(async function main() {
    // let a = await sleep();
    // console.log(a);    
    // let b = await sleep();
    // console.log(b);

    // let [x,y,...rest] = [1,5,7,9,3,4,6];
    // console.log(x,y,rest);

    // let obj = {
    //     a: 1,
    //     b: 2
    // }

    // const { a, b } = obj; // Object Destructuring
    // console.log(a, b);

    function sum(a,b,c){
        return a + b + c;
    }

    let arr = [1,2,3];
    console.log(sum(arr[0], arr[1], arr[2])); // Traditional way of passing array elements
    console.log(arr[0] + arr[1] + arr[2]); // Another way of passing array elements
    console.log(sum(...arr)); // Spread Operator Usage here





})();                                       //IIFE (Immediately Invoked Function Expression) Usage here

