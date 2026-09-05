
var maximumProduct = function sol (nums) {
    
    nums.sort((a,b)=>a-b);
    let n= nums.length;

    let product_1 = nums[n-1]*nums[n-2]*nums[n-3]; //for all 3 largest
    let product_2= nums[0]*nums[1]*nums[n-1]; //2 smallest then largest

    return Math.max(product_1, product_2);

};
console.log(maximumProduct([1,2,3])) //6
console.log(maximumProduct([1,2,3])) //6
console.log(maximumProduct([1,2,3,4])) //24
console.log(maximumProduct([-10,-10,5,2])) //500    

