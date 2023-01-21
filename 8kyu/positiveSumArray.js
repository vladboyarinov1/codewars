function positiveSum(arr) {
    let sum = 0;
    arr.forEach((i) => {
        if ( i > 0) {
            sum += i;
        } else return 0;
    });
    return sum;
}