
var dominantIndex = function(nums) {
    
    let max= -Infinity;
    let maxIndex=-1;

    for(let i=0; i<nums.length; i++){//find max element and its index
        if(nums[i] >max) {
            max=nums[i];
            maxIndex= i;
        }
    }

    for(let i=0; i<nums.length; i++){//check if max is twice every other element

        if(max < 2*nums[i] && maxIndex !== i) return -1;
    }
    return maxIndex;
};
console.log(dominantIndex([3,6,1,0])); // Output: 1
console.log(dominantIndex([1,2,3,4])); // Output: -1