//LOGIC-each time we choose odd length by using index start and end then find the sum of that sub array
var sumOddLengthSubarrays = function(arr) {
    
    //now sum of odd sub array
    let totalSum=0;

    for(let start=0; start<arr.length; start++){
        
        for(let end=start; end<arr.length; end++){
            
            let length= end-start+1;

            if(length % 2 == 1){//check if odd length then add add Sub Array

                //sub array sum
                let subArrSum=0;
                for(let i=start; i<=end; i++){
                    subArrSum += arr[i];
                }
                
                totalSum += subArrSum;
            }
        }
    }

    return totalSum;
};
console.log(sumOddLengthSubarrays([1,4,2,5,3])); //58
console.log(sumOddLengthSubarrays([1,2])); //6
console.log(sumOddLengthSubarrays([10,11,12])); //66