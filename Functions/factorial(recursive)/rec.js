function FactorialRecursion(n){
    if (n <= 1){
        return 1;
    }
    else{
        return n * FactorialRecursion (n-1);
    }
}
let input = prompt("Enter a number: ");
input = parseInt(input);

console.log(FactorialRecursion(input));