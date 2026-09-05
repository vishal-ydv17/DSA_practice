// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// //sol-1 brute force (sliding window)- n.O(mlog m)-beacise of sorting mlog m
// //LOGIC-first sort the s1 then make window with s1 length on s2 then 
// //sort that window on s2 now check if s1 and sorted window is same
// var checkInclusion = function(s1, s2) {
    
//     let sortedS1= s1.split("").sort().join("");

//     for(let i=0; i<=s2.length-s1.length; i++){
        
//         let window= s2.slice(i, i+s1.length);
//         let sortedWindow= window.split("").sort().join("");

//         if(sortedWindow === sortedS1){
//             return true;
//         }
//     }
//     return false;
// };

//LOGIC-build a frequency count of s1 then slide a same-size window across s2 keeping a running 
//frequency count of the windows letters now at each step compare the two counts — if theyre ever 
//identical that window is a permutation of s1 so return true

//to slide efficiently (without rebuilding from scratch): remove the letter leaving the window (left side)
// and add the letter entering the window (right side)
var checkInclusion = function(s1, s2) {
    let hashS= new Array(26).fill(0);
    let hashW= new Array(26).fill(0);
    let a= 'a'.charCodeAt(0);//97 mean what is the char code of string at index 0 which is "a" itself 
    let window_length= s1.length;
    for(let i=0; i<window_length; i++){

        hashS[s1.charCodeAt(i) - a]++;//we have used s1 here to populate our map
        hashW[s2.charCodeAt(i) - a]++;//s2 has been used 
    } 

    let i=0;
    let j=s1.length-1;//last index of window

    while(j<s2.length){

        if(isHashSame(hashS, hashW)){//isHashSame function is written below
            return true;
        }
        else{//skip 1st char of s2 and move window 1 step ahead
            //remove left most char form curr window
            hashW[s2.charCodeAt(i)-a]--; //a=97 
            i++;//then move i
            j++
            hashW[s2.charCodeAt(j)-a]++;//now add new char form s2 to map to right most one that is j
        }
    }
    return false;
}
var isHashSame= function(hashS, hashW){

    for(let i=0; i<26; i++){//or i<hashS.length or hashW.length
        
        if(hashS[i] != hashW[i]){
            return false;
        }
    }
    return true;
}