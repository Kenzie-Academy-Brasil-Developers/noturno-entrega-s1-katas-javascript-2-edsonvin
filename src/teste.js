
function add(num1,num2){
 return num1 + num2 
}

console.log(add(1,3));


function multiply(n1,n2){
    let result = 0
    for (let contador = 0; contador < n2; contador++){
      result =  add(n1,result)


        
    }
   return result
}
console.log(multiply(3,3))


function power(n1,n2){
let result = 1
for (let contador = 0 ;contador<n2; contador++){
    result = multiply(result,n1)

}
return result
}
console.log(power(2,3))