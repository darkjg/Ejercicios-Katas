var asientos=15;
var pasajeros=5;
var esperando=16;


console.log(PasajerosEnEspera(asientos,pasajeros,esperando));
function PasajerosEnEspera (a,b,c){
  var espera=0;
  var resultado="";
     espera = asientos-(pasajeros+esperando);
     if(espera>=0){
      var resultado= "El ha podido subir a los "+c+" pasajeros que estaban esperando";
     }else{
      var atras=espera*-1;
      var resultado= "El no ha podido subir "+atras+" de los "+c+" pasajeros";
       }
    
   return resultado;
    }