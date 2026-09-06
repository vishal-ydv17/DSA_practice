/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let expected= [...heights].sort((a,b)=>a-b);//make a copy of heights then sort it

    let count=0;

    for(let i=0; i<heights.length; i++){
        
        if(heights[i] !== expected[i]){
            count++;
        }
    }
    return count;
};
console.log(heightChecker([1,1,4,2,1,3])); //3
console.log(heightChecker([5,1,2,3,4])); //5