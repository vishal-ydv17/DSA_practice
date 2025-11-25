
var findMaxAverage = function(nums, k) {

    currentSum=0;
    //find sum of first k elements(eg. like window of k elements)
    for(let i=0; i<k; i++){
        currentSum += nums[i];
    }

    let maxSum= currentSum;
    //Slide the fixed k elemnt of window through the rest of the array
    for(let i =k; i<nums.length; i++){
        //Remove the element going out of window so that we can move window to next to add
        currentSum -= nums[i-k];
         
        currentSum += nums[i];//Add the new element coming into window

        maxSum = Math.max(maxSum, currentSum);//check for maxSum
    }
    return maxSum/k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4)) //12.75
console.log(findMaxAverage([5],1)) //5