/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//sol-1
//O(n)-two pointers approach
//we use two pointers coz it is sorted that means we know if we move right elemnt increase
//if we go left elemnt decreases
var twoSum = function(numbers, target) {

    let left=0;
    let right= numbers.length-1;
    while(left<right){
        let sum = numbers[left] + numbers[right];

        if(sum==target){
            return [left+1, right+1];
        }
        if(sum<target){
            left++;//move left to right as sum we got is less
        }
        if(sum>target){
            right--;//move to right as sum we got is greater
        }
    }
}
// //sol-2
// //brute force O(n^2)
// var twoSum = function(numbers, target) {
    
//     let ans=[];
//     for(let i=0; i<numbers.length; i++){
//         for(let j=i+1; j<numbers.length; j++){

//             if(numbers[i]+numbers[j]==target){
//                 ans.push(i+1);
//                 ans.push(j+1);
//             }
//         }
//     }
//     return ans;
// };