var matriz =[52,35,52,5634,899,5634,0,0,0];

console.log(RepetidosyCeros(matriz));


function RepetidosyCeros(a){
  var matrizDevuelta= new Array();
  var numero;
  for (var i=0; i<a.length; i++){
  
     if(a[i]!=0 && numero==null){
       numero = a[i];
       matrizDevuelta[0]=0;
       }
       
      if(a[i]==numero){
        matrizDevuelta[0]++;
        }
       
      if(a[i]==0 && numero!=null){
        if(matrizDevuelta[1]==null){
          matrizDevuelta[1]=1;
          }else{
        matrizDevuelta[1]++;
          }
        }
  }
   return matrizDevuelta;
}