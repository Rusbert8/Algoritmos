/* VALORES: */
var k = parseInt (1);

/* VERIFICANDO: */
if (k <= 0) {
    console.log ("Introduce valores positivos.");
} else if (k > 0) {
    isEven (k);
} else {
    console.log ("Valor inválido.");
}

/* Funciones: */

function isEven (k){
    /* Hice la función tomando en cuenta que una división es una resta repetida 
    y por ello uso un ciclo */
    while (k > 0){
        k -= 2;
        if (k == 0){
            return console.log ("True");
        } else if (k == 1 || k < 0){
            return console.log ("False")
        } 
    }
}