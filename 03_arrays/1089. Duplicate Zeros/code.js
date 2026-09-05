var duplicateZeros = function(arr) {

    let nums=[];

    for(let i=0; i<arr.length; i++){

        nums.push(arr[i]);
        
        if(arr[i]==0){
            nums.push(0);
        }
    }

    for(let j=0; j<arr.length; j++){

        arr[j] = nums[j];
    }

}
console.log(duplicateZeros([1,0,2,3,0,4,5,0])); //[1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1,2,3])); //[1,2,3]


// METHOD- 2
// var duplicateZeros = function(arr) {
//     const n = arr.length;
    
//     for (let i = 0; i < n; i++) {
//         if (arr[i] === 0) {
//             //shift elements to the right from last
//             //all values from i to last is shifted mean we automatically copy previous 0 after we found 0 no need to add 0 explicitely
//             for (let j = n - 1; j > i; j--) {
//                 arr[j] = arr[j - 1];
//             }
//             i++; //skip the duplicated zero
//         }
//     }
// };