/**
 * @param {number[]} nums
 * @return {number}
 */
//sol-1(O(log n))
//LOGIC-note there can be 4 possibilities like mid===mid-1 is same and left side 
//is even/odd length and mid===mid+1 is same and right side is even/odd length
//(elements count after mid+1 to r)
//and finally if mid is itself the single element
var singleNonDuplicate = function(nums) {
    let l=0;
    let r=nums.length-1;

    while(l<=r){
        let mid= l + Math.floor((r-l)/2);

        //left side sorted
        if(nums[mid]===nums[mid-1]){
            if((mid-1 - l)%2 !=0){//if left side is odd
                r= mid-2;
            } 
            else{
                l= mid+1;
            }
        }
        //right side is sorted
        else if(nums[mid]===nums[mid+1]){
            if((r - mid+1)%2 !=0){//if right side is odd
                l= mid+2;
            }
            else{
                r= mid-1;
            }
        }
        //mid itself is the single element
        else{
            return nums[mid];
        }
    }
};

// //sol-2(O(log n))
// //LOGIC-so onr thing ca we observe is that our single element is always at even index
// //coz in array it start form 0,1,2... so we can force our mid to even index and then 
// //we can do nomal binary search
// var singleNonDuplicate = function(nums) {
//     let l=0;
//     let r=nums.length-1;

//     while(l<r){
//         let mid = l + Math.floor((r-l)/2);

//         if(mid % 2 != 0){//if mid is at odd
//             mid--;//so force mid to come at even index
//         }
        
//         if(nums[mid] === nums[mid+1]){//both element equal mean pair is intact
//             l= mid+2;//pair is intact so single element is to the right
//         }
//         else{
//             r= mid;//pair is broken so single element is at mid or to the left
//         }
//     }
//     return nums[l];
// }

// //sol-3(O(n))-worst time complexity as we comapre to sol-1 and sol-2
// //brute force sol
// //LOGIC- by the property of xor we know that if we xor two same numbers then result
// //is 0  so now in this problem we do xor the whole element and single element
// //gets left after xor and we return that   
// var singleNonDuplicate = function(nums) {
//     let ans=0;
//     for(let i=0; i<nums.length; i++){
//         ans = ans ^ nums[i];
//     }
//     return ans;
// }