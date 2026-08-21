/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// n.O(2^n)
//LOGIC-at every recursive call save a copy of the current path as one valid subset
//now use the start and iterate over nums then add to path
//then call backtrack and then remove that curr nums[i] form path
//Note- what i understand is that we take out 1 elemnt from nums then push to path
//then call backtrack then pop from the path and for nect ieration (remaining element) we agian repeat 
var subsets = function(nums) {
    let ans=[];

    var backtrack= (path, start)=>{
        ans.push([...path]);// record a COPY of the current subset (path) as-is
        // try adding each remaining number (from 'start' onward) to path
        for(let i=start; i<nums.length;i++){

            path.push(nums[i]);//note include nums[i] in the current subset not in ans
            backtrack(path, i+1);//add start+1 coz we do not want any duplicate 
            path.pop();//after calling backtrack remove curr nums[i]
        }
    }
    backtrack([], 0);
    return ans;
};