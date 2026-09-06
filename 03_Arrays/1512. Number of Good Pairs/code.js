
var numIdenticalPairs = function(nums) {
    
    nums.sort((a,b)=>a-b);

    let count=0;

    for(let i=0; i< nums.length; i++){

        for(let j=i+1; j<nums.length; j++){

            if(nums[i] == nums[j]) count++
        }
    }
    return count;
};
console.log(numIdenticalPairs([1,2,3,1,1,3])); //4
console.log(numIdenticalPairs([1,1,1,1])); //6
console.log(numIdenticalPairs([1,2,3])); //0

//More efficient sol
// count the freq of element then no of pairs will be = f(f-1)/2
//eg:[1,1,1,1]    4(3)/2 = 12/2 = 6

// var numIdenticalPairs = function(nums) {
//     let freq = {};
//     let count = 0;
    
//     //count frequency of each number
//     for(let num of nums) {
//         freq[num] = (freq[num] || 0) + 1;
//     }
    
//     //calculate pairs using formula f*(f-1)/2
//     for(let num in freq) {
//         let f = freq[num];
//         count += f * (f - 1) / 2;
//     }
    
//     return count;
// };