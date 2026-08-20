/**
 * @param {string} s
 * @return {number}
 */
//LOGIC-O(n)-Use a sliding window [i, j] and a map of each characters last-seen index
//expand j one step at a time whenever the new character is a duplicate inside the current 
//window jump i to just past that duplicates last position (shrinking from the left) instead
// of resetting — this keeps the whole scan O(n) since each pointer only moves forward never backward
var lengthOfLongestSubstring = function(s) {
    let i=0;// left edge of the window
    let map={};// stores last seen index of each character
    let maxWS=0;//max window size

    // j = right edge of the window, expands every step
    for(let j=0; j<s.length; j++){
        // if current char was seen before AND that occurrence is inside our current window
        if(map[s[j]] != undefined && map[s[j]]>=i){
            i= map[s[j]]+1;// shrink window: jump from left edge past the duplicate
        }
        //when char is not in map then store j index with key as char 
        map[s[j]]=j;
        let currWS= j-i+1;//finalW_index - initialW_index +1(as we start from 0 index then add 1)
        maxWS= Math.max(maxWS, currWS);
    }
    return maxWS;
};