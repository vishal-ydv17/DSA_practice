/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let arr= [];

    for(num of nums){

        arr.push(num*num);
    }
    arr.sort((a,b)=>a-b);

    return arr;
};
console.log(sortedSquares([-4,-1,0,3,10])); //[0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); //[4,9,9,49,121]    