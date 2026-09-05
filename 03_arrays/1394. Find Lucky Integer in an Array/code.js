//LOGIC - find the largest element in arr such that its frequency is same as that element so we use map to store num and its freq and then iterate over it to find lasrgest element
var findLucky = function(arr) {
    
    let map= new Map();

    for(let num of arr){

        map.set(num, (map.get(num) || 0) + 1);
    }

    let luckyNum= -1;
    
    for(let [num,freq] of map){

        if(num==freq){

            luckyNum= Math.max(num, luckyNum);//as we need to find largest element in arr whose freq  is same as its val
        }
    }

    return luckyNum;
};
console.log(findLucky([2,2,3,4]));//2
console.log(findLucky([1,2,2,3,3,3]));//3
console.log(findLucky([2,2,2,3,3]));//-1