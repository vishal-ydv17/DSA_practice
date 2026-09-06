var arrayPairSum = function(nums) {
    
    nums.sort((a,b)=>a-b);
    let sum=0;

    for(let i=0; i<nums.length; i+=2){//to form the pair we always go to even indices
        sum += nums[i];
    }
    return sum;
};
const nums = [1,4,3,2];
console.log(arrayPairSum(nums)); // Output: 4

// Explanation: 

// Iteration 1: i = 0 → nums[0] = 1 → sum = 1
// Iteration 2: i = 2 → nums[2] = 3 → sum = 1 + 3 = 4  
// Iteration 3: i = 4 → nums[4] = 5 → sum = 4 + 5 = 9

// Index:   0    1    2    3    4    5
// Values: [1,   2,   3,   4,   5,   6]
// Pairs:   ↑    ↑    ↑    ↑    ↑    ↑
//         (1,2) (3,4) (5,6)