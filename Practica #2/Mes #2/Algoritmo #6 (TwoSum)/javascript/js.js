/* VALORES: */

var array = [3, 1, 2, 4, 8, 11];
var target = 7;

/* PASO #1: (Valores menores que el Target.) */

var menores = [];
for (let x of array){
    if (x <= target){
        menores.push(x);
    }
}

/* PASO #2: (Obtención de la Suma igual al Target.) */

TwoSum();
function TwoSum (){
    let a = 0;
    let b = 1;
        while (menores[a] + menores[b] != target){
             if (b == menores.length - 1){
                a++;
                b = a + 1;
            } else {
                b++;
            }
        } 
        return console.log ( "[" + a + ", " + b + "]");
}







