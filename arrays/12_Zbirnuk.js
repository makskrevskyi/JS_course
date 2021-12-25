//Работа с concat
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = a.concat(b);
// console.log(c);

//Рoбота с reverse
// const a = [1, 2, 3];
// a.reverse();
// console.log(a);

//Рoбота с push, unshift
// const a = [1, 2, 3];
// a.push(4, 5, 6);
// console.log(a);

// const a = [1, 2, 3];
// a.unshift(4, 5, 6);
// console.log(a);

//Рoбота с shift, pop
// const a = ['js', 'css', 'jq'];
// const b = a.shift();
// console.log(b);

// const a = ['js', 'css', 'jq'];
// const b = a.pop();
// console.log(b);

//Рoбота с slice
// const a = [1, 2, 3, 4, 5];
// const b = a.slice(0, 3);
// console.log(b);

// const a = [1, 2, 3, 4, 5];
// const b = a.slice(3);
// console.log(b);

//Рoбота с sort
// const a = [3, 4, 1, 2, 7];
// a.sort();
// console.log(a);

//Работа с Object.keys
// const a = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(a));

//Рoбота с splice
// const a = [1, 2, 3, 4, 5];
// const b = a.splice(1, 2);
// console.log(a);

// const a = [1, 2, 3, 4, 5];
// console.log('Перший масив');
// console.log(a);
// let b = [];
// b = a.splice(1, 3);
// console.log('Другий масив');
// console.log(b);

// let a = [1, 2, 3, 4, 5];
// let b = a.splice(2, 0, 'a', 'b', 'c');
// console.log(a);

let a = [1, 2, 3, 4, 5];
let b = a.splice(1, 'a', 'b', 2, 'c', 'e');
console.log(a);