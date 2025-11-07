// brute force
// var findLHS = function(nums) {
//     nums.sort((a,b)=>a-b);
    
//     let maxLength=0;
    
//     for(let i=0; i<nums.length; i++){
//         let currArr= [nums[i]];

//         for(let j=i+1; j< nums.length; j++){

//             if(nums[j]-nums[i] <= 1){//collect all numbers with difference <= 1
//                 currArr.push(nums[j]);
//             }else{
//                 break;//as nums are sorted
//             }
//         }
//         const minEle= currArr[0];
//         const maxEle= currArr[currArr.length-1];
//         //verify final subsequence
//         if(maxEle-minEle==1 && currArr.length>maxLength){
//             maxLength=currArr.length;
//         }
//     }

//     return maxLength;
// };
// console.log(findLHS([1,3,2,2,5,2,3,7])); //5
// console.log(findLHS([1,2,3,4])); //2
// console.log(findLHS([1,1,1,1])); //0 

//sliding window
var findLHS = function(nums) {

    nums.sort((a,b)=>a-b)
    let left =0;
    let maxLength=0;

    for(let right=0; right<nums.length; right++){

        while(nums[right]-nums[left] >1){
            left++;//shrink window from left
        }
        //now check for valid harmonic
        if(nums[right]-nums[left]===1){
            maxLength= Math.max(maxLength, right-left+1);
        }
    }
    return maxLength;
}
 console.log(findLHS([1,3,2,2,5,2,3,7])); //5
 console.log(findLHS([1,2,3,4])); //2
 console.log(findLHS([1,1,1,1])); //0 