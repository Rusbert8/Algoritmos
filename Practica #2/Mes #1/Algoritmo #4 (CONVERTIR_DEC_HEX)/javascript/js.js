decToHex ();

/* FUNCIÓN: */

function decToHex (n){
    /* #1 (Obtención de Modulos)  */
var arreglo = [];
var mod = 0;
    while (n > 16){
        mod = n % 16;
        n /= 16;
        arreglo.push (parseInt (mod));
    }
arreglo.push (parseInt (n));

    /* #2 (Ordenando Arreglo) */
var ordenado = []
let m = arreglo.length - 1; 
    for (var x of arreglo){
        x = arreglo[m];
        --m;
        ordenado.push (x); 
    }

    /* #3 (Decimal a Hexadecimal) */
var Hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
var hex = [];
    for (var y of ordenado){
        if (y >= 10){
            y = Hexadecimal [y];
        } else if (y < 10){
        y = y.toString();
        }
        hex.push (y); 
    }

    /* #4 (Concatenando) */
var result = "";
    for (var z of hex){
        result = result + z;
    }

return console.log (result);
}









