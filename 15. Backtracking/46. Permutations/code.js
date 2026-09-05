/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// n.O(n!)
//LOGIC-unlike combinations permutations care about order so at every position try every
// unused number (checked though path.includes) rather than only numbers after a start index
// once path holds all n numbers push in ans then backtrack to try other orderings/arrangement
var permute = function(nums) {
    let ans=[];
    //note we want duplcate so we dont care about the start indices we just want max rearrangement  
    var backtrack=(path)=>{

        // base case: path has as many numbers as nums → its a complete permutation
        //but we push in ans of only length of 3 
        if(path.length==nums.length){
            ans.push([...path]);
            return;
        }

        for(let i=0; i<nums.length; i++){
            //only use nums[i] if it has not already been placed in the current path
            //coz we are just rearranging existing element so dont push in path if it alreaady includes
            if(!path.includes(nums[i])){
                path.push(nums[i]);
                backtrack(path);
                path.pop();
            }
        }
    }
    backtrack([]);
    return ans;
};
//note-1-in permutation(rearrangement) order is important eg: AB and BA are two different options

//note-2-in Ccombination (Selection)Order is not important eg: AB and BA are the same option