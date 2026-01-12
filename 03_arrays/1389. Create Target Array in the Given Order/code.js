//LOGIC- .slice() and .splice() are two diff methods 
//array.splice(startIndex, deleteCount, item1, item2, ...);//syntax
//if startIndex is negative indices then it count back from the end of the array (-1 is the last element)
//deleteCount is hhe number of elements to remove starting from startIndex
//item1, item2, ... mean new elements to add to the array in beginning at startIndex. If no elements are specified then splice() will only remove elements
var createTargetArray = function(nums, index) {
    
    let target=[];

    for(let i=0; i<index.length; i++){

        let target_index= index[i];
        let target_val= nums[i];

        target.splice(target_index, 0, target_val);

    }

    return target;
};
console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]));//[0,4,1,3,2]
console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]));//[0,1,2,3,4]



// //without splice
// var createTargetArray = function(nums, index) {
//     let target = [];
    
//     for(let i = 0; i < index.length; i++) {
//         let pos = index[i];
//         let value = nums[i];
        
//         //if position is at the end just push
//         if(pos >= target.length) {
//             target.push(value);
//         } else {
//             //shift elements to the right to make space
//             target.length = target.length + 1; //increase array size
            
//             //move elements one position to the right
//             for(let j = target.length - 1; j > pos; j--) {
//                 target[j] = target[j - 1];
//             }
            
//             //insert the new value at the correct position
//             target[pos] = value;
//         }
//     }
    
//     return target;
// };
