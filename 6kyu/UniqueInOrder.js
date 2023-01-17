//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//My solution
let uniqueInOrder= (iterable) => {
    let arr = Array.from(iterable);
    arr = arr.filter( (item, pos, arr) => !pos || item !== arr[pos - 1] );
    return arr

}