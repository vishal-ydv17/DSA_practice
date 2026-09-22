// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// //sol-1(brute force)
// //LOGIC-just choose 1 element form array then go to each element of array
// //and check is choosen element + curr element ==== target or not 
// var twoSum = function(nums, target) {
//     let ans=[];
//     for(let i=0; i<nums.length; i++){
//         for(let j =i+1; j<nums.length; j++){
            
//             if(nums[i]+nums[j]===target){
//                 ans.push(i);
//                 ans.push(j);
//                 return ans;
//             }
//         }
//     }
//     return -1;
// };

//sol-2
//LOGIC-to avoid search 2 times in array we will store each element in map
//with its index and then we will iterate on each eelment of array to find
//its complement
var twoSum = function(nums, target) {

    let map= new Map();
    //lets biuld a map in which we will store all element with indexes
    for(let i=0; i<nums.length; i++){
        map.set(nums[i], i);
    }

    //now lets search for the compliment
    for(let i=0; i<nums.length; i++){
        
        let rem= target-nums[i];//rem is remaining needed to complete target
        if(map.has(rem) && map.get(rem) != i){//also check if complemnet are not same element
            return [i, map.get(rem)];
        }
    }
}


// //sol-3 (ANOTHER WAY OF WRITING SOL-2 )
// var twoSum = function(nums, target) {
//     let map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         let rem = target - nums[i];
//         if (map.has(rem)) {
//             return [map.get(rem), i];
//         }
//         map.set(nums[i], i);
//     }
// };