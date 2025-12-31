/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    let alienOrder= new Map();

    for(let i=0; i<order.length; i++){
        alienOrder.set(order[i], i);//key-val pair
    }

    for(let r=0; r<words.length-1; r++){//row
        
        let word1= words[r];
        let word2= words[r+1];
        let foundDifference = false;
        let minlength = Math.min(word1.length, word2.length);

        for(let c=0; c<minlength ;c++){//col

            let char1=words[r][c];
            let char2=words[r+1][c]

            if(char1 !== char2){//not same char so outside this loop we have same char
            
                if(alienOrder.get(char1)>alienOrder.get(char2)) {
                    return false;
                }
                foundDifference = true;
                break;//char1<char2
            }
        }
        // all char of word1 or word2 are same so check length of word1 and word2
        if (!foundDifference && word1.length > word2.length) {
            return false;
        }
    }
    
    return true;
};
console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));//true
console.log(isAlienSorted( ["word","world","row"], "worldabcefghijkmnpqstuvxyz"));//false
console.log(isAlienSorted( ["apple","app"], "abcdefghijklmnopqrstuvwxyz"));//false