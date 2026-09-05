//brute force
var checkIfExist = function(arr) {
    
    for(let i=0; i<arr.length; i++){
        
        for(let j =0; j<arr.length; j++){

            if(i != j && arr[i] == 2*arr[j]){
                return true;
            }
        }
    }

    return false;
};
console.log(checkIfExist([10,2,5,3]));//true
console.log(checkIfExist([7,1,14,11]));//false
console.log(checkIfExist([3,1,7,11]));//false

// //method2-efficient
// var checkIfExist = function(arr) {
    
//     let set= new Set();

//     for(let num of arr){
//         //check if we have num*2 or num/2 in set or not
//         if(set.has(2*num) || (set.has(num/2) && num%2==0)){
//             return true;
//         }
//         //if set does not have num then add that num
//         set.add(num);
//     }

//     return false;
// }
