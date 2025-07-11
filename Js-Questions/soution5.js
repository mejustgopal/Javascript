// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(sumArray) {
    sum = 0;
    for (let i = 0; i < sumArray.length; i++) {
        if (sumArray[i] < 0) {
            break;
        }
        sum += sumArray[i];
    }
    return sum;
}

console.log(sumUntilNegative([1, 2, 3, -1, 4]));
