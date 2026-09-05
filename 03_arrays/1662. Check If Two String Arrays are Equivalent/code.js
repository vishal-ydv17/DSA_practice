
var arrayStringsAreEqual = function(word1, word2) {
    
    //use '' as seperation as in default mode it will join all eg:commas and everything
    let str1= word1.join('');
    let str2= word2.join('');


    return str1 == str2;//if both equal return true else false
};
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); //true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])); //false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])); //true

// //method-2 (using manual concatanation)
// var arrayStringsAreEqual = function(word1, word2) {
    
//     let str1 = "";
//     let str2 = "";

//     for(let word of word1) {
//         str1 += word;
//     }

//     for(let word of word2) {
//         str2 += word;
//     }

//     return str1 === str2;
// };