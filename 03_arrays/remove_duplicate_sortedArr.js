// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
    
    let arr = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        if(!arr.includes(nums[i])) {//.includes() give true/false
            arr.push(nums[i]);
        }
    }
    // Copy back to original array
    for(let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    return arr.length;
};
console.log(removeDuplicates([1,1,2])); //2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //5

// 02 TECHNIQUE using Set
// var removeDuplicates = function(nums) {
//     if(nums.length == 0) return 0;
    
//     let arr = [nums[0]];
//     let our_set = new Set(arr);
    
//     for(let i = 1; i < nums.length; i++) {
//         if(!our_set.has(nums[i])){ //.has() give true/false
//             our_set.add(nums[i]);//if we want to add somthin in set we need .add()
//             arr.push(nums[i]);
//         }
//     }
    
//     // Copy back to original array
//     for(let i = 0; i < arr.length; i++) {
//         nums[i] = arr[i];
//     }
    
//     return arr.length;
// };



// 03 TECHNIQUE using Set and Spread Operator
// var removeDuplicates = function(nums) {
//     let our_set = new Set(nums);
//     let arr = [...our_set]; // Convert set to array, here we have user spred operator
//     //or use Array.from(arr);  //to convert the array
    
//     // Copy back to original array
//     for(let i = 0; i < arr.length; i++) {
//         nums[i] = arr[i];
//     }
    
//     return arr.length;
// };