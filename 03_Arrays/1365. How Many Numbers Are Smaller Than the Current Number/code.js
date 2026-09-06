/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    let res=[];
    
    for(let i=0; i<nums.length; i++){

        let count=0;

        for(let j=0; j<nums.length; j++){//each time count from index 0 to last index

            if(nums[j]<nums[i] && j != i) count++;
        }
        res.push(count);
    }

    return res;
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));//[4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6,5,4,8]));//[2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7]));//[0,0,0,0]