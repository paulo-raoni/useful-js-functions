//Implementação
let tribonacci = function f(limit) {
    if(limit <= 0) {
        return 0;
    }
    if(limit <= 1) {
        return 1;
    }

    return f(limit -1) + f(limit - 2) + f(limit - 3);
}

//Testes
console.log(tribonacci(0));
console.log(tribonacci(1));
console.log(tribonacci(2));
console.log(tribonacci(3));
console.log(tribonacci(4));
console.log(tribonacci(5));
console.log(tribonacci(6));