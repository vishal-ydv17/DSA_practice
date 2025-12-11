var findLengthOfLCIS = function(nums) {
    
    if(nums.length==0) return 0;

    let maxLength= 1;
    let currLength= 1;//it means single number streak restarting

    for(let i=1; i<nums.length; i++){

        if(nums[i-1]<nums[i]){
            currLength++;
        }else{
            currLength=1;//when we reset then also we keep 1 as starting for streak
        }
        maxLength = Math.max(maxLength, currLength);
    }
    return maxLength
};

console.log(findLengthOfLCIS([1,3,5,4,7])); // Output: 3
console.log(findLengthOfLCIS([2,2,2,2,2])); // Output: 1