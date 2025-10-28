function secondLargest(arr) {
    let firstHigh= -Infinity; // to store the largest number
    let secondHigh= -Infinity; // to store the second largest number

    for (let i = 0; i < arr.length; i++) {
        let current= arr[i];
        if(current > firstHigh){
            secondHigh= firstHigh; // update second largest
            firstHigh= current; // update largest
        }
    }
    
    return secondHigh;
}
console.log(secondLargest([4, 2, -4, -6, 0, 18, -18]));