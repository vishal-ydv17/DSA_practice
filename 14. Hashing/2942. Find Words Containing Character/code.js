/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    let ans=[];
    for(let i=0; i<words.length; i++){

        // if(words[i].includes(x)){//we can use .includes method to find the character in JS
        //     ans.push(i)
        // }
        //or
        for(let j=0; j<words[i].length;j++){
            if(words[i][j]==x){
                ans.push(i);
                break;//when we found character in given i so do not check further in that imove to next i
            }
        }
    }
    return ans;
};