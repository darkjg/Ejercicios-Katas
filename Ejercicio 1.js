var a = 8;
var b = 5;
var resultado=flores(a,b);
console.log(resultado);
function flores(a, b) {
  var c=(a % 2);
  var d=(b % 2);
  if(c==d){
    return "No estan Enamorados";
    }else{
      return "Estan Enamorados";
      }
  

}