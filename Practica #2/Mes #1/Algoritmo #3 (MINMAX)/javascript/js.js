/* Arreglo: */
var data = []; /* 8,1,3,7,28,45,0,6,-1 */

MINMAX();

/* Funciones: */
function MINMAX (){
/* MAX: */
    let max = data [0];

    for (let x of data){
        if (x > max){
            max = x;
        }
    }

/* MIN: */
    let min = data [0];

    for (let y of data){
        if (y < min){
            min = y;
        }
    }

/* Nuevo Arreglo: */
    var max_min = [];
    max_min.push(max, min);
    
return console.log (max_min);
}






