/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    
    let totalSum=0;
    for(let num of arr){
        totalSum +=num;
    }

    if(totalSum%3 !==0) return false;

    let target = totalSum/3;
    let count =0;
    let currSum=0;

    for(let i =0; i<arr.length; i++){
        
        currSum += arr[i];

        if(currSum == target){
            count++;
            currSum=0;
        } 

        if(count == 2 && i<arr.length-1) return true;//if count is 2 then last one automatically satify the condition
    }
    return false;
};
console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])); //true
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])); //false
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4])); //true