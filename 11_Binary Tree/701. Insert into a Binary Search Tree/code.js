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
var insertIntoBST = function(root, val) {

    function traverse(curr,val){
        //base case
        if(!curr) return new TreeNode(val);//if we need to insert after last/leaf 
        //which is null node so we create new node then insert

        if(curr.val<val){//if val is greater than curr.vall then we need to insert in curr.right
            curr.right= traverse(curr.right, val);//insert in right by curr.right 
        }
        if(curr.val>val){
            curr.left= traverse(curr.left, val);//insert in left by root.left
        }
        return curr;//retur curr each time to parent or who has called
    }

    return traverse(root,val);//in Q it asks to return root node after insertion
};