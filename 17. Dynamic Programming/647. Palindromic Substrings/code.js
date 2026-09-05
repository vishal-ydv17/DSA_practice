<<<<<<< HEAD
de
// //sol-1-O(n^3)-normal answer without dp
// // LOGIC: try every possible "center" of a palindrome — there are 2n-1 centers total:
// //   n centers for ODD-length palindromes (single character as center, e.g. "aba" centers on 'b')
// //   n-1 centers for EVEN-length palindromes (gap between two chars, e.g. "abba" centers between the two 'b's)
// //
// // for each center, expand outward (left--, right++) as long as s[left] === s[right].
// // EVERY successful expansion step is itself a valid palindrome — so count each one.

// var countSubstrings = function(s) {
//     let n = s.length;
//     let count = 0;

//     function expandAndCount(left, right) {
//         while (left >= 0 && right < n && s[left] === s[right]) {
//             count++;      // this expansion found a valid palindrome
//             left--;
//             right++;
//         }
//     }

//     //note we call both for odd and even as dont know it is odd or even so other case automatically dont run otherwise
//     for (let center = 0; center < n; center++) {
//         // odd-length palindromes (single-char center)
//         //expandAndCount(1, 1) on "aba"
//         expandAndCount(center, center);     
//         // even-length palindromes (gap center)
//         //expandAndCount(1, 2) on "abba"
//         expandAndCount(center, center + 1); 
//     }

//     return count;
// };


//sol-2 (using dp)
//LOGIC- is make a tabular tabel then for base case we mark its coordinate in table/array 
//dp[i][j] = true if substring s[i..j] is a palindrome
//base case 1: every single character (length 1) is a palindrome
//base case 2: length-2 substrings are palindromes if both characters match
//general case (length >= 3): s[i..j] is a palindrome if s[i] === s[j] AND the inner
//substring s[i+1..j-1] is also a palindrome (dp[i+1][j-1])
var countSubstrings = function(s) {
    
    let n= s.length;
    let ansCount=0;//to count the substring is palindrome or not
    //2d array
    let dp = Array(n).fill(null).map(() => Array(n).fill(false));//otherwise we can use normal nested for loop to make 2d arrya


    //base case
    //case-1 for 1 length of substring we have palindrome always true
    for(let i=0; i<n; i++){
        dp[i][i] = true;
        ansCount++;
    }
    //case-2 for length of substring 2 , if we have same char then palindrome
    for(let i=0; i<n-1; i++){
        if(s[i] === s[i+1]){
            dp[i][i+1] = true;
            ansCount++;//palinfrom found
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
                ansCount++;
            }
        }
    }
    return ansCount;
=======
de
// //sol-1-O(n^3)-normal answer without dp
// // LOGIC: try every possible "center" of a palindrome — there are 2n-1 centers total:
// //   n centers for ODD-length palindromes (single character as center, e.g. "aba" centers on 'b')
// //   n-1 centers for EVEN-length palindromes (gap between two chars, e.g. "abba" centers between the two 'b's)
// //
// // for each center, expand outward (left--, right++) as long as s[left] === s[right].
// // EVERY successful expansion step is itself a valid palindrome — so count each one.

// var countSubstrings = function(s) {
//     let n = s.length;
//     let count = 0;

//     function expandAndCount(left, right) {
//         while (left >= 0 && right < n && s[left] === s[right]) {
//             count++;      // this expansion found a valid palindrome
//             left--;
//             right++;
//         }
//     }

//     //note we call both for odd and even as dont know it is odd or even so other case automatically dont run otherwise
//     for (let center = 0; center < n; center++) {
//         // odd-length palindromes (single-char center)
//         //expandAndCount(1, 1) on "aba"
//         expandAndCount(center, center);     
//         // even-length palindromes (gap center)
//         //expandAndCount(1, 2) on "abba"
//         expandAndCount(center, center + 1); 
//     }

//     return count;
// };


//sol-2 (using dp)
//LOGIC- is make a tabular tabel then for base case we mark its coordinate in table/array 
//dp[i][j] = true if substring s[i..j] is a palindrome
//base case 1: every single character (length 1) is a palindrome
//base case 2: length-2 substrings are palindromes if both characters match
//general case (length >= 3): s[i..j] is a palindrome if s[i] === s[j] AND the inner
//substring s[i+1..j-1] is also a palindrome (dp[i+1][j-1])
var countSubstrings = function(s) {
    
    let n= s.length;
    let ansCount=0;//to count the substring is palindrome or not
    //2d array
    let dp = Array(n).fill(null).map(() => Array(n).fill(false));//otherwise we can use normal nested for loop to make 2d arrya


    //base case
    //case-1 for 1 length of substring we have palindrome always true
    for(let i=0; i<n; i++){
        dp[i][i] = true;
        ansCount++;
    }
    //case-2 for length of substring 2 , if we have same char then palindrome
    for(let i=0; i<n-1; i++){
        if(s[i] === s[i+1]){
            dp[i][i+1] = true;
            ansCount++;//palinfrom found
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
                ansCount++;
            }
        }
    }
    return ansCount;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};