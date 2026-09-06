var mostCommonWord = function(paragraph, banned) {
    
    //make lowercase and replace punctuation with spaces
    let normalized_word= paragraph.toLowerCase().replace(/[!?.,;']/g, ' ');
    //or use .match(/[a-z]+/g); method and then convert to words and g means global replaces all occurrences in whole string
    let words= normalized_word.split(/\s+/);//matches any sequence of one or more consecutive whitespace characters
    let bannedSet= new Set(banned);

    let freqMap= new Map();// or only write {};
    let maxFreq= 0;
    let result= '';

    for(let word of words){

        if(word=== '') continue;//this is Empty strings not empty space

        if(!bannedSet.has(word)){

            freqMap[word]= (freqMap[word] || 0) + 1;

            if(maxFreq<freqMap[word]){
                maxFreq= freqMap[word];
                result= word;
            }
        }
    }
    return result;
};
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));//"ball"
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));//"b"