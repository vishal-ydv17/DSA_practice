var sortArrayByParity = function(nums) {
    
    let left=0;
    let right= nums.length-1;

    while(left<=right){

        if(nums[left]%2 == 0){//left is even
            left++;
        }
        else if (nums[right] % 2 === 1) {//right is even
            right--;
        }
        else{//swap as left is odd and right is even
            [nums[left],nums[right]] = [nums[right],nums[left]];
            left++;
            right--;
        }
    }
    return nums;
};
console.log(sortArrayByParity([3,1,2,4]));//[ 4, 2, 1, 3 ]

//more simple sol 
// var sortArrayByParity = function(nums) {
//     const evens = [];
//     const odds = [];
    
//     for (let num of nums) {
//         if (num % 2 === 0) {
//             evens.push(num);
//         } else {
//             odds.push(num);
//         }
//     }
    
//     return [...evens, ...odds];//use spread to merge two array and pass one by one
// };