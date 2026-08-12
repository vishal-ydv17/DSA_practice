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
 * @return {TreeNode}
 */
//LOGIC-go to left, right of root then swap means interchange the pointers
//then call for recursively to invert left subtree
//then recursively for right subtree
var invertTree = function(root) {
    //base case
    if(!root) return null;

    [root.left, root.right]= [root.right, root.left];//swap node mean change the both pointers

    invertTree(root.left);//call for left of root to recursively invert left subtree
    invertTree(root.right);//call for right of root to recursively invert right subtree

    return root;
};