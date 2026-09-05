var pivotIndex = function(nums) {

    let totalSum=0;
    for(num of nums){//total sum of nums
        totalSum +=num;
    }
    
    let leftSum= 0;
    for(let i=0; i<nums.length; i++){//check each index as potential pivot

        let rightSum= totalSum-leftSum-nums[i];

        if(leftSum==rightSum) return i;

        leftSum += nums[i];//if did not find pivot add current element and check another i
    }

    return -1;
};
console.log(pivotIndex([1,7,3,6,5,6])); // Output: 3
console.log(pivotIndex([1,2,3])); // Output: -1