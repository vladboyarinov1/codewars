// Convert number to reversed array of digits
//
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//My solution

function digitize(n) {
    if (n) {
        let array = (""+n).split("").map(Number)
        return array.reverse();
    } else return [0]
}