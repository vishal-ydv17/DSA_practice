/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// //sol-1 (normal recursion->bottom up)- but give time limit exceed but in sol-2 we will use dp to optimize
// //LOGIC- is to reach the finish we can reach form top or left 
// //so grid[m-1,n-1]= grid[m-1, n] + grid[m, n-1] means total ways to reach we 1st need to find 
// //total ways to reach before it like grid[m]+grid[n-1]  and grid[m-1, n]
// var uniquePaths = function(m, n) {
    
//     var fn= (x, y)=>{//for how many ways we ca reach x,y
//         //base case
//         if(x===0 && y===0) return 1;//reached the start cell (0,0) itself exactly 1 way (do nothing)
//         if(x<0 || y<0) return 0;//out of bounds like went past the top row or left column,invalid path
//         //any other cell can only be reached from directly above (x-1, y)
//         //or directly left (x, y-1), so total ways = sum of both
//         return fn(x, y-1) + fn(x-1, y);
//     }
//     return fn(m-1, n-1);
//     //start counting paths from the destination cell (bottom-right corner),
//     //working backward to (0,0)
// };


//sol-2 (normal recursion->bottom up) Optimized using dp(by 2d array)
var uniquePaths = function(m, n) {

    let dp= Array.from({length:m} ,()=>Array(n).fill(-1));
    var fn = (x,y)=>{
        //base case
        if(x===0 && y===0) return 1;
        if(x<0 || y<0) return 0;

        if(dp[x][y] != -1) return dp[x][y];//if it exist in dp then return form dp

        return dp[x][y] = fn(x, y-1) + fn(x-1, y);//if not exist then set its value
    }
    return fn(m-1, n-1);
}

// //sol-3 (iterative top down method) Optimized using dp(by 2d array)
// var uniquePaths = function(m, n) {//m=row n=col
//     let dp= Array.from({length:m}, ()=>Array(n).fill(-1));
//     //base case
//     //base case-1 lets build the base case as above we did and fill all 0th row with 1
//     for(let i=0; i<m;i++){
//         dp[i][0] = 1;
//     }
//     //base case-2 lets fill the 0th column with 1 coz at there is total 1 way to reach there
//     for(let i=0; i<n; i++){
//         dp[0][i] = 1;
//     }

//     //lets use the above fill teh reaming grid
//     for(let i=1; i<m; i++){//start with 1 as 1 is already filled in base case
//         for(let j=1; j<n; j++){

//             dp[i][j] = dp[i][j-1] + dp[i-1][j];
//         }
//     }
//     return dp[m-1][n-1];
// }