<<<<<<< HEAD
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// k.O(n! / k!.(n-k)!)  note- this formula is given for combination in maths in class 9
//LOGIC-in this we build combinations one number at a time using path
// always picking the next number strictly greater than the last chosen one to avoid 
//duplicate orderings now once path reaches length k then push in ans and backtrack to try other choices
var combine = function(n, k) {
    let ans=[];
    //note we dont want the duplicate thats why wee kepp track of start so each time we backtrack righ of start otherwise use path dont use start
    var backtrack= (path,start)=>{
        // base case: once path has k numbers its a complete combination
        if(path.length===k){
            ans.push([...path]);
            return;// stop exploring as we found of k length
        }
        // try every number from 'start' to n as the next element
        for(let i=start; i<=n; i++){

            path.push(i);
            //i+1 coz ensures increasing order → no duplicate combos like [1,2] and [2,1]
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([],1);//start from as we dont care for index in this case as n is from 1 to n
    return ans;
=======
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// k.O(n! / k!.(n-k)!)  note- this formula is given for combination in maths in class 9
//LOGIC-in this we build combinations one number at a time using path
// always picking the next number strictly greater than the last chosen one to avoid 
//duplicate orderings now once path reaches length k then push in ans and backtrack to try other choices
var combine = function(n, k) {
    let ans=[];
    //note we dont want the duplicate thats why wee kepp track of start so each time we backtrack righ of start otherwise use path dont use start
    var backtrack= (path,start)=>{
        // base case: once path has k numbers its a complete combination
        if(path.length===k){
            ans.push([...path]);
            return;// stop exploring as we found of k length
        }
        // try every number from 'start' to n as the next element
        for(let i=start; i<=n; i++){

            path.push(i);
            //i+1 coz ensures increasing order → no duplicate combos like [1,2] and [2,1]
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([],1);//start from as we dont care for index in this case as n is from 1 to n
    return ans;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};