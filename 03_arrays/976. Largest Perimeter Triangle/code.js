/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    //logic
    //to form triangle
    //The three necessary conditions are: (a+b>c) or (a+c>b) or (b+c>a)
    
    nums.sort((a,b)=>a-b);
    let n=nums.length-1;
    
    for(let i=n; i>=2; i--){

        if(nums[i] < nums[i-1]+nums[i-2] 
            && nums[i-1] < nums[i]+nums[i-2]
            && nums[i-2] < nums[i-1]+nums[i] ){
            
            return (nums[i] + nums[i-1] + nums[i-2]);
        }
    }

    return 0;
};
console.log(largestPerimeter([2,1,2])); //5
console.log(largestPerimeter([1,2,1])); //0
console.log(largestPerimeter([3,2,3,4])); //10