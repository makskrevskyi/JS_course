function reverse(array) {
    const result = [];
    while (array.length) {
        result.push(array.pop());
    }
    return result;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));