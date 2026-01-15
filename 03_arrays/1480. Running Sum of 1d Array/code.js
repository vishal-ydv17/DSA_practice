
var runningSum = function(nums) {
    
    let res=[];

    let tempSum=0;

    for(let i=0; i<nums.length; i++){

        tempSum += nums[i];

        res.push(tempSum);
    }

    return res;
};