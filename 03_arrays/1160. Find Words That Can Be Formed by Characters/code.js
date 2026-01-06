/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    let charMap= new Map();
    let totalLength=0;

    for(let char of chars){

        charMap.set(char, (charMap.get(char) || 0) +1);
    }

    for(let word of words){

        let tempMap= new Map(charMap);//use copy of charMap each time othewise you will modify original charMap 
        let canForm= true;

        for(let i=0;i<word.length; i++){//acessing each char of string word of array words[]

            if(tempMap.has(word[i]) && tempMap.get(word[i]) >0){
                
                tempMap.set(word[i], tempMap.get(word[i]) -1);
            }
            else{
                canForm = false;
                break;
            }
        }
        if(canForm == true){
                
            totalLength += word.length;//keeps total lengths of word formed by char
        }
    }
    return totalLength;
};
console.log(countCharacters(["cat","bt","hat","tree"], "atach")); //6
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr")); //10