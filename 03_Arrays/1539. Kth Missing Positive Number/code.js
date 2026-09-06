
var findKthPositive = function(arr, k) {
    
    let count=0;

    for(let i=1; i<=arr.length+k; i++){//treat i as element of arr as elements in arr start from 1 to n

        if(!arr.includes(i)) count++;

        if(count==k) return i;
    }

    return -1;//this condition never satisfy

};
console.log(findKthPositive([2,3,4,7,11],5)); //9
console.log(findKthPositive([1,2,3,4],2)); //6