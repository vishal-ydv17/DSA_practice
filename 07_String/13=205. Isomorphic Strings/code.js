/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// LOGIC: map each character of s to t and t to s using two maps
// this ensures every character has a unique and consistent mapping in both directions
// if any character maps to a different character the strings are not isomorphic
var isIsomorphic = function(s, t) {
    
    let stMap= new Map();// maps a character from s -> its corresponding character in t
    let tsMap= new Map();// maps a character from t -> its corresponding character in s
    for(let i=0; i<s.length; i++){
        let sChar= s[i];
        let tChar= t[i];
        // case 1: neither character has been seen before —
        // safe to create a brand new mapping in both directions
        if(!stMap.has(sChar) && !tsMap.has(tChar)){//
            stMap.set(sChar, tChar);
            tsMap.set(tChar, sChar);
        }
        // case 2:sChar has been mapped before — make sure it still points to the same tChar as last time.
        else if(stMap.get(sChar) !==tChar) return false;
        //Case 3: tChar has been mapped before — make sure it's still coming from the same sChar as last time (so no two different s characters share one t character).
        else if(tsMap.get(tChar) !==sChar) return false;
    }
    return true;
};