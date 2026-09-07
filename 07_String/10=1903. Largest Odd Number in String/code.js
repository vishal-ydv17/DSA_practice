/**
 * @param {string} num
 * @return {string}
 */
// Logic: scan left to right and every time we find an odd digit at index i
// take the prefix num[0..i] (this drops any trailing even digits after the last odd one)
// the last odd digit found gives the longest valid prefix which is the largest odd number possible
var largestOddNumber = function(num) {
    
    let largestOdd="";
    for(let i=0; i<num.length; i++){
        
        if(num[i]%2 != 0){
            largestOdd = num.slice(0, i+1);//keep prefix ending at this odd digit
        }
    }
    return largestOdd;
};
