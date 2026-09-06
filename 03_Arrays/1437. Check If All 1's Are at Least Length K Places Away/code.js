//LOGIC= so we iterate on array to find 1 then check that its index should not be -1 and then store that in last_index;(this is for 1st uteration )
//after that we check everytime i-last_index-1 < k then return false else go for new value or return true
var kLengthApart = function(nums, k) {
    
    let last_index= -1;//last 1 ns index found in num

    for(let i=0; i<nums.length; i++){

        if(nums[i]==1){

            if(i-last_index-1 < k && last_index != -1){
                
                return false;
            }

            last_index= i;
        }
    }

    return true;
};
console.log(kLengthApart([1,0,0,0,1,0,0,1], 2)); //true
console.log(kLengthApart([1,0,0,1,0,1], 2)); //false
console.log(kLengthApart([1,1,1,1,1], 0)); //true