//LOGIC- need to find to bring Minimal to atleast 1
//Step 1: (-3) = -3
//Step 2: -3 + 2 = -1  
//Step 3: -1 + (-3) = -4  ← Minimum!
//Step 4: -4 + 4 = 0
//Step 5: 0 + 2 = 2
//Minimum cumulative sum = -4
//We need to bring this up to at least 1:
//startValue = 1 - (-4) = 5
var minStartValue = function(nums) {
    
    let temp=[];
    let tempSum=0;

    for(let i=0; i<nums.length; i++){

        temp.push(nums[i]+tempSum);

        tempSum= nums[i]+tempSum;//use this to add step by step sum in array as a helper
    }

    let minCumulativeSum= Math.min(...temp);

    if(minCumulativeSum >0){//given in Q
        return 1;
    }

    return 1+Math.abs(minCumulativeSum);

};
console.log(minStartValue([-3,2,-3,4,2])); //5
console.log(minStartValue([1,2])); //1
console.log(minStartValue([1,-2,-3])); //5