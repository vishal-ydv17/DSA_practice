<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// n.log n + O(n.2^n)= O(n.2^n)    ignore nlog n if n is very large
//LOGIC-sort nums first so identical values sit next to each other then build subsets by 
//picking numbers in order like standard subsets and to avoid duplicate subsets skip a number
// if its the same as the previous one and its not the first choice at the 
//current recursion level (i > start).
var subsetsWithDup = function(nums) {
    
    let ans=[];
    //O(n.log n)
    nums.sort((a,b)=>a-b);//sort so that duplicate elemnt become adjacent ans we skip 1 iteration 

    var backtrack=(path, start)=>{
        ans.push([...path]);
        for(let i=start; i<nums.length; i++){
            //skip the loop if in nums we have same adjescent elemnt after sort
            if(i>start && nums[i]===nums[i-1]){
                continue;//only chack if i>start coz if we are at 0th index then we can not acess previous index
            }

            path.push(nums[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([], 0);
    return ans;
=======
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// n.log n + O(n.2^n)= O(n.2^n)    ignore nlog n if n is very large
//LOGIC-sort nums first so identical values sit next to each other then build subsets by 
//picking numbers in order like standard subsets and to avoid duplicate subsets skip a number
// if its the same as the previous one and its not the first choice at the 
//current recursion level (i > start).
var subsetsWithDup = function(nums) {
    
    let ans=[];
    //O(n.log n)
    nums.sort((a,b)=>a-b);//sort so that duplicate elemnt become adjacent ans we skip 1 iteration 

    var backtrack=(path, start)=>{
        ans.push([...path]);
        for(let i=start; i<nums.length; i++){
            //skip the loop if in nums we have same adjescent elemnt after sort
            if(i>start && nums[i]===nums[i-1]){
                continue;//only chack if i>start coz if we are at 0th index then we can not acess previous index
            }

            path.push(nums[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([], 0);
    return ans;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};