// //linear search
// //note- compiler directly compares the character we do not require it to convert to ASCII value

// var nextGreatestLetter = function(letters, target) {

//     for(let i =0; i<letters.length; i++){

//         if(target < letters[i]){
//             return letters[i];
//         }
//     }
//     return letters[0];
// };


//binary search sol
var nextGreatestLetter = function(letters, target) {

    let left = 0;
    let right = letters.length-1;

    if(target >= letters[right]) return letters[0];

    while(left<=right){//in binary search it always returns an index not element

        let mid = Math.floor((left+right)/2);


        if(letters[mid] <= target){
            left =mid+1;// Current element is not >= target, search right half
        }
        else{
            right=mid-1;// Current element is > target, but might not be the smallest so continue searching left half
        }
    }
    return letters[left];// After loop left points to the first element > target
}
console.log(nextGreatestLetter(["c","f","j"], "a")); // Output: "c"
console.log(nextGreatestLetter(["c","f","j"], "c")); // Output: "f"