/**
 * @param {string[]} strs
 * @return {string}
 */
//LOGIC-use strs[0] as the reference string like for each position x check whether 
//every other string in strs has the same character at that position — if any string 
//differs or is shorter than x the common prefix ends there so return strs[0] sliced 
//up to x and only advance to the next character position once all strings have matched
//at the current one
var longestCommonPrefix = function(strs) {
    
    let x=0;
    while(x < strs[0].length){

        let char = strs[0][x];//we select the 1st word as a base to compare with other words

        //start with 1 as we have already select the 0th words as base
        for(let i=1; i<strs.length; i++){

            // if the current char doesn't match strs[i] at position x
            // OR strs[i] is too short to even have a character at position x
            // the common prefix ends here — return everything matched so far
            if(char != strs[i][x] || x == strs[i].length){
                return strs[0].substring(0, x);
            }
            
        }  
        //if char match across all words/strings then increase x and check next char match
        x++; 
    }
    return strs[0];//if char did not match then whole strs[0] is a common prefix
};