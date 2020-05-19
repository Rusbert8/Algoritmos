/* INPUT: */

hexToDec("");

/* FUNCIÓN */

function hexToDec(st){

/* #1 Pasar cada caracter a un arreglo: */
    
    let array_st = []; 
    for (let contador = 0; contador < st.length; contador++) {
        array_st.push(st.charAt(contador));
    }

/* #2 Cambiar cada caracter del arreglo a su respectivo número: */

    let Decimales = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    };

    let dec = []; 
    for (x of array_st){
        if (x * 1 >= 0){
            dec.push (x * 1)
        } else {
            for (y in Decimales){
                if (y == x){
                    dec.push (Decimales[y]);
                }
            }
        }
    }

/* #3 Multiplicar cada valor del arreglo por 16 elevado al indice y sumarlos: */

    let output = 0;
    let tamaño_dec = dec.length;
    for (z of dec){
        tamaño_dec --;
        z = z * (16 ** tamaño_dec);
        output += z;
    }
    return console.log (output);
}


















