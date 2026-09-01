/**
 * @param {number[]} nums
 * @return {boolean}
 */
// //sol-1 (normal backtack recursion)- but Time limit exceed
// //LOGIC-try every possible subset by deciding one element at a time whether to include it
// //the recursion explores each starting point (start) and tries adding each remaining 
// //element (i) to see if it can reach exactly remainingSum
// //passing i+1 (not start+1) ensures each element is only considered once per path
// //so we never reuse the same index within a subset
// //the base cases catch success (remainingSum hits 0 — a valid subset found) or failure 
// //(remainingSum goes negative — this path overshot); if no combination works return false
// var canPartition = function(nums) {
//     //this give sum of nums we can use for loop also instead
//     let sum= nums.reduce((accumulator, curr)=> accumulator+curr ,0);//0 is initial value
//     //if we have to partition equal subset sum then 1 subset has sum/2  
//     let newSum = sum/2;

//     var fn = (remainingSum,start) =>{

//         if(remainingSum === 0) return true;
//         if(remainingSum < 0) return false;

//         for(let i=start; i<nums.length; i++){
//             //when this hit base case it return true/false
//             if(fn(remainingSum - nums[i], i+1)){
//                 return true;
//             }
//         }
//         return false;
//     }
//     return fn(newSum, 0);
// };



// //sol-2 (backtack recursion optimized by dp using object)- but Time Timit Exceed
// //(coz for very large nums too much manupulation in object leads to more complexity)
// //so in next sol-3 we will use array instead of object dp and it works
// var canPartition = function(nums) {

//     let sum = nums.reduce((accu, curr)=> accu + curr ,0);
//     if(sum % 2 !=0) return false;//if calculater sum of nums can not be divided in 2 equal parts then there is no 2 equal subset
//     let newSum= sum/2;

//     let dp= {};//lets optimize a little

//     var fn = (remainingSum, start)=>{
//         //use key like this coz there may be same remainingSum but have diff path
//         //so to have key unique we can have path or start and reaminingSum
//         let key= start + '-' + remainingSum;
//         if(key in dp){
//             return dp[key];
//         }
        
//         //base case
//         if(remainingSum===0) return true;
//         if(remainingSum<0) return false;
//         for(let i=start; i<nums.length; i++){

//             if(fn(remainingSum-nums[i], i+1)){
//                 return dp[key] = true;//set the value of dp for this new element if doesnt exist in dp
//             }
//         }
//         return dp[key] = false;//set dp object as this key was not in dp 
//     }
//     return fn(newSum, 0);
// }


//sol-3 (backtack recursion optimized by dp using Arrays)- and it Works no Time Timit Exceed
//LOGIC-WHY ARRAY > OBJECT for memoization here: both are O(sum*n) in theory, but object keys need
//string concatenation + hashing on every call, while array indices (numbers) are direct lookups 
//at this problem's scale (large sum, many calls), that overhead difference is enough to cause TLE with objects but not arrays as in array it almost goes to O(1) coz use direct memory offset calculation
var canPartition = function(nums) {
    let sum= nums.reduce((accu, curr)=>accu+curr ,0);
    if(sum%2 !=0) return false;
    
    let newSum= sum/2;
    //lets make 2d array and fill with undefined eg: dp= [[remainig, start],[undefined,undefined], ....]
    let dp= Array.from({length: sum+1}, () => Array(nums.length).fill(undefined));

    var fn= (remainingSum, start)=>{

        //base case
        if(remainingSum===0) return true;
        if(remainingSum < 0) return false;

        //if this exist in dp then return it
        if(dp[remainingSum][start] != undefined){
            return dp[remainingSum][start];
        }
        for(let i=start; i<nums.length; i++){

            if(fn(remainingSum-nums[i], i+1)){
                return dp[remainingSum][start] = true;//if not exist in dp then set its value
            }
        }
        return dp[remainingSum][start] = false;//if not exist in dp then set its value
    }
    return fn(newSum, 0)
}