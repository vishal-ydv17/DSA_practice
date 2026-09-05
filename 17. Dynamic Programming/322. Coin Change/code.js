// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// //sol(normal recurion)
// //LOGIC-To make change for `remainingAmount` one of the coins we use must be the "first" one
// //so imagine trying each coin in turn as that first choice
// //If we commit to coins[i] as one of the coins used the rest of the amount to solve is 
// //exactly (remainingAmount - coins[i]) — nothing more nothing less
// //Whatever the minimum coins is for that smaller leftover amount we already trust the recursion 
// //to know it (thats what fn() computes) — we just add 1 for the coin we picked
// //Since we dont know in advance which coin is the "best" first choice, we try all of them and 
// //keep the one giving the fewest total coins thats why its a min over every coins[i]
// var coinChange = function(coins, amount) {
//     let n= coins.length;

//     var fn = (remainingAmount)=>{
//         //base case
//         if(remainingAmount===0) return 0;//0 coins needed (target exactly hit)
//         if(remainingAmount < 0) return -1;

//         let minCoins = Infinity;

//         for(let i=0; i<n; i++){
//             //for each coin we asks if we use one of this coin how many more coins to finish the rest?"
//             let tempRes= fn(remainingAmount - coins[i]);
//             if(tempRes != -1){
//                 minCoins = Math.min(minCoins, 1 + tempRes);
//             }
//         }

//         return minCoins === Infinity ? -1 : minCoins;
//     }

//     return fn(amount);
// };

// //sol-2(optimized recurion with dp)
// var coinChange = function(coins, amount) {
//     let n= coins.length;
//     let dp={};

//     var fn = (remainingAmount)=>{
//         if(remainingAmount === 0) return 0;
//         if(remainingAmount < 0) return -1;

//         //if remainingAmount exist in dp then return that else we calulate then store in dp
//         if(dp[remainingAmount] !== undefined){
//             return dp[remainingAmount];
//         }
//         //lets calsulate remainingAmout
//         let minCoins= Infinity;

//         for(let i=0; i<n; i++){
//             let tempRes = fn(remainingAmount - coins[i])

//             if(tempRes != -1){
//                 minCoins = Math.min(minCoins, 1 + fn(remainingAmount - coins[i]));
                
//             }
//         }
        
//         //dp[remainingAmount] = (minCoins === Infinity) ? -1 : minCoins;
//         //or
//         if(minCoins === Infinity){
//             dp[remainingAmount] = -1;
//         }
//         else{
//             dp[remainingAmount] = minCoins;
//         }

//         return dp[remainingAmount];
//     }
//     return fn(amount);
// }


//sol-2(optimized iterative sol with dp)
var coinChange = function(coins, amount) {
    let n= coins.length;
    let dp= new Array(amount+1).fill(Infinity);//dont fill with 0 coz 0 is already minimum fill max possble val

    dp[0] = 0;//base case;

    for(let rem=1; rem<=amount; rem++){//iterate till amout
        for(let j=0; j<coins.length; j++){//iterate over coin to choose

            let remainingAmount = rem - coins[j];//make sure it is not -ve and rem is actual amount
            
            if(remainingAmount >=0){
                dp[rem] = Math.min(dp[rem], 1 + dp[remainingAmount]);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
    //if there is no coin that satisfy amount then return -1
}