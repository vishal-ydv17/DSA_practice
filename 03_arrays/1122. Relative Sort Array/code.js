/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

    let result=[];
    let remaining=[];
    
    for(let a2 of arr2){//let push the element what matches

        for(let a1 of arr1){

            if(a1==a2) result.push(a1);
        }
    }
    
    //lets push elements whats not matches ot remaining
    for(let a1 of arr1){
        
        if(!arr2.includes(a1)) remaining.push(a1);
        
    }
    remaining.sort((a,b)=>a-b);

    result.push(...remaining);

    return result;
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])); //[2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6])); //[22,28,8,6,17,44]  