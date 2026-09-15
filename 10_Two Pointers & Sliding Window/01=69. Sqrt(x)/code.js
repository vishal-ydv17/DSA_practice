// /**
//  * @param {number} x
//  * @return {number}
//  */
// //sol-brute force (O(n^2))
// //so we can use linear search coz we can go one by one(use for loop form 2 to x) and 
// //choose 1 no then square it if it is equal to x then return else we will return 1 
// //lessesr value than that
// var mySqrt = function(x) {
//     //dont use pow
//     //return Math.floor(Math.pow(x,0.5));
//     //or

//     if(x < 2) return x;//edge case

//     for(let i=2; i<x; i++){
        
//         if(i*i===x){
//             return i;
//         }
//         else if(i*i > x){
//             return Math.floor(i-1);
//         }
//     }
//     return -1;//no sqrt found
// };


// //sol-2 (binary search) O(nlog n)
// var mySqrt = function(x) {

//     if(x<2) return x;

//     let l=2;
//     let r=x;

//     while(l<=r){
//         let mid = Math.floor((l+r)/2);//in js it gives decimal so we floor it

//         if(mid*mid===x){//or mid**===x
//             return mid;
//         }
//         else if(x < mid*mid){
//             r = mid-1;
//         }
//         else{
//             l = mid+1;
//         }
//     }
//     return r;//note if x id perfect sq then return mid else r will be most closest to sqrt
// }


//sol-3 (more optimized binary search)
//LOGIC- we shouldnt do searching from 2 to x but 2 to x/2 coz as we know in maths 
//that sq root of a x(number) can never be greater than x/2 that is 1 optimization we can do 
var mySqrt = function(x) {

    if(x<2) return x;

    let l=2;
    let r=Math.floor(x/2);//floor it cox x may not be perfectly div by 2

    while(l<=r){
        //in js this line will not go out of boudes but in other languages do so we 
        //need to define variable like int, float, double, long long we l+r will become too large but we can write that same line as
        // l + (r-l)/2    same as below
        let mid = Math.floor((l+r)/2);//in js it gives decimal so we floor it

        if(mid*mid===x){//or mid**===x
            return mid;
        }
        else if(x < mid*mid){
            r = mid-1;
        }
        else{
            l = mid+1;
        }
    }
    return r;//note if x id perfect sq then return mid else r will be most closest to sqrt
}