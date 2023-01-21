function checkForFactor (base, factor) {
    let a = base % factor;
    if (a === 0) {
        return true;
    } else return false;
}