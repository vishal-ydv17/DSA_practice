<<<<<<< HEAD

function countDigitInNumber(number){
    
    Math.abs(number);
    if(number === 0) return 1;
    
    let count = 0;
    while(number >= 1){
        
        number =number/10;
        Math.floor(number);
        count++;
    }
    return count;
}

console.log(countDigitInNumber(12345)); // Output: 5

=======

function countDigitInNumber(number){
    
    Math.abs(number);
    if(number === 0) return 1;
    
    let count = 0;
    while(number >= 1){
        
        number =number/10;
        Math.floor(number);
        count++;
    }
    return count;
}

console.log(countDigitInNumber(12345)); // Output: 5

>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
