/* VALORES: */
var n = parseInt ();

var m = parseInt ();

/* VERIFICANDO: */
if (n > 0 && m > 0) {
    isMultiple (n, m);
} else {
    console.log ("Introduce valores positivos.");
}

/* FUNCIONES: */

function isMultiple (n, m) {
    let suma = m;
    let x = 1;
    while (n > suma) {
        suma += m;
        ++x;
    }   
    if (suma == n){
        return console.log ("True (" + m + " x " + x + " = " + n + ")");  
    } else {  
        return console.log ("False");   
    }
} 









