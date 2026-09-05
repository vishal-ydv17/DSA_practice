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
//LOGIC-node is good if its value is ≥ the maximum value on the path from the root to that node
//so carry the running max down through recursion and compare each node against it not just with its 
//parent but rather check along the whole path thats why we use maxSoFar along the path
var goodNodes = function(root) {

    if(!root) return 0;
    let count=0;

    function traverse(curr, maxSoFar){
        if(!curr) return null;
        
        if(curr.val>=maxSoFar) count++;

        let newMax= Math.max(maxSoFar, curr.val);//update the running max for children

        traverse(curr.left, newMax);//call left with new max
        traverse(curr.right, newMax);
    }
    traverse(root, root.val);//root is always good so we send maxSoFar with root.val
    return count;
};
