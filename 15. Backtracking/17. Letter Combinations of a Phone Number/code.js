/**
 * @param {string} digits
 * @return {string[]}
 */
//LOGIC-each digit gets its own "box" and each boxs choices come from that digits own 
//letter group — nothing shared or depleted across boxes. At each recursion depth fill 
//the next box by trying every letter in its group fresh (not filtering based on prior picks) 
//then move to the next box (start+1) now once all boxes are filled (start === digits.length)
///path is one complete combination — join it into a string and save it
var letterCombinations = function(digits) {
    if (digits.length == 0) return [];//edge case: no digits → no combinations possible

    let letters = {
        2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno",
        7: "pqrs", 8: "tuv", 9: "wxyz"
    };
    
    let ans = [];

    var backtrack = (path, start) => {
        // base case: start has advanced past every digit 
        // path now holds one letter per digit eg: a complete combination
        if (start === digits.length) {//or path.length === digits.length
            ans.push(path.join(""));// join array of chars into a string eg: ['a','d'] → "ad"
            return;
        }

        // look up the letter-group for the digit at this position (fresh lookup every recursion depth)
        let choices = letters[digits[start]];// eg: start=0, digits[0]='2' → choices = "abc"

        for (let i = 0; i < choices.length; i++) {
            path.push(choices[i]);// choose one letter from this digit's group
            backtrack(path, start + 1);   
            path.pop();// backtrack remove it before trying the next letter
        }
    }
    backtrack([], 0);
    return ans;
};