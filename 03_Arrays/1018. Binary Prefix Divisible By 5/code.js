/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
 //logic is adding something to binary mean shift whole bit left(means multiply by 2) then add the that bit to this left shifted val; (note for shif right mean divide by 2 and it is binary so we always use 2 to multiply and divide)
var prefixesDivBy5 = function(nums) {
    
    let curr=0;
    let res=[];

    for(let num of nums){
        ////this sol will work but curr will exceed to (2^53 - 1) which will error so each step we do modulo to minimize the val as we only want to check divisible by 5

        // curr= curr * 2 + num;//left shit then add new val

        // if(curr%5 ==0){
        //     res.push(true);
        // }else{
        //     res.push(false);
        // }


        curr = (curr *2 + num) % 5;

        if(curr==0) res.push(true);
        
        else res.push(false);
    }
    return res;
};
console.log(prefixesDivBy5([0,1,1]));//[true,false,false]
