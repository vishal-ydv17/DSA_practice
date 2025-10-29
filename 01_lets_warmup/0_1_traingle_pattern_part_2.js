//  1 
//  0 1 
//  0 1 0 
//  1 0 1 0 
//  1 0 1 0 1
//we will not reset the flag each time for new row so that it continues from last value so that we can focus on 0 and 1 only

function triangle_pattern(n) {
    let flag= 1; 
    for(let i=0;i<n;i++){
        let pattern= " ";
        
        for(let j=0;j<=i;j++){
            pattern += flag + " ";
            flag = 1-flag; // toggle between 1 and 0
        }
        console.log(pattern);
    }
}

triangle_pattern(5);