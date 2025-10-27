
function minNum(arr){

    let temp= Infinity; // set to largest possible number not the -Infinity coz if cond will never be true
    for(let i=0; i<arr.length; i++){
        if(arr[i]<temp) temp=arr[i];
    }
    return temp;

}

arr=[4,2,-4,-6,0,18,-18];
console.log(minNum(arr));