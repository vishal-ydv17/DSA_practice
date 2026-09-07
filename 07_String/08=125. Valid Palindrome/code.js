/**
 * @param {string} s
 * @return {boolean}
 */
//sol-1 (O(1))-optimized(two poiter approach)
var isPalindrome = function(s) {
    let str= s.toLowerCase();
    let left=0;
    let right=str.length-1;
    while(left<right){
        //keep letters and numbers both as given in Q [a-z0-9]
        while(left<right && !str[left].match(/[a-z0-9]/)){//skip if till left char is not valid
            left++;
        }
        while(left<right && !str[right].match(/[a-z0-9]/)){//skip till right char is not valid
            right--;
        }
        if(str[left] != str[right]){//return false if both left and right char do not match
            return false;
        }
        left++;//if not above move then check next char
        right--;
    }
    return true;
}

// //sol-2 (O(n))-Brute force
// var isPalindrome = function(s) {
    
//     let string= s.toLowerCase();
//     let filteredString= "";
//     let reverseString= "";
//     //convert string to which contains only characters no space or other than char
//     for(let char of string){
//         //[a-z] match either a or b or c or d ......or z  and / mean start and end of regex
//         if(char.match(/[a-z0-9]/)){keep letters and numbers both as given in Q
//             filteredString = filteredString + char;//stores char at right
//             reverseString = char + reverseString;//stores char at left side means in reversed 
//         }
//     }
//     return filteredString===reverseString;
// };

// //sol-3 (O(n))
// var isPalindrome = function(s) {
    
//     let string= s.toLowerCase();
//     let filteredString= "";

//     for(let char of string){
//         if(char.match(/[a-z0-9]/)){keep letters and numbers both as given in Q
//             filteredString = filteredString + char;
//         }
//     }
//     let reverseString= filteredString.split("").reverse().join("");
//     return filteredString===reverseString;
// }