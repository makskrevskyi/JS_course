function removeItem(array, num) {
    let massive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != num) {
            massive.push(array[i]);
        }
    }
    return massive;
}
console.log(removeItem([1, 3, 5, 3, 2, 6, 3], 3));