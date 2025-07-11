// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function isValidPassword(password) {
    if (password.length < 8) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }

        // Optional: stop early if all are true
        if (hasUpper && hasLower && hasDigit) {
            return true;
        }
    }

    return hasUpper && hasLower && hasDigit;
}
console.log(isValidPassword("noxaNigga69")); 


// function passwordValidator(str) {
//     const hasUpperCase = /[A-Z]/.test(str);
//     const hasLowerCase = /[a-z]/.test(str);
//     const hasDigit = /\d/.test(str);
//     const isLongEnough = str.length >= 8;
    
//     return hasUpperCase && hasLowerCase && hasDigit && isLongEnough;
// }

// console.log(passwordValidator("binod123N"));
