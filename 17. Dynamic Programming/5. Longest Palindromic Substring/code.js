/**
 * @param {string} s
 * @return {string}
 */
// LOGIC: this Q is based on (same idea as countSubstrings- 647. Palindromic Substrings)
//but here we just have find the longest palindrom so for that we tarck of coordinates od logest substring found so far
//dp[i][j] = true if substring s[i..j] is a palindrome 
// Additionally we track ans = [start, end] the indices of the LONGEST palindrome found so far
// and update it every time we discover a palindrome longer than the current best
// finally extract the actual substring using ans[0] (start) and ans[1] (end, inclusive)
var longestPalindrome = function(s) {
        
    let n= s.length;
    let ans=[0,0];//each time store coordinate of palindorme found and at last we will have the biggest subssring palindrome
    // [start, end] of the longest palindrome found so far
    //2d array
    let dp = Array(n).fill(null).map(() => Array(n).fill(false));//otherwise we can use normal nested for loop to make 2d arrya

    //base case
    //case-1 for 1 length of substring we have palindrome always true
    for(let i=0; i<n; i++){
        dp[i][i] = true;
    }
    //case-2 for length of substring 2 , if we have same char then palindrome
    for(let i=0; i<n-1; i++){
        if(s[i] === s[i+1]){
            dp[i][i+1] = true;
            // if(2 > ans[1]-ans[0]+1){
                ans=[i,i+1];//here we dont need to check if the length is greater
           // }
        }
    }

    //now iterate over the stirng s to mark in tabular/array weather they form the palindrome by using using previously computed smaller substrings in dp array
    //from substring 3 to n coz in base case we have already marked for length 1,2
    for(let len=3; len<=n; len++){
        for(let i=0; i<=n-len; i++){
            //for a given substring i=0 and j=2 for 1st iteration and we will increase the size of substring 
            j= i+len-1;

            if(s[i] === s[j] && dp[i+1][j-1]){
                dp[i][j] = true;
                if(len > ans[1]-ans[0]+1){
                    ans=[i,j];//palinfrom found then store its coordinate
                }
            }
        }
    }
    return s.substring(ans[0], ans[1]+1);//add +1 as suppose if we call substring[0,2] it will exclude last char
};