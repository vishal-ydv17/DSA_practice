<<<<<<< HEAD

function sumNegative(arr){
    
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0) count++
    }
    return count;
}


let arr=[-4,-2,6,-1,0,-5];
let res=sumNegative(arr);
=======

function sumNegative(arr){
    
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0) count++
    }
    return count;
}


let arr=[-4,-2,6,-1,0,-5];
let res=sumNegative(arr);
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
console.log(res);