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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    if(!p && !q) return true;//if at leaf both null then give true
    if(!p || !q) return false;//if either of node is thre then false

    if(p.val!=q.val) return false;//both node should be equal given in Q

    //now recursively call for left and right subtree
    return  isSameTree(p.left, q.left) && 
            isSameTree(p.right, q.right);
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    if(!p && !q) return true;//if at leaf both null then give true
    if(!p || !q) return false;//if either of node is thre then false

    if(p.val!=q.val) return false;//both node should be equal given in Q

    //now recursively call for left and right subtree
    return  isSameTree(p.left, q.left) && 
            isSameTree(p.right, q.right);
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};