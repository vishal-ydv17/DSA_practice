<<<<<<< HEAD
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//LOGIC-sort candidates first so duplicates are adjacent and for each element from start
//onward then skip it if it repeats the previous sibling choice at the same 
//level (i > start check — prevents duplicate combinations in the output) and 
//recurse with i + 1 (not i) since each element can only be used once here
//save the path when remainingSum hits exactly 0 then abandon the branch once it goes negative
var combinationSum2 = function(candidates, target) {
    
    let ans=[];
    candidates.sort((a,b)=>a-b);
    var backtrack= (remainingSum, path, start)=>{
        //base case
        if(remainingSum===0){
            ans.push([...path]);
            return;//if solution path found then backtarcj now check new path
        }
        if(remainingSum < 0) return ;//remainingSum goes negative then dead end so stop exploring

        for(let i=start; i<candidates.length; i++){
            // skip duplicate VALUES at the same recursion level
            if(i>start && candidates[i]==candidates[i-1]){
                continue;//i>start coz if we talk aboutt 1st iteration start=0 then we use i=start so each time i>start not i<start
            }
            path.push(candidates[i]);
            backtrack(remainingSum-candidates[i], path, i+1);//as we do not want duplicates
            path.pop();
        }
    }
    backtrack(target, [], 0);
    return ans;
=======
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//LOGIC-sort candidates first so duplicates are adjacent and for each element from start
//onward then skip it if it repeats the previous sibling choice at the same 
//level (i > start check — prevents duplicate combinations in the output) and 
//recurse with i + 1 (not i) since each element can only be used once here
//save the path when remainingSum hits exactly 0 then abandon the branch once it goes negative
var combinationSum2 = function(candidates, target) {
    
    let ans=[];
    candidates.sort((a,b)=>a-b);
    var backtrack= (remainingSum, path, start)=>{
        //base case
        if(remainingSum===0){
            ans.push([...path]);
            return;//if solution path found then backtarcj now check new path
        }
        if(remainingSum < 0) return ;//remainingSum goes negative then dead end so stop exploring

        for(let i=start; i<candidates.length; i++){
            // skip duplicate VALUES at the same recursion level
            if(i>start && candidates[i]==candidates[i-1]){
                continue;//i>start coz if we talk aboutt 1st iteration start=0 then we use i=start so each time i>start not i<start
            }
            path.push(candidates[i]);
            backtrack(remainingSum-candidates[i], path, i+1);//as we do not want duplicates
            path.pop();
        }
    }
    backtrack(target, [], 0);
    return ans;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};