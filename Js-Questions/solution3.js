// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


function reverseString(string) {
    const reversedString = string.split("").reverse().join("")
    return reversedString
}

console.log(reverseString("Hariharnath"));
