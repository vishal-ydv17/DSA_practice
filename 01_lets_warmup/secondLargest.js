<<<<<<< HEAD
function secondLargest(arr) {
    let firstHigh= -Infinity; // to store the largest number
    let secondHigh= -Infinity; // to store the second largest number

    if(arr.length < 2) return null; // edge case: if array has less than 2 elements

    for (let i = 0; i < arr.length; i++) {
        let current= arr[i];
        if(current > firstHigh){
            secondHigh= firstHigh; // update second largest
            firstHigh= current; // update largest
        }
        else if(current > secondHigh && current < firstHigh){
            secondHigh= current; // update second largest only
        }
    }
    
    return secondHigh;
}
=======
function secondLargest(arr) {
    let firstHigh= -Infinity; // to store the largest number
    let secondHigh= -Infinity; // to store the second largest number

    if(arr.length < 2) return null; // edge case: if array has less than 2 elements

    for (let i = 0; i < arr.length; i++) {
        let current= arr[i];
        if(current > firstHigh){
            secondHigh= firstHigh; // update second largest
            firstHigh= current; // update largest
        }
        else if(current > secondHigh && current < firstHigh){
            secondHigh= current; // update second largest only
        }
    }
    
    return secondHigh;
}
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
console.log(secondLargest([4, 2, -4, -6, 0, 18, -18]));