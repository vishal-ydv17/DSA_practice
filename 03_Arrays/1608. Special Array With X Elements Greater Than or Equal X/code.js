//LOGIC-how many numbers are at least as big as this number x
// eg: nums = [3,5]
// x=0: Numbers ≥ 0: [3,5] → 2 numbers (but needs 0) ✗
// x=1: Numbers ≥ 1: [3,5] → 2 numbers (needs 1) ✗
// x=2: Numbers ≥ 2: [3,5] → 2 numbers ✓ (exactly 2) ✓
// x=3: Numbers ≥ 3: [3,5] → 2 numbers (needs 3) ✗
var specialArray = function(nums) {

    for(let x=0; x<=nums.length; x++){

        let tempCount=0;

        for(let num of nums){

            if(num >= x) tempCount++;
        }

        if(tempCount==x) return x
    }

    return -1;
};
console.log(specialArray([3,5])); //2
console.log(specialArray([0,0]));   //-1
console.log(specialArray([0,4,3,0,4])); //3