// *             
// **
// ***
// ****


function right_traiangle_pattern(n) {
    for(let i=0;i<n;i++){
        let pattern= " ";
        for(let j=0;j<=i;j++){
            pattern +="* ";
        }
        console.log(pattern);
    }
    
}

console.log(right_traiangle_pattern(4));