// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// function vowelCounter(string) {
//     let vowelCount = 0;
//     for (let index = 0; index < string.length; index++) {
//         const char = string[index];
//         if (char == 'A' || char == 'a' || char == 'E' || char == 'e' || char == 'I' || char == 'i'|| char == 'O' || char == 'o' || char == 'U' || char == 'u') {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }

function vowelCounter(string) {
    const matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowelCounter("Gopal Kumar Singh"));
