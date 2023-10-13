var matriz =[52,35,123,5634,899,5634]

var a= matriz.sort(comparar);
console.log(Dos(a));

function Dos(a){
  var matrizDevuelta= new Array();
  for (var i=0; i<a.length; i++){
   if(matrizDevuelta[0]==null){
     matrizDevuelta[0]=(a[i])
     }else{
      if(matrizDevuelta[1]==null){
        if(a[i]!=matrizDevuelta[0]){ matrizDevuelta[1]=a[i]}
    
     }
     }
     
  }
 
  return matrizDevuelta;
  
  }
  
  function comparar(a,b){
    
  
  return b-a;

    }