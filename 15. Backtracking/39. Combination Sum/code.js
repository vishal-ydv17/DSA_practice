/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//LOGIC-for each element starting from start then add it to path and recurse on the reduced 
//target allowing the same element to repeat (pass i, not i+1) since duplicates are allowed
//if remainingSum hits 0 then save that path as an answer or if it goes negative stop exploring
//that branch (dead end) and backtrack to try the next element
var combinationSum = function(candidates, target) {
    
    let ans=[];
    var backtrack=(remainingSum, path, start)=>{

        if(remainingSum===0){
            ans.push([...path]);
            return;//if solution path found then backtarcj now check new path
        }
        if(remainingSum < 0) return;//remainingSum goes negative then dead end so stop exploring

        for(let i=start; i<candidates.length; i++){

            path.push(candidates[i]);
            backtrack(remainingSum-candidates[i], path, i);//dont write i+1 as as duplicate can form the make the remainingSum to 0
            path.pop();
        }
    }
    backtrack(target,[],0);
    return ans;
};