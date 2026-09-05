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
 * @return {boolean}
 */
// LOGIC - Recursion
// for every node:
// find left subtree height
// find right subtree height
// check height difference
// check left and right subtree
var isBalanced = function(root) {
    
    let ans = true;

    function findHeight(curr){
        if(!curr) return true;

        let leftSide= findHeight(curr.left);
        let rightSide= findHeight(curr.right);

        if(Math.abs(leftSide-rightSide) >1){
            ans= false;//sore it in ans and do not return immediately
            //make sure we dont stop calculating the height when the tree is unbalanced
            //later we return ans
        }

        return 1+ Math.max(leftSide, rightSide);
    }
    findHeight(root);

    return ans;
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
 * @return {boolean}
 */
// LOGIC - Recursion
// for every node:
// find left subtree height
// find right subtree height
// check height difference
// check left and right subtree
var isBalanced = function(root) {
    
    let ans = true;

    function findHeight(curr){
        if(!curr) return true;

        let leftSide= findHeight(curr.left);
        let rightSide= findHeight(curr.right);

        if(Math.abs(leftSide-rightSide) >1){
            ans= false;//sore it in ans and do not return immediately
            //make sure we dont stop calculating the height when the tree is unbalanced
            //later we return ans
        }

        return 1+ Math.max(leftSide, rightSide);
    }
    findHeight(root);

    return ans;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};