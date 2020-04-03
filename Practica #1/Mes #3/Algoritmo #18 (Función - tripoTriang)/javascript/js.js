/* Valores: */
var a = 1 * prompt ("Longitud del lado (A).");

var b = 1 * prompt ("Longitud del lado (B).");

var c = 1 * prompt ("Longitud del lado (C).");
    
/* Condiciones: */
if (a == b && b == c){
    document.write ("<h1>Es<u> Equilatero</u></h1>");/*EQUILATERO (Todos los lados iguales)  */
} else if (a != b && b != c && a != c){
    document.write ("<h1>Es<u> Escaleno</u></h1>");/* ESCALENO (Todos los lados distintos) */ 
} else {
    document.write ("<h1>Es<u> Isoceles</u></h1>");/* ISOCELES (2 lados iguales y 1 distinto) */
}

