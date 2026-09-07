// LOGIC-
// process the string in blocks of size 2k: reverse the first k chars of each block
// leave the next k chars untouched, then move to the next block
// even if fewer than k chars remain near the end, the swap still works correctly —
// out-of-bounds indices just extend the array with empty/undefined slots
// which get silently dropped when join("") is called at the end
var reverseStr = function(s, k) {
    
    s= s.split("");

    for(let x=0; x<s.length; x = x + 2*k){

        //to reverse we swap the first half with the second half
        let mid= Math.floor(k/2);
        for(let i=0; i<mid; i++){

            //swap
            [s[x+i], s[x + k-1 - i]] = [s[x + k-1 - i], s[x+i]];
            //for a normal swap (if there was no constraint of 2k, i.e reversing the WHOLE 
            // string in one go) then we just do:
            //  [s[i], s[k-1 - i]] = [s[k-1 - i], s[i]]; // normal swap
        }
    }
    return s.join("");
};