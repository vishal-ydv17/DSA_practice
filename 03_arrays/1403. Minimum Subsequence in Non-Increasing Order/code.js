var minSubsequence = function(nums) {

    nums.sort((a,b)=>b-a);

    let res= [];
    let totalSum=0;

    //OR totalSum= nums.reduce((a, b) => a + b, 0);//to find the total sum
    for(let num of nums){
        
        totalSum += num;
    }

    let subSeqSum=0;

    for(let num of nums){

        subSeqSum += num;

        res.push(num);
        //check if current sum from index 0 to i is more than other left over element or not
        if(subSeqSum > (totalSum-subSeqSum)){
            break;
        }
    }

    return res;
};
console.log(minSubsequence([4,3,10,9,8])); //[10,9]
console.log(minSubsequence([4,4,7,6,7])); //[7,7,6]
console.log(minSubsequence([6])); //[6]