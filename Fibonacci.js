//Implementação com recursão
let fibonacci = function f(limit) {
    if(limit <= 1) {
        return 1;
    }    
    return f(limit - 1) + f(limit - 2);
}


//Testes
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));



// Implementação com loop
let numeroRepeticoes = 1000;
let primeiroTermo = 1; 
let segundoTermo = 0 
let temp;

while (numeroRepeticoes >= 0){
    temp = primeiroTermo;
    primeiroTermo = primeiroTermo + segundoTermo;
    segundoTermo = temp;
    numeroRepeticoes--;
}

console.log(segundoTermo)