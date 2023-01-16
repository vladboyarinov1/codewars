// Task
//
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//My solution

    function sortArray(array) {
    // Return a sorted array.
    let newArr = [];
    array
        .filter((v, i) => v % 2 && newArr.push(i))
        .sort((a, b) => a - b)
        .forEach((v, i) => array[newArr[i]] = v);
    return array
}