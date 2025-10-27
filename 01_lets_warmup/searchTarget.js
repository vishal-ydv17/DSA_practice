
function find(arr,target){
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]==target) return i;
    }
    return -1;
}

let arr=[4,2,6,4,9];
let res=find(arr,6);
console.log(res);

