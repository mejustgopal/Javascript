// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(numbers) {
    const result = []
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] != numbers[i - 1]) {
            result.push(numbers[i] * 2)
        }
        else {
            result.push(numbers[i])
        }
    }
    return result;
}

const numbers = [2, 2, 3, 4, 4, 4, 5]


console.log(doubleTrouble(numbers));

