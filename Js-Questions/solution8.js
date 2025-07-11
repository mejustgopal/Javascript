// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function asyncDouble(numbers) {
    return numbers.map(num => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    });
}

const numbers = [7, 5, 2, 4, 9, 3]

async function run() {
    const promiseArray = asyncDouble(numbers);
    const results = await Promise.all(promiseArray)
    console.log(results);
}

run()