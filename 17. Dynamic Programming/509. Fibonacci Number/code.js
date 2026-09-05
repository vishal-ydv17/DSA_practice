// /**
//  * @param {number} n
//  * @return {number}
//  */
// //sol-1(normal recussion without optimization)
// var fib = function(n) {
//     if(n<=1){
//         return n;
//     }
//     return fib(n-1)+fib(n-2);
// }

//sol-2(optimized recussion)
//-lets optimize the normal recusion sol using dp
//LOGIC-we will use dp to optimize the this problem means we will not calculate the the fib(n)
//when we have already calulated it and have saved in store means if my store already has it 
//so for that each time when we find a fab(n) of a number we will store it in "store" object or map
//this optimization using dp is sometimes called memoization
let store={};//say store or dp as a varaible name
var fib = function(n) {
    if(n<=1){
        return n;
    }
    if(!store[n]){//each time when fib of n is not in store then save it in store
        store[n]= fib(n-1)+fib(n-2);
    }
    return store[n];
};

// //sol-3 (normal iterative sol)
// var fib = function(n) {
    
//     if(n<=1){//edge case
//         return n;
//     }
//     let first=0;
//     let second=1;
//     for(let i=2; i<=n; i++){
        
//         let sum = first + second;
//         first= second;
//         second= sum;
//     }
//     return second;
// }