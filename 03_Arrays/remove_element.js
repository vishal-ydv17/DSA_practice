var removeElement = function(nums, val) {

    let arr=[];
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val) arr.push(nums[i]);
    }
// Copy back to original array (modify in-place) as in Q we have modify in original arr
    for(let i=0; i<nums.length; i++){
        nums[i]=arr[i];
    }
    return arr.length;
};
console.log(removeElement([3,2,2,3], 3)); //2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); //5


//OR for copy the arr we can use  

//nums.length = 0;   // Clear original array
//nums.push(...arr); // Spread operator to push all elements



//Technique 02:

// same logic but using two-pointer approach (from end)
// var removeElement = function(nums, val) {
//     let i = 0;
//     let n = nums.length;
    
//     while (i < n) {
//         if (nums[i] === val) {
//             nums[i] = nums[n - 1]; // Replace with last element
//             n--; // Reduce array size
//         } else {
//             i++; // Move to next element
//         }
//     }
    
//     return n;
// };
//console.log(removeElement([3,2,2,3], 3)); //2
//console.log(removeElement([0,1,2,2,3,0,4,2], 2)); //5