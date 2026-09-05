<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {number}
 */
// //sol-1(brute force)- O(n^2)
// //LOGIC-we try every possible subarray by fixing a start point and growing the end point one 
// //step at a time multiplying as you go and keeping track of the biggest product found 
// //across all of them — O(n²) because there are roughly n²/2 total subarrays to check
// var maxProduct = function(nums) {
    
//     let max= nums[0];
//     for(let i=0; i<nums.length; i++){

//         let product = nums[i];
//         max = Math.max(max, product);
//         for(let j=i+1; j<nums.length; j++){

//             product = product * nums[j];// extend subarray to include nums[j]
//             max= Math.max(max, product);
//         }
//     }
//     return max;
// };


//sol-2 O(n) (using concepts of kadane algo / dp)
//LOGIC-t each position the best (max) or worst (min) product ending here can come from
//extending the previous max extending the previous min or restarting fresh at nums[i] 
//then check all three each time
//we track BOTH max and min because multiplying by a negative number can flip the most
//negative running product into the new largest positive one
//save the old max before updating it since computing the new min still needs that old 
//value not the already updated one
var maxProduct = function(nums) {
    //track both max and min product coz any time -ve elemnemt can come and make min product to max product
    let maxProduct= nums[0];
    let minProduct= nums[0];
    let finalProduct= nums[0];

    for(let i=1; i<nums.length; i++){
        //save maxProduct BEFORE overwriting it coz minProduct calculation still needs
        //the OLD maxProduct so maxProduct gets updated first on the next line
        let currMax= maxProduct;

        //each time update max, min product and check the with nums[i]   
        maxProduct = Math.max(maxProduct * nums[i], minProduct * nums[i], nums[i]);
        minProduct = Math.min(currMax * nums[i], minProduct * nums[i], nums[i]);

        finalProduct= Math.max(finalProduct, maxProduct, minProduct)//and finally find the max from all of them
    }
    return finalProduct;
}


// //sol-3  O(n)
// //LOGIC-scan the array twice once forward and once backward multiplying straight through
// //without ever truncating mid-way (only reset to 1 when hitting a zero since zero breaks
// //the array into independent segments)
// //this works because with an even number of negatives the full product is already best
// //and with an odd number of negatives dropping either the leftmost (forward scan) or
// //rightmost (backward scan) negative is guaranteed to fix it so checking both directions
// //always finds the true max
// var maxProduct = function(nums) {
//     let n= nums.length;

//     let ltrProduct= 1;//left to right product
//     let rtlProduct= 1;//right to left product
//     let finalMax= -Infinity;
    
//     for(let i=0;i<n; i++){//for left to right product
//         ltrProduct= ltrProduct * nums[i];
//         finalMax= Math.max(finalMax, ltrProduct);

//         if(nums[i]===0){//if 0 found during process then reset
//             ltrProduct= 1;
//         }
//     }
//     for(let i=n-1; i>=0; i--){//for right to left product
//         rtlProduct= rtlProduct * nums[i];
//         finalMax= Math.max(finalMax, rtlProduct);

//         if(nums[i]===0){//if 0 found during process then reset
//             rtlProduct= 1;
//         }
//     }
//     return finalMax;
=======
/**
 * @param {number[]} nums
 * @return {number}
 */
// //sol-1(brute force)- O(n^2)
// //LOGIC-we try every possible subarray by fixing a start point and growing the end point one 
// //step at a time multiplying as you go and keeping track of the biggest product found 
// //across all of them — O(n²) because there are roughly n²/2 total subarrays to check
// var maxProduct = function(nums) {
    
//     let max= nums[0];
//     for(let i=0; i<nums.length; i++){

//         let product = nums[i];
//         max = Math.max(max, product);
//         for(let j=i+1; j<nums.length; j++){

//             product = product * nums[j];// extend subarray to include nums[j]
//             max= Math.max(max, product);
//         }
//     }
//     return max;
// };


//sol-2 O(n) (using concepts of kadane algo / dp)
//LOGIC-t each position the best (max) or worst (min) product ending here can come from
//extending the previous max extending the previous min or restarting fresh at nums[i] 
//then check all three each time
//we track BOTH max and min because multiplying by a negative number can flip the most
//negative running product into the new largest positive one
//save the old max before updating it since computing the new min still needs that old 
//value not the already updated one
var maxProduct = function(nums) {
    //track both max and min product coz any time -ve elemnemt can come and make min product to max product
    let maxProduct= nums[0];
    let minProduct= nums[0];
    let finalProduct= nums[0];

    for(let i=1; i<nums.length; i++){
        //save maxProduct BEFORE overwriting it coz minProduct calculation still needs
        //the OLD maxProduct so maxProduct gets updated first on the next line
        let currMax= maxProduct;

        //each time update max, min product and check the with nums[i]   
        maxProduct = Math.max(maxProduct * nums[i], minProduct * nums[i], nums[i]);
        minProduct = Math.min(currMax * nums[i], minProduct * nums[i], nums[i]);

        finalProduct= Math.max(finalProduct, maxProduct, minProduct)//and finally find the max from all of them
    }
    return finalProduct;
}


// //sol-3  O(n)
// //LOGIC-scan the array twice once forward and once backward multiplying straight through
// //without ever truncating mid-way (only reset to 1 when hitting a zero since zero breaks
// //the array into independent segments)
// //this works because with an even number of negatives the full product is already best
// //and with an odd number of negatives dropping either the leftmost (forward scan) or
// //rightmost (backward scan) negative is guaranteed to fix it so checking both directions
// //always finds the true max
// var maxProduct = function(nums) {
//     let n= nums.length;

//     let ltrProduct= 1;//left to right product
//     let rtlProduct= 1;//right to left product
//     let finalMax= -Infinity;
    
//     for(let i=0;i<n; i++){//for left to right product
//         ltrProduct= ltrProduct * nums[i];
//         finalMax= Math.max(finalMax, ltrProduct);

//         if(nums[i]===0){//if 0 found during process then reset
//             ltrProduct= 1;
//         }
//     }
//     for(let i=n-1; i>=0; i--){//for right to left product
//         rtlProduct= rtlProduct * nums[i];
//         finalMax= Math.max(finalMax, rtlProduct);

//         if(nums[i]===0){//if 0 found during process then reset
//             rtlProduct= 1;
//         }
//     }
//     return finalMax;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// }