/* VALORES: */
var n = parseInt (6);

var m = parseInt (3);

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
    let x = 1;
    while (n != m * x || n == m * x) {
        if (n == m * x ) {
            return console.log ("True");
        } else if (n > m * x){
            x++;
        } else {
            return console.log ("False");
        }      
    } 
} 






