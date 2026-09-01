/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// //sol-1 (normal backtrack recuriosn)-but it works but give Time Limit exceed on leetcode
// var change = function(amount, coins) {
//     let n= coins.length;
    
//     var fn = (rem, start)=>{//rem=remaining amount
//         //base case
//         if(rem === 0) return 1;
//         if(rem < 0) return 0;

//         let count=0;//number of combination
//         for(let i=start; i<n; i++){
//             //dont use i+1 as we want to use same coin many times so i and if we use i+1 
//             //means we dont get use same coins once we have used it
//             count = count + fn(rem - coins[i], i);
//         }
//         return count;
//     }
//     return fn(amount,0);
// };

// //sol-2 (optimize using dp by object/map) but this is correct but leetcode give time limit 
// //as it can be more optimized by using array(as it getting and setting in array is less time complexity)
// var change = function(amount, coins) {
//     let n= coins.length;
//     //optimize using dp we can use map/object
//     let dp= new Map();

//     var fn= (rem, start)=>{//rem= remaining Sum
//         //base case
//         if(rem===0) return 1;
//         if(rem<0) return 0;
        
//         let count=0;//count = is the no of combinations so far
//         //use the uniq combination as if thre can be same rem but diff coin used so keep 
//         //the uniq like start + '-' + rem and this give unique key 
//         let key= start + '-' + rem;
//         if(dp.has(key)) return dp.get(key);

//         for(let i=start; i<n; i++){

//             count = count + fn(rem-coins[i], i);
//         }
//         //each time when key is not there there run lopp and find count and update the in dp
//         dp.set(key, count);
//         return count;
//     }
//     return fn(amount, 0)
// }



//sol-2 (optimize using dp by 2d array) and thsi works perfect
var change = function(amount, coins) {
    let n= coins.length;
    //we have used amount+1 coz amount is literal value but array starts form 0 index
    //length tell that we have to call amount+1 time and function ()=>Array(n).fill(-1))
    let dp= Array.from({length:amount+1}, ()=>Array(n).fill(-1));//we can use for loop also instead
    //or
    //let dp=[];
    // for (let i = 0; i <= amount; i++) {
    //     dp[i] = new Array(n).fill(-1);
    // }

    var fn=(rem, start)=>{
        //base case
        if(rem===0) return 1;
        if(rem<0) return 0;

        //if it exist in dp return count form it
        if(dp[rem][start] != -1) return dp[rem][start];
        
        let count=0;
        for(let i=start; i<n; i++){
            count = count + fn(rem-coins[i], i);
        }
        return dp[rem][start] = count;//if it doesnt exist then update it by the count
    }
    return fn(amount, 0)
}