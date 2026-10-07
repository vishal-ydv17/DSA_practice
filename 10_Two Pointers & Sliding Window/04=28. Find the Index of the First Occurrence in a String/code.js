// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// //sol-1
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
//  }




// //sol-2
// var strStr = function(haystack, needle) {
//     //haystack.length-needle.length coz this is the last position where 
//     //my needle can start and still completely fit
//     //<= coz last position is valid and must be checked
//     for(let i=0; i<=haystack.length - needle.length; i++){

//         if(haystack.slice(i, i+needle.length) === needle){
//             return i;
//         }
//     }   
//     return -1;
// };




// // sol-3 fixed-size window
// // create a window of size needle.length in haystack
// // compare each character of the window with needle
// // if all characters match return the starting index
// var strStr = function(haystack, needle) {
//     //haystack.length-needle.length coz this is the last position where 
//     //my needle can start and still completely fit
//     //<= coz last position is valid and must be checked
//     for(let i=0; i<=haystack.length-needle.length; i++){
//         let j=0;//initialize it before so that after loop we can acess its value
//         for(j=0; j<needle.length; j++){ // Compare each character of the current window with needle.
//             if(haystack[i+j] != needle[j]){
//                 break;
//             }
//         }
//         if(j==needle.length){//if j reached till length of needle that is ourwindow means we found 
//             return i;
//         }
//     }
//     return -1;
// }






var strStr = function(haystack, needle) {

    let n=haystack.length;
    let m=needle.length;

    let lps=[0];//lowest prefix and suffix
    let i=0;
    let j=1;
    //make the lps on needle string
    while(j<m){
        if(needle[i] === needle[j]){
            lps[j] = i+1;
            i++;
            j++;
        }
        else{//needle[i] != needle[j]
            if(i==0){
                lps[j] =0;
                j++;
            }
            else{
                i =lps[i-1];//very imp consdition when you dry run you wil get this
            }
        }
    }

    //lets use the lps array and match the string
    i= j= 0;
    while(i<n){
        if(haystack[i] === needle[j]){
            i++;
            j++;
        }
        else{//haystack[i] != needle[j]
            if(j==0){
                i++;
            }
            else{
                j= lps[j-1];//very imp condition when you dry run you get this
            }
        }
        //after matching we have reached to the last of needle 
        //so will return the 1st index of haystack
        if(j===m){
            return i-m;
        }
    }
    return -1;//if string did not match
}