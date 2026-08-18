/**
 * @param {string} s
 * @return {number}
 */
//LOGIC- store the string in in map then make a vowels array
//now iterate over each char of string and check from the map if that which character
//vowel is max or which char consonant is max frequency
var maxFreqSum = function(s) {

    let myMap= new Map();

    for(let num of s){//add all s character in map
        if(!myMap[num]){//if there is no key then add one and increase count
            myMap[num]=1;
        }
        else{
            myMap[num]++;//if key is already present then increase count
        }
    }

    let vowels= ['a', 'e', 'i', 'o','u'];
    let maxVowelFreq=0;
    let maxConsonantFreq=0;

    for(let num of s){

        if(vowels.includes(num) && myMap[num]>maxVowelFreq){//for vowels
            maxVowelFreq= myMap[num];
        }
        if(!vowels.includes(num) && myMap[num]>maxConsonantFreq){//for consonants
            maxConsonantFreq= myMap[num];
        }
    }
    return maxVowelFreq + maxConsonantFreq;
};