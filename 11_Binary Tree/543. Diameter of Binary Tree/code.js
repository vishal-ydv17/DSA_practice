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
// LOGIC:
// the maximum path may or may not pass through the root
// so at every node, calculate the path passing through that node
// and update maxDiameter
var diameterOfBinaryTree = function(root) {
    
    let maxDiameter=0
    function findHeight(curr){
        if(!curr) return 0;//edge case

        let leftSide=  findHeight(curr.left);
        let rightSide= findHeight(curr.right);

        let currHeight= leftSide + rightSide;//path passing through current node

        maxDiameter= Math.max(currHeight, maxDiameter);//update maxDiameter at each node
        
        return 1+ Math.max(leftSide, rightSide);//return height of current subtree
    }
    findHeight(root)
    return maxDiameter;
};