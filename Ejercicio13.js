var a=7
console.log(ArrayN(a));


function ArrayN(a){
    var matrizDevuelta= new Array();
    for(var i=0; i<a; i++){
      matrizDevuelta[i]=i+1;
    }
    matrizDevuelta.reverse();
    return matrizDevuelta;
}