//stored values in freq eg: {num,freq}
//  eg:let freq = {
//     1: 1,
//     2: 2,
//     3: 1
// };
var sumOfUnique = function(nums) {
    
    let sum=0;
    let freq={};//object

    //count freq and store it in freq array
    for(let num of nums){

        freq[num]= (freq[num] || 0) + 1
    }

    //add the that appears only once 
    for(let num in freq){

        if(freq[num]==1){

            sum += parseInt(num);//coz in freq array num are stored as string as object keys are always strings in JavaScript
        }
    }

    return sum;
};