
function largestNum(arr) {

    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max) max=arr[i];
    }
    return max;
}

let arr = [4, 2, 6, 4, 9];
let res = largestNum(arr);
console.log(res);