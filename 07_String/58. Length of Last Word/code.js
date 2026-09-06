/**
 * @param {string} s
 * @return {number}
 */
//sol-1(using js build functions)
// Logic: trim leading/trailing spaces, split the string into words by spaces,
// then return the length of the last element in that array (the last word).
var lengthOfLastWord = function(s) {

    s = s.trim();//removed the empty spaces form start and end
    let arr= s.split(" ");//splits s into an array of words wherever spaces are found
    return arr[arr.length-1].length;//return the length of the last words
}


// sol-2(using 2 loops)
// Logic: scan the string from the right/end skipping all spaces first. 
// once we hit a non-space character count backward through it until you hit 
// a space (or start of string) that count is the length of the last word
// and eturn immediately once that word is done counting so earlier words are never touched
var lengthOfLastWord = function(s) {
    
    let n= s.length;
    let count=0;

    for(let i=n-1; i>=0;i--){

        if(s[i]==" ") continue;//skip the empty space if found

        if(s[i] != " "){//if empty space not found then start counting
            while(s[i] != " " && i>=0){
                count++;
                i--;
            }
            break;//stop immediately once the last word is fully counted
        }
    }
    return count;
};

// //sol-3(using only 1 loop)
// var lengthOfLastWord = function(s) {
    
//     let n= s.length;
//     let count=0;

//     for(let i=n-1; i>=0;i--){

//         if(s[i]==" ") continue;//skip the empty space if found

//         if(s[i] != " "){//if empty space not found then start counting
//             count++;
//             //also check if next element is not string and is empty then break
//             if(s[i-1] ==" ") break;
//         }
//     }
//     return count;
// };

// //sol-4(using while loop)
// var lengthOfLastWord = function(s) {
//     let n= s.length-1
//     let count=0;
//     //remove the empty spaces
//     while(n>=0){
//         if(s[n] == " "){
//             n--;
//         }
//         else{
//             break;//stop immediatly if non empty space found
//         }
//     }
//     //after removeing spaces lets count the last word lengh
//     while(n>=0){
//         if(s[n] != " "){//count till non spaces are there
//             count++;
//         }
//         else{
//             break;//stop immediatly if empty space found
//         }
//         n--;
//     }

//     return count;
// }

// //sol-5(using while loop)-write while loop in different way
// var lengthOfLastWord = function(s) {
//     let n = s.length - 1;
//     let count = 0;

//     // remove the trailing spaces
//     while (n >= 0 && s[n] === " ") {
//         n--;
//     }

//     // after removing spaces lets count the last word length
//     while (n >= 0 && s[n] !== " ") {
//         count++;
//         n--;
//     }

//     return count;
// }