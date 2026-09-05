<<<<<<< HEAD
/**
 * @param {number} n
 * @return {number}
 */
// //sol-1(normal recursion)
// //note-this problem is exaclty same is fibonacci but with base case diff
// var climbStairs = function(n) {
    
//     if(n==1 || n==2){
//         return n;
//     }

//     return climbStairs(n-1)+climbStairs(n-2);
// };

//sol-2(optimize recusion using dp/memoization)
//so we will use map/object to save the climbStairs(n) each time when recusion happens so we 
//dont have to recalculate the climbStairs(n) twice during recursion means we can use it from 
//the store as we have saved it during the recusion
let store={};//store or dp
var climbStairs = function(n) {
    if(n==1 || n==2){
        return n
    }
    if(!store[n]){
        store[n]= climbStairs(n-1) + climbStairs(n-2);
    }
    return store[n];
}

// //sol-3(normal iterative)
// var climbStairs = function(n) {
//     if(n==1 || n==2){
//         return n;
//     }
//     let first=1;
//     let second=2;
//     for(let i=2; i<n; i++){

//         let sum= first + second;
//         first =second;
//         second= sum;
//     }
//     return second;
=======
/**
 * @param {number} n
 * @return {number}
 */
// //sol-1(normal recursion)
// //note-this problem is exaclty same is fibonacci but with base case diff
// var climbStairs = function(n) {
    
//     if(n==1 || n==2){
//         return n;
//     }

//     return climbStairs(n-1)+climbStairs(n-2);
// };

//sol-2(optimize recusion using dp/memoization)
//so we will use map/object to save the climbStairs(n) each time when recusion happens so we 
//dont have to recalculate the climbStairs(n) twice during recursion means we can use it from 
//the store as we have saved it during the recusion
let store={};//store or dp
var climbStairs = function(n) {
    if(n==1 || n==2){
        return n
    }
    if(!store[n]){
        store[n]= climbStairs(n-1) + climbStairs(n-2);
    }
    return store[n];
}

// //sol-3(normal iterative)
// var climbStairs = function(n) {
//     if(n==1 || n==2){
//         return n;
//     }
//     let first=1;
//     let second=2;
//     for(let i=2; i<n; i++){

//         let sum= first + second;
//         first =second;
//         second= sum;
//     }
//     return second;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// }