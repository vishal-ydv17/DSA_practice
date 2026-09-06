//use recursion to solve 
var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    
    if (n == 2) return Math.min(cost[0], cost[1]);// edge case

    
    let arr = new Array(n);//DP array to store minimum cost to reach each step
    
    // Base cases
    arr[0] = cost[0];  // Cost to reach step 0 (starting here)
    arr[1] = cost[1];  // Cost to reach step 1 (starting here)
    
    // Fill DP array
    for (let i = 2; i < n; i++) {
        arr[i] = cost[i] + Math.min(arr[i-1], arr[i-2]);
        //main logic is 
        // To reach step i, you must:
        // 1. Pay cost[i] to stand on it
        // 2. Come from either step i-1 or i-2
        // 3. Choose the cheaper way to get to those previous steps
    }
    
    return Math.min(arr[n-1], arr[n-2]);//we can reach the top from either the last step or second-last step

};

console.log(minCostClimbingStairs([10, 15, 20])); // Output: 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // Output: 6