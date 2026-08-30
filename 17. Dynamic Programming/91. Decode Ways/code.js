// /**
//  * @param {string} s
//  * @return {number}
//  */
// //sol-1 (normal recursion)
// //LOGIC-to decode a string, the last character(s) must come from either a single digit (1-9) 
// //or a valid two-digit number (10-26) — these are the only two ways to "peel off" a valid letter from the end
// //each choice leads to a shorter remaining string, and the number of ways to decode that remainder is itself a sub-problem
// //so the total ways for the current string is the SUM of ways from both valid choices not a pick between them
// //an empty string has exactly 1 way to decode (nothing left to do) which acts as the base case that
// //"seeds" the count as it propagates back up through every successful decoding path.
// var numDecodings = function(s) {

//     var fn =(remainingString)=>{

//         let n= remainingString.length;
//         let ans=0;

//         //base case
//         if(remainingString==='') return 1;
//         if(remainingString===0) return 0;

//         let oneDigit= remainingString.substring(n-1);//this give the single 1 digit
//         let twoDigit= remainingString.substring(n-2);//this give only 2 digit from the s

//         //now we have 2 possiblity either choose 1 digit or 2 digit from whole big interger
//         //case-1 for 1 digit
//         if(oneDigit > 0){
//             //now each time when call fn we get a result when we hit base case then store in ans 0 or 1 see base case
//             ans = ans + fn(remainingString.substring(0, n-1));
//         }
//         //for 2 digit
//         if(twoDigit >= 10 && twoDigit <= 26){
//             ans = ans + fn(remainingString.substring(0, n-2));
//         }
//         return ans;//total ways = (ways from choice 1 digit) + (ways from choice 2 digit)
//     }   
//     return fn(s);
// };

//sol-2 (optimize using dp)
var numDecodings = function(s) {

    let dp={};

    var fn =(remainingString)=>{
        //if remaining string is there in dp then return dont calculate again
        if(remainingString in dp){
            return dp[remainingString];
        }
        //or
        // don't use if(dp[key]) — 0 is a valid answer but JS treats 0 as false so it'd wrongly skip the cache
        // use `key in dp` or `dp[key] !== undefined` instead — these correctly detect "was this ever cached", even if the cached value is 0

        let n= remainingString.length;
        let ans=0;

        //base case
        if(remainingString==='') return 1;
        if(remainingString===0) return 0;

        let oneDigit= remainingString.substring(n-1);//this give the single 1 digit
        let twoDigit= remainingString.substring(n-2);//this give only 2 digit from the s

        //now we have 2 possiblity either choose 1 digit or 2 digit from whole big interger
        //case-1 for 1 digit
        if(oneDigit > 0){
            //now each time when call fn we get a result when we hit base case then store in ans 0 or 1 see base case
            ans = ans + fn(remainingString.substring(0, n-1));
        }
        //for 2 digit
        if(twoDigit >= 10 && twoDigit <= 26){
            ans = ans + fn(remainingString.substring(0, n-2));
        }
        //store in dp
        dp[remainingString] = ans;
        return ans;//total ways = (ways from choice 1 digit) + (ways from choice 2 digit)
    }   
    return fn(s);
};