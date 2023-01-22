//We need to sum big numbers and we require your help.
//
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
//
// Example
//
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

function add(a, b) {
    let result = "";
    let sum = 0;
    let carry = 0;

    for (
        let i = a.length - 1, j = b.length - 1;
        i >= 0 || j >= 0 || carry > 0;
        i--, j--) {

        let x = 0;
        let y = 0;

        if (i >= 0) {
            x = a[i] - "0";
        }
        if (j >= 0) {
            y = b[j] - "0";
        }

        sum = x + y + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    return result;
}


