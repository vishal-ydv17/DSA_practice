//LOGIC- if we found any add element then at same time check for next 2 element of array if they are odd 
var threeConsecutiveOdds = function(arr) {

    for(let i=0; i<arr.length-2; i++){

        if(arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0){
            
            return true;
        }
    }

    return false;
};
console.log(threeConsecutiveOdds([2,6,4,1])); //false
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])); //true

//OR
// var threeConsecutiveOdds = function(arr) {

//     oddCount=0;

//     for(let i=0; i<arr.length; i++){

//         if(arr[i] % 2 != 0){

//             oddCount++;

//             if(oddCount==3) return true;
//         }
//         else{
//             oddCount=0;
//         }
//     }
//     return false;
// }
