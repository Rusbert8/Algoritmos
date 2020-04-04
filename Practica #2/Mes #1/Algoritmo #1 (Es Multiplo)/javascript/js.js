/* VALORES: */
var n = parseInt ();

var m = parseInt ();

/* VERIFICANDO: */
if (n <= 0 || m <= 0) {
    console.log ("Introduce valores positivos.");
} else if (n >= 1 && m >= 1) {
    isMultiple (n, m);
} else {
    console.log ("Valor inválido.");
}

/* FUNCIONES: */

function isMultiple (n, m) {
    let suma = m;
    while (n > suma) {
        suma += m;
    }   
    if (suma == n){
        return console.log ("True");  
    } else {  
        return console.log ("False");   
    }
} 









