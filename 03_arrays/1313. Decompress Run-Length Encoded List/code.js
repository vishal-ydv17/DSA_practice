/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    let result=[];

    for(let i=0; i<nums.length; i +=2){

        let freq= nums[i];

        for(let j=1; j<=freq; j++){

            result.push(nums[i+1]); //num[i+1] is value
        }
    }
    return result;
};
console.log(decompressRLElist([1,2,3,4])); //[2,4,4,4]
console.log(decompressRLElist([1,1,2,3])); //[1,3,3]    