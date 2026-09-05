/**
 * @param {number[]} nums
 * @return {number}
 */
// LOGIC: the main thing is how we derive this formula:
// store[i] = Math.max(nums[i] + store[i-2], store[i-1]);
// At each house i, we have exactly two choices, and store[i] = best of the two:
// 1) ROB house i:
//    money = nums[i] + store[i-2]
//    → we can't rob i-1 (adjacent houses aren't allowed), so we jump back to i-2
//    → store[i-2] already holds the best possible loot using houses 0..i-2
// 2) SKIP house i:
//    money = store[i-1]
//    → if we don't rob i, our best result is simply whatever was best using houses 0..i-1
//    → store[i-1] already accounts for whether or not i-1 itself was robbed
//
// store[i] = max(option 1, option 2) → best possible loot using houses 0..i
// this is why store[] only needs the last two values (store[i-1], store[i-2]) at each step
var rob = function(nums) {
    
    let n= nums.length;
    let store=[nums[0], Math.max(nums[0], nums[1])];

    for(let i=2; i<n; i++){
        store[i]= Math.max(nums[i] + store[i-2], store[i-1]);
    }
    return store[n-1];
};


// //sol-2(normal recursion)
// // LOGIC: robFrom(i) = max money using houses 0..i
// // at house i, two choices:
// // 1) ROB house i    → nums[i] + robFrom(i-2)  (skip i-1, since adjacent not allowed)
// // 2) SKIP house i   → robFrom(i-1)            (best result without touching house i)
// // robFrom(i) = max(option 1, option 2)
// var rob = function(nums) {
//     let n= nums.length;

//     function robFrom(i){
//         if(i<0) return 0;//no houses at all nothing to rob
//         if(i==0) return nums[i];//only one house just rob it

//         return Math.max(nums[i] + robFrom(i-2), robFrom(i-1));
//     }

//     return robFrom(n-1);
// }


// //sol-3(recursion with optmization using dp/memonization)
// //LOGIC-// we use `store` as a cache (memoization) so we never recompute robFrom(i) twice
// // for each i: if store[i] is already computed → just return the cached value
// //             if not yet computed → calculate it, save it in store[i], THEN return it
// // this turns exponential recursion (recomputing overlapping subproblems) into O(n)
// var rob = function(nums) {
//     let n= nums.length;
//     let store={};

//     function robFrom(i){
//         if(i<0) return 0;
//         if(i==0) return nums[i];

//         if(!store[i]){
//             store[i]= Math.max(nums[i] + robFrom(i-2), robFrom(i-1));
//         }
//         return store[i];
//     }

//     return robFrom(n-1);
// }