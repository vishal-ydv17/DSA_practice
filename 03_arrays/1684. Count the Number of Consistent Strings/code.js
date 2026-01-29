//LOGIC- assume the words as a matrix as each string behaves like a array in js
//so now we will will solve it like a matrix 
// ["ad",
//  "bd",
//  "aaab",
//  "baa",
//  "badab"]
//so now acess each row element then check weather it includes in allowed or not
//use the count to track and break in inconsistent found in row and move to next row/string
var countConsistentStrings = function(allowed, words) {
    
    let count=0;//inconsistence count

    for(let r=0; r<words.length; r++){

        for(let c=0; c<words[r].length; c++){//keep the length of row dynamic by r

            if(!allowed.includes(words[r][c])){

                count++;
                break;
            }
        }
    }

    return words.length - count;
};
console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])); //2
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])); //7
console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])); //4