<<<<<<< HEAD
// //sol-1
//  var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
//  }
//OR

// //sol-2
// var strStr = function(haystack, needle) {
//     //haystack.length-needle.length coz this is the last position where 
//     //my needle can start and still completely fit
//     //<= coz last position is valid and must be checked
//     for(let i=0; i<=haystack.length-needle.length; i++){

//         if(haystack.slice(i, i+needle.length) === needle){
//             return i;
//         }
//     }   
//     return -1;
// };
//OR

// sol-3 fixed-size window
// create a window of size needle.length in haystack
// compare each character of the window with needle
// if all characters match return the starting index
var strStr = function(haystack, needle) {
    //haystack.length-needle.length coz this is the last position where 
    //my needle can start and still completely fit
    //<= coz last position is valid and must be checked
    for(let i=0; i<=haystack.length-needle.length; i++){
        let j=0;//initialize it before so that after loop we can acess its value
        for(j=0; j<needle.length; j++){ // Compare each character of the current window with needle.
            if(haystack[i+j] != needle[j]){
                break;
            }
        }
        if(j==needle.length){//if j reached till length of needle that is ourwindow means we found 
            return i;
        }
    }
    return -1;
=======
// //sol-1
//  var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
//  }
//OR

// //sol-2
// var strStr = function(haystack, needle) {
//     //haystack.length-needle.length coz this is the last position where 
//     //my needle can start and still completely fit
//     //<= coz last position is valid and must be checked
//     for(let i=0; i<=haystack.length-needle.length; i++){

//         if(haystack.slice(i, i+needle.length) === needle){
//             return i;
//         }
//     }   
//     return -1;
// };
//OR

// sol-3 fixed-size window
// create a window of size needle.length in haystack
// compare each character of the window with needle
// if all characters match return the starting index
var strStr = function(haystack, needle) {
    //haystack.length-needle.length coz this is the last position where 
    //my needle can start and still completely fit
    //<= coz last position is valid and must be checked
    for(let i=0; i<=haystack.length-needle.length; i++){
        let j=0;//initialize it before so that after loop we can acess its value
        for(j=0; j<needle.length; j++){ // Compare each character of the current window with needle.
            if(haystack[i+j] != needle[j]){
                break;
            }
        }
        if(j==needle.length){//if j reached till length of needle that is ourwindow means we found 
            return i;
        }
    }
    return -1;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
}