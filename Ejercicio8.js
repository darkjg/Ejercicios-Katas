console.log(años(2024,2025));


function años(añonacimiento,añoactual ){
const d = new Date();
 var añodefault=d.getFullYear();
  añoactual = (typeof añoactual === 'undefined') ? añodefault : añoactual;
 
  if(añoactual==añonacimiento){
    return "Este es el año en el que naciste";    
    }else {
      
      if(añoactual>añonacimiento)  {
        var resultado= añoactual- añonacimiento
        if(resultado<=1){
          return "tienes un año";
        }else{
          return "tienes "+resultado+" años";
          }
        }else{
          var resultado= añonacimiento-añoactual
         if(resultado<=1){
          return "te falta un año para nacer";
        }else{
          return "te falta "+resultado+" años para nacer";
          }   
      
      }
  }
}