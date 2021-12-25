let array = [1, 3, 5, 3, 2, 6, 3, 6, 2];

function copyRemover(array) {
    const object = {};
    out = [];
    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        object[string] = true;
    }
    for (i in object) {
        out.push(i);
    }
    return out;
}
result = copyRemover(array);
console.log(result);