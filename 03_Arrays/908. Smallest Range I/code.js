/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 //logic is that we try to bring max,min both close to each other so that if we take the difference we get min val
 //by increasing the minimum by k and decreasing the maximum by k, we effectively shrink the range by 2k and thats gud this want question asks us to do
var smallestRangeI = function(nums, k) {

    let MIN = Math.min(...nums)+k;
    let MAX = Math.max(...nums)-k;

    return Math.max(0, MAX-MIN);//returning 0 as maximum  if max-min= -ve this covers the edge case by making identical elements in aaray so that diff is 0
};
console.log(smallestRangeI([1],0))//0
console.log(smallestRangeI([0,10],2))//6
console.log(smallestRangeI([1,3,6],3))//0   
