// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


//My solution
export function count(string) {
    let countA = 0;
    let countB = 0;

    if (string) {
        let arr = [...string];
        arr.forEach((item) => {
            if (item === "a") {
                countA++;
            } else if (item === "b") {
                countB++;
            } else {
                item++;
            }
        });

        if (countB === 0) {
            return {a: countA}
        } else if (countA === 0) {
            return {b: countB}
        } else if (countA && countB) {
            return {a: countA, b: countB}
        }
    } else {
        return {};
    }
}