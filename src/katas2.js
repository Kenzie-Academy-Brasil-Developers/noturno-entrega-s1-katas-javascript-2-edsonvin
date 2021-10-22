// comece a criar a sua função add na linha abaixo
function add(num1, num2){
   return num1 + num2
}
console.log (add(3,5))
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2){
    return(num1 * num2)
}
console.log(multiply(4,6))
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(num1, num2){
    return(num1**num2)
}
console.log(power(3,4))
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(num){
    if (num === 0 || num === 1){
    return 1;}
  for (let contador = num - 1; contador >= 1; contador--) {
    num *= contador;
  }
  return num
}
console.log(factorial(5))

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(num){
    sequencia = [0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584]
    return sequencia[num-1]
    }
    
console.log(fibonacci(8))

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
