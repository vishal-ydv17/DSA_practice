<<<<<<< HEAD
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// //sol-brute force(k.O(n))
// //LOGIC-slide a fixed-size window [i, j] of length k across the array one step 
// //at a time (j starts at k-1 so the first window already has k elements)
// //for each window position scan all k elements to find the max and push it to the result
// var maxSlidingWindow = function(nums, k) {
    
//     let i=0;// left edge of the window
//     let ans=[];
//     // j = right edge of the window; starts at k-1 so the FIRST window
//     // already has exactly k elements: [0 .. k-1]
//     for(let j=k-1; j<nums.length; j++){

//         let maxWcurr= findMax(i,j);//max element form current window
//         ans.push(maxWcurr);
//         i++;
//     }
//     // scans every element from left to right in curr window and returns the largest value
//     function findMax(left, right){
//         let max= -Infinity;
//         for(let x=left; x<=right;x++){
//             max= Math.max(nums[x], max);
//         }
//         return max;
//     }
//     return ans;
// };

//sol-optimized-O(n) by sliding window
//LOGIC-maintain a deque of decreasing values so the front is always the current windows max
//push new values after popping smaller ones from the back but note if new value is smaller than 
//curr window max we can push but when greater we need to pop then push 
var maxSlidingWindow = function(nums, k) {

    let res=[];
    let deque=[];
    let i=0;//left most element of window

    for(let j=0; j<nums.length; j++){
        //push the curr element after removing the smaller element forrm the last(back)of deque
        while(deque.length && nums[j] > deque[deque.length-1]){
            deque.pop();
        }
        deque.push(nums[j]);
        //when window size is k mean j past k-1 we are 1 step right of window size then 
        //push the max value from curr window then move 1 step  
        if(j>=k-1){
            res.push(deque[0]);
            //before moving check if max in window is left of window so if we more right then
            //this max will be left out so we need to pop so we will habe new max
            if(nums[i]==deque[0]){
                deque.shift();//remove from left of deque
            } 
            i++;
        }
    }
    return res;
=======
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// //sol-brute force(k.O(n))
// //LOGIC-slide a fixed-size window [i, j] of length k across the array one step 
// //at a time (j starts at k-1 so the first window already has k elements)
// //for each window position scan all k elements to find the max and push it to the result
// var maxSlidingWindow = function(nums, k) {
    
//     let i=0;// left edge of the window
//     let ans=[];
//     // j = right edge of the window; starts at k-1 so the FIRST window
//     // already has exactly k elements: [0 .. k-1]
//     for(let j=k-1; j<nums.length; j++){

//         let maxWcurr= findMax(i,j);//max element form current window
//         ans.push(maxWcurr);
//         i++;
//     }
//     // scans every element from left to right in curr window and returns the largest value
//     function findMax(left, right){
//         let max= -Infinity;
//         for(let x=left; x<=right;x++){
//             max= Math.max(nums[x], max);
//         }
//         return max;
//     }
//     return ans;
// };

//sol-optimized-O(n) by sliding window
//LOGIC-maintain a deque of decreasing values so the front is always the current windows max
//push new values after popping smaller ones from the back but note if new value is smaller than 
//curr window max we can push but when greater we need to pop then push 
var maxSlidingWindow = function(nums, k) {

    let res=[];
    let deque=[];
    let i=0;//left most element of window

    for(let j=0; j<nums.length; j++){
        //push the curr element after removing the smaller element forrm the last(back)of deque
        while(deque.length && nums[j] > deque[deque.length-1]){
            deque.pop();
        }
        deque.push(nums[j]);
        //when window size is k mean j past k-1 we are 1 step right of window size then 
        //push the max value from curr window then move 1 step  
        if(j>=k-1){
            res.push(deque[0]);
            //before moving check if max in window is left of window so if we more right then
            //this max will be left out so we need to pop so we will habe new max
            if(nums[i]==deque[0]){
                deque.shift();//remove from left of deque
            } 
            i++;
        }
    }
    return res;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
}