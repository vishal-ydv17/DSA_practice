/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    arr.sort((a,b)=>a-b);

    let minDiff= Infinity;

    for(let i=0; i<arr.length-1; i++){

        let temp= arr[i+1]-arr[i];

        minDiff= Math.min(minDiff, temp);
    }

    let result=[];

    for(let i=0; i<arr.length-1; i++){

        if(arr[i+1]-arr[i] == minDiff){

            result.push([arr[i],arr[i+1]]);//push in form of arr eg: [arr[i], arr[i+1]] = [1,2]
        }
    }
    return result;
};
console.log(minimumAbsDifference([4,2,1,3])); //[[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1,3,6,10,15])); //[[1,3]]
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27])); //[[-14,-10],[19,23],[23,27]]