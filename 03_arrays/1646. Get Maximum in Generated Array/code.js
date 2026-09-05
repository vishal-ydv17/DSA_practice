//LOGIC- is each time you iterate from 1 to n 
//then add some element in nums at  nums[2 * i] and nums[2 * i]+1  
//then find the max val in nums array
var getMaximumGenerated = function(n) {
    
    if(n==0) return 0;//edge case

    let nums=[0,1];
    let maxVal=1;

    for(let i=1; i<=n; i++){//make i=1 as nums[2 * i]=nums[2] which is correct and i<=n as we need n+1 in nums

        if(2*i <= n){

            //set num[i] at index 2*i as it is given in Q
            nums[2 * i] = nums[i];
            maxVal= Math.max(maxVal, nums[2*i]);
        }

        if(2*i + 1 <= n){

            //set num[i]+nums[i+1] at index 2*i+1 as it is given in Q
            nums[2 * i + 1] = nums[i] + nums[i + 1]
            maxVal= Math.max(maxVal, nums[2*i + 1]);
        }
    }
    
    return maxVal;
};
console.log(getMaximumGenerated(7)); //3
console.log(getMaximumGenerated(2)); //1
console.log(getMaximumGenerated(3)); //2