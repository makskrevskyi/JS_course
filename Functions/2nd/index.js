console.log('(множення 2 чисел)');

function calc (numOne=0 , numTwo=0, numThree=0) {

    let numSum = numOne * numTwo * numThree;

    console.log(numSum);

}

calc(4, 7, 1);  


console.log('(множення 3 чисел)');


calc(4, 7, 3);  


console.log('(введеня числа в степінь)');

const result = Math.pow(4, 3);
console.log(result);