
isMultiple (10, 3);
function isMultiple (n, m) {
    let x = 1;
    while (n!=m*x   ||n==m*x ) {
        if (n == m * x ) {
            return console.log ("true");
        } else if (n > m * x){
            x++;
        } else {
            return console.log ("false");
        }      
    } 
} 






