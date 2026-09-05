/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
//LOGIC-we are given the fixed digit pool 1–9 (each digit usable at most once) and we need to 
//find every combination of exactly length k whose digits sum to exactly n. At each step we pick
//a digit strictly greater than the last one picked (by start = i+1) — this guarantees no digit
//repeats and no combination gets counted twice in a different order and We stop a branch early
//either as a success (when path.length === k and remainingSum === 0 save it) or as a dead end
//(when remainingSum goes negative or path is already full of k digits but the sum still isnt 0)
var combinationSum3 = function(k, n) {
    
    let ans=[];
    var backtrack=(remainingSum, path, start)=>{
        //push valid combination:used exactly k digits AND they sum exactly to n
        if(remainingSum===0 && path.length===k){
            ans.push([...path]);
            return;
        }
        if(remainingSum < 0 || path.length===k){
            return;
        }
        //note candidate pool is always fixed: digits 1 through 9 give in Q
        for(let i=start; i<=9; i++){

            path.push(i);
            backtrack(remainingSum-i, path, i+1);// recurse with start = i+1:
                                                // prevents reusing digit i again,
                                                // and forces digits to stay in increasing
                                                // order so the same combination can't
                                                // appear twice in a different arrangement
            path.pop();
        }
    }
    backtrack(n, [], 1);//start at 1 as valid digits range 1-9
    return ans;
};