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
 * @param {number} val
 * @return {TreeNode}
 */
//as it is a BST so curr.left.val < curr.val < curr.right.val
var searchBST = function(root, val) {
    if(!root) return null;

    function traverse(curr, val){

        if(curr==null) return null;//base case(val not found in tree)

        if(curr.val==val) return curr;//if found return node(return node as guve in Q)

        if(val<curr.val){//if val is less thena curr.val go left else go right
            return traverse(curr.left,val)
        }
        else{//search right
            return traverse(curr.right, val)
        }
    }
    return traverse(root, val);
};