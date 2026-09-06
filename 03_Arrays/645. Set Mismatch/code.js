
var findErrorNums = function(nums) {

    let n= nums.length;
    let freq= new Array(n+1);//make new array of size n+1
    freq = freq.fill(0);//fill at each place with 0 value
    let duplicate= -1;
    let missing = -1;

    // Count frequency for each number in nums
    for(element of nums){
        freq[element]= freq[element] + 1;// same as freq[element]++
    }
    // Find duplicate and missing
    for(let i=1; i<=nums.length; i++){
        
        if(freq[i]==2) duplicate=i;
        if(freq[i]==0) missing=i;
    }
    return [duplicate, missing];


};
console.log(findErrorNums([1,2,2,4])) //[2,3]
console.log(findErrorNums([1,1])) //[1,2]
console.log(findErrorNums([2,2])) //[2,1]
console.log(findErrorNums([3,2,3,4,6,5])) //[3,1]