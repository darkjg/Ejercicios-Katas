var matriz =[1,2,3]
var matriz2 =[1,2,3]

console.log(sumar(matriz,matriz2));

function sumar(a,b){
  var suma=0;
  for (var i=0; i<a.length; i++){
    suma=suma+a[i];
  }
  for (var i=0; i<b.length; i++){
    suma=suma+b[i];
  }
  return suma;
  
  }