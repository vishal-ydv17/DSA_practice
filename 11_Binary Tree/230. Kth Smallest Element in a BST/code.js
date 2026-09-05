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
 * @param {number} k
 * @return {number}
 */
//LOGIC-we do the inorder traversal of BSt which gives sorted node values(left->root->right)
//but we will not return the sorted values istead we will keeo a count in which we will decrease the count
// each time when we need to push values like in inorder
var kthSmallest = function(root, k) {
    let ans=null;
    let count=k;
    function traverse(curr, k){
        //base case
        if (!curr || count <= 0) return;//here recursion stops

        curr.left && traverse(curr.left,k);//call left subtree
        
        count--;//decrease count each time 
        if(count==0){
            ans= curr.val;
        }

        curr.right && traverse(curr.right,k);//call right subtree
    }
    traverse(root, k)
    return ans;
};