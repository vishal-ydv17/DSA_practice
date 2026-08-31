/**
 * @param {number[]} nums
 * @return {number}
 */
// //sol-1-  O(n^2) (brute force)
// //LOGIC-fix 1 element then iterrate the j and check each possile subArray sum and update max
// var maxSubArray = function(nums) {
//     let max=-Infinity;
//     for(let i=0; i<nums.length; i++){
//         let temp=0;
//         for(let j=i; j<nums.length; j++){
            
//             temp = temp + nums[j];
//             max= Math.max(max, temp);
//         }
//     }
//     return max;
// };

//sol-2(optimized using kadane algorithm/dp)exactly same as dp sol
//LOGIC-at each position, decide whether to extend the current running subarray by adding nums[i]
//or abandon it and start fresh from nums[i] alone then pick whichever gives the larger sum
//track this running sum (currSum) as you go, but separately keep a running "best seen so far" (max)
//since the best subarray might have ended earlier, not at the current position
//this works because a negative running sum can never help a future subarray
//so its always better to restart than to carry a loss forward
var maxSubArray = function(nums) {

    let currSum=nums[0];
    let maxSum=nums[0];
    for(let i=1; i<nums.length; i++){
        //we have 2 choice like we can add nums[i] to currSum if max increase
        //else we can start a fresh currSum from nums[i] 
        //so choose that which returns the max
        currSum = Math.max(currSum + nums[i], nums[i]);

        maxSum= Math.max(currSum, maxSum);//update maxSum each time
    }
    return maxSum;
}