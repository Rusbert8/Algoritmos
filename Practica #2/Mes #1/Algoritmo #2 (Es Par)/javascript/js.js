/* VALORES: */
var k = parseInt ();

/* VERIFICANDO: */
if (k == 0) {
    console.log ("Introduce un valor entero.");
} else {  
    isEven (k);
}

/* FUNCIÓN: */
function isEven (k){/* Hice la función tomando en cuenta que una división es una resta repetida 
y por ello uso un ciclo */

/* Para numeros positivos: */
    while (k > 1){
        k -= 2;
    }
/* Para numeros negativos: */
    while (k < -1){
        k += 2;
    }
/* ¿Par o Impar? */
    if (k == 0){
        return console.log ("True");
    } else if (k == 1 || k == -1){
        return console.log ("False");
    } 
}