
var maxProduct = function(nums) {

    nums.sort((a,b)=>a-b);

    let n= nums.length-1;//in nums array starIndex =0, endIndex =nums.length-1;

    return (nums[n] - 1) * (nums[n-1] - 1);
};
console.log(maxProduct([3,4,5,2])); //12
console.log(maxProduct([1,5,4,5])); //16
console.log(maxProduct([3,7])); //12