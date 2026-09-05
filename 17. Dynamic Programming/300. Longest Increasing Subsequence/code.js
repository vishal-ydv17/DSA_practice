/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n^2)
//LOGIC-step-1 go through each element one by one. For the current element, look left
//if any earlier element is smaller it can extend into a longer increasing subsequence
//step-2 ff no smaller element is found keep dp[i] as 1  the minimum possible length (itself alone)
//step-3 if a smaller element IS found, increase count by 1 (dp[j]+1) and compare with dp[i] current value keep whichever is bigger
//step-4 after that, compare dp[i] with lisLength and update lisLength if bigger
var lengthOfLIS = function(nums) {
    let n= nums.length;
    let dp= Array(n).fill(1);//fill with 1 as min sunsequence can be 1(itself)
    
    let lisLength= 1;//longest increasing subsequence length

    for(let i=1; i<n;i++){
        //to find the smalled element of left curr elenent
        for(let j=0; j<i;j++){
            if(nums[j] < nums[i]){
                //we are using max coz dp[i] can alredy be present but we have to find longest substring thats why we compare each time
                dp[i]= Math.max(dp[i], dp[j]+1);
                lisLength= Math.max(lisLength, dp[i]);//then update lisLength also
            }
        }
    }
    return lisLength;
};