<<<<<<< HEAD
// //sol-1(normal recursion)
// var minCostClimbingStairs = function(cost) {
//     let n= cost.length;

//     function minCost(i){
//         if(i==0 || i==1){//we can start at either 0 or 1 index for free
//             return 0;
//         }
//         return Math.min(minCost(i-1) + cost[i-1], minCost(i-2) + cost[i-2]);
//     }

//     return minCost(n);
// }

//sol-2(optimized recursion using dp / memoization)
//LOGIC-Unlike the dp[] array version (which builds answers from 0 up to n in a loop 
//bottom-up) this version starts at the top (minCost(n)) and recurses downward toward the base 
//cases (i=0, i=1), caching each result in store the first time its computed. Next time the 
//same i is needed, it's returned instantly from store instead of recomputing — thats what 
//makes it O(n) instead of the exponential blowup from your very first plain-recursion attempt.
var minCostClimbingStairs = function(cost) {
    let n= cost.length;
    let store={};

    function minCost(i){
        if(i==0 || i==1){//base case
            return 0;
        }
        if(store[i] === undefined){//DON'T use !store[i] see below in Note
            store[i]= Math.min(minCost(i-1) + cost[i-1], minCost(i-2) + cost[i-2])
        }
        return store[i];
    }

    return minCost(n);
}
//note-// DON'T use !store[i] to check the cache — it fails whenever the cached value is a falsy
// value like 0 (happens here when cost[] has lots of 0s, since minCost(i) can legitimately be 0).
// !store[i] treats "cached as 0" the same as "not cached at all" → recomputes every time →
// memoization silently breaks → exponential recursion → Time Limit Exceeded.
// FIX: always check store[i] === undefined instead.




// // sol-3 (bottom-up DP / tabulation) optimized iterative dp sol
// // LOGIC: dp[i] = Math.min(dp[i-1] + cost[i-1] dp[i-2] + cost[i-2])
// // Q says we can start from either index 0 or 1 and each move is 1 or 2 steps
// // NOTE: standing at an index costs nothing — we only pay cost[i] when we LEAVE index i
// //
// // dp[i]              = minimum cost to ARRIVE at step i (not cost[i] itself!)
// // dp[i-1] + cost[i-1] = arrive at (i-1) then pay cost[i-1] to leave and land on i (1-step move)
// // dp[i-2] + cost[i-2] = arrive at (i-2) then pay cost[i-2] to leave and land on i (2-step move)
// // take the min of both ways to arrive at i
// var minCostClimbingStairs = function(cost) {
//     const n = cost.length;
//     const dp = new Array(n + 1);

//     dp[0] = 0;//0 free to start at step 0
//     dp[1] = 0;//0 free to start at step 1

//     for (let i = 2; i <= n; i++) {
//         dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//     }

//     return dp[n];//cost to reach the top, one step past the last index
=======
// //sol-1(normal recursion)
// var minCostClimbingStairs = function(cost) {
//     let n= cost.length;

//     function minCost(i){
//         if(i==0 || i==1){//we can start at either 0 or 1 index for free
//             return 0;
//         }
//         return Math.min(minCost(i-1) + cost[i-1], minCost(i-2) + cost[i-2]);
//     }

//     return minCost(n);
// }

//sol-2(optimized recursion using dp / memoization)
//LOGIC-Unlike the dp[] array version (which builds answers from 0 up to n in a loop 
//bottom-up) this version starts at the top (minCost(n)) and recurses downward toward the base 
//cases (i=0, i=1), caching each result in store the first time its computed. Next time the 
//same i is needed, it's returned instantly from store instead of recomputing — thats what 
//makes it O(n) instead of the exponential blowup from your very first plain-recursion attempt.
var minCostClimbingStairs = function(cost) {
    let n= cost.length;
    let store={};

    function minCost(i){
        if(i==0 || i==1){//base case
            return 0;
        }
        if(store[i] === undefined){//DON'T use !store[i] see below in Note
            store[i]= Math.min(minCost(i-1) + cost[i-1], minCost(i-2) + cost[i-2])
        }
        return store[i];
    }

    return minCost(n);
}
//note-// DON'T use !store[i] to check the cache — it fails whenever the cached value is a falsy
// value like 0 (happens here when cost[] has lots of 0s, since minCost(i) can legitimately be 0).
// !store[i] treats "cached as 0" the same as "not cached at all" → recomputes every time →
// memoization silently breaks → exponential recursion → Time Limit Exceeded.
// FIX: always check store[i] === undefined instead.




// // sol-3 (bottom-up DP / tabulation) optimized iterative dp sol
// // LOGIC: dp[i] = Math.min(dp[i-1] + cost[i-1] dp[i-2] + cost[i-2])
// // Q says we can start from either index 0 or 1 and each move is 1 or 2 steps
// // NOTE: standing at an index costs nothing — we only pay cost[i] when we LEAVE index i
// //
// // dp[i]              = minimum cost to ARRIVE at step i (not cost[i] itself!)
// // dp[i-1] + cost[i-1] = arrive at (i-1) then pay cost[i-1] to leave and land on i (1-step move)
// // dp[i-2] + cost[i-2] = arrive at (i-2) then pay cost[i-2] to leave and land on i (2-step move)
// // take the min of both ways to arrive at i
// var minCostClimbingStairs = function(cost) {
//     const n = cost.length;
//     const dp = new Array(n + 1);

//     dp[0] = 0;//0 free to start at step 0
//     dp[1] = 0;//0 free to start at step 1

//     for (let i = 2; i <= n; i++) {
//         dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//     }

//     return dp[n];//cost to reach the top, one step past the last index
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// }