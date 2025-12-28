/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {

    let i=0;//used this to check each element of arr
    let n = arr.length;

    if(n<=2) return false;//edge case minimum 3 elemnt need

    while(i<n-1 && arr[i] < arr[i+1]){//check increasing
        i++;
    }
    //check if peak is not start or end of arr
    if(i==0 || i==n-1) return false;

    while(i<n-1 && arr[i]>arr[i+1]){//check decreasing
        i++;
    }

    return n-1==i; //if n-1==i return true else false
};
console.log(validMountainArray([0,3,2,1]));//true
console.log(validMountainArray([2,1]));//false
console.log(validMountainArray([3,5,5]));//false