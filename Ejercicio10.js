var numero

console.log(matriz(123));
 
function matriz(a){
 let myFunc = num => Number(num);      
    var intArr = Array.from(String(a), myFunc);
  return intArr;
  
  }