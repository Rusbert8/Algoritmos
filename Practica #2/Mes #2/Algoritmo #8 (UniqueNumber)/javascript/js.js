/* INPUT: */

var data = [];/* (Introduce solo numeros positivos y 0.) */
uniqueNumber(data);

/* FUNCIÓN: */

function uniqueNumber(array){
    let a = 0;
    let b = 1;
    for(x of array){
        a = b;
        while (a <= array.length - 1){ 
            if (x == array[a]){
                return console.log ("False");
            } else{
                a++;
            } 
        }
        b++
    }
    return console.log ("True");
}






