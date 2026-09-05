<<<<<<< HEAD

function largestNum(arr) {

    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max) max=arr[i];
    }
    return max;
}

let arr = [4, 2, 6, 4, 9];
let res = largestNum(arr);
=======

function largestNum(arr) {

    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max) max=arr[i];
    }
    return max;
}

let arr = [4, 2, 6, 4, 9];
let res = largestNum(arr);
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
console.log(res);