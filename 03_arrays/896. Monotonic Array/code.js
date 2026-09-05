var isMonotonic = function(nums) {

    if(nums.length<=2) true;
    //means it can be incresing if direction=1 and decresing if direction=-1
    let direction =0;//0 if direction is not known

    for(let i=0; i<nums.length-1; i++){

        if(nums[i]<nums[i+1]){
            if(direction==-1) return false;
            direction=1;//incresing
        }
        else if(nums[i]>nums[i+1]){
            if(direction==1) return false;
            direction=-1;//decresing
        }
    }
    return true;
};
console.log(isMonotonic([1,2,2,3]));//true

// //same approach/logic but using the only true/false TWO-PASS method

// var isMonotonic = function(nums) {
//     let increasing = true;
//     let decreasing = true;
    
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] > nums[i + 1]) {
//             increasing = false;
//         }
//         if (nums[i] < nums[i + 1]) {
//             decreasing = false;
//         }
//     }
    
//     return increasing || decreasing;
// };