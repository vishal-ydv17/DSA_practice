// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
//we will reset the flag each time for new row but when declared outside the loop it will continue from last value

function triangle_pattern(n) {

    for(let i=0;i<n;i++){
        let pattern= " ";
        let flag= 1; // to alternate between 1 and 0
        for(let j=0;j<=i;j++){
            pattern += flag + " ";
            flag = 1-flag; // toggle between 1 and 0
        }
        console.log(pattern);
    }
}

triangle_pattern(5);