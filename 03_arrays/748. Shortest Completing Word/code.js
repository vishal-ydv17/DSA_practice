/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 //logic= store liscense plate array char in lpMap, now similarly store each word char to wordMap from words array and now use both maps to check they fullfill the questions conditions 
var shortestCompletingWord = function(licensePlate, words) {
    
    let licensePlateLower= licensePlate.toLowerCase();//string
    let lpMap= new Map();

    for(let char of licensePlateLower){
        
        if (char >= 'a' && char <= 'z') {
            lpMap.set(char, (lpMap.get(char) || 0) + 1);
        }
    }

    let result = null; //store the shortest valid word
    let minLength = Infinity; //to track the minimum length
   
    for(let word of words){
        
        let wordMap= new Map();
        let wordLower= word.toLowerCase();

        for(let char of wordLower){

            if (char >= 'a' && char <= 'z') {
                wordMap.set(char, (wordMap.get(char) || 0) + 1);
            }
        }
        //check if word contains all letters from licensePlate
        let isValid= true;
        for (let [char, freq] of lpMap) {

            if (!wordMap.has(char) || wordMap.get(char) < freq) {
                isValid = false;
                break;
            }
        }

        //if valid AND shorter than current result then we update result with new word
        if (isValid && word.length < minLength) {
            result = word;
            minLength = word.length;
        }
        
    }
    return result;

};
console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"])); //"steps"
console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"])); //"pest"    