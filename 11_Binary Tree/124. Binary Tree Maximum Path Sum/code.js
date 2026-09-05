<<<<<<< HEAD
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//LOGIC-at every node pretend its the peak of a path (using both children) and check if that beats the best answer found so far — thats currMax vs maxSumPath
//but when reporting back to its actual parent a node can only offer one branch (left or right whichever is bigger) since a path cant not split in two directions and still continue upward as we need 1 sigle path 
var maxPathSum = function(root) {
    
    let maxSumPath= -Infinity;
    function traverse(curr){
        if(!curr) return 0;

        let maxLeft= Math.max(0, traverse(curr.left));//return 0 if -ve no 
        let maxRight= Math.max(0, traverse(curr.right));

        //currMax →best path if I'm the peak" → compared into maxSumPath (the real, global answer)
        let currMax= curr.val + maxLeft + maxRight;//it computes the bend candidate at every single node
        maxSumPath= Math.max(currMax, maxSumPath);//naturally pick whichever one turns out largest across the whole tree till curr node

        //best single branch I can hand to my real parent if curr dont have paret
        return curr.val + Math.max(maxLeft, maxRight);//return this if curr has to return to its parent the best path
    }
    traverse(root);
    return maxSumPath
=======
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//LOGIC-at every node pretend its the peak of a path (using both children) and check if that beats the best answer found so far — thats currMax vs maxSumPath
//but when reporting back to its actual parent a node can only offer one branch (left or right whichever is bigger) since a path cant not split in two directions and still continue upward as we need 1 sigle path 
var maxPathSum = function(root) {
    
    let maxSumPath= -Infinity;
    function traverse(curr){
        if(!curr) return 0;

        let maxLeft= Math.max(0, traverse(curr.left));//return 0 if -ve no 
        let maxRight= Math.max(0, traverse(curr.right));

        //currMax →best path if I'm the peak" → compared into maxSumPath (the real, global answer)
        let currMax= curr.val + maxLeft + maxRight;//it computes the bend candidate at every single node
        maxSumPath= Math.max(currMax, maxSumPath);//naturally pick whichever one turns out largest across the whole tree till curr node

        //best single branch I can hand to my real parent if curr dont have paret
        return curr.val + Math.max(maxLeft, maxRight);//return this if curr has to return to its parent the best path
    }
    traverse(root);
    return maxSumPath
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};