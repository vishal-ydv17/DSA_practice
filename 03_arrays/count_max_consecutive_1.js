var findMaxConsecutiveOnes = function(nums) {
    let maxCount=0;
    let tempCount=0;

    for(let i=0; i<nums.length; i++){
        
        if(nums[i]==1){

            tempCount++;
            // if(tempCount>maxCount){
            //     maxCount=tempCount;
            // } or we can write like this
            maxCount = Math.max(maxCount, tempCount);
        }else{
            tempCount=0;//reset
        } 
    }
    return maxCount;
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); //3




//technique 02: using join, split and map

// we have used join as it give "110111" but if we use toString it give "1,1,0,1,1,1" so we dont want the commas so thats why we use join

// var findMaxConsecutiveOnes = function(nums) {

//     let val= nums.join('').split('0').map(x=>x.length);
//     let res= Math.max(...val);

//     return res;
// }
//console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); //3




// Example: nums = [1,1,0,1,1,1]

// nums.join('') → "110111"
// .split('0') → ["11", "111"] 
// .map(x => x.length) → [2, 3]
// Math.max(...[2, 3]) → 3