<<<<<<< HEAD
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//LOGIC-if both p,q value less than current then go left 
//if both gereater then go right else return the current node as it must be LCA as this is only we left with
var lowestCommonAncestor = function(root, p, q) {
    
    function traverse(curr, p, q){

        if(p.val<curr.val && q.val<curr.val){//if both are less then go left
            return traverse(curr.left, p, q);//each time dont call traverse but return traverse coz there is no return at the end after if else and function has to return something when they are called
        }
        else if(p.val>curr.val && q.val>curr.val){//if both are greater then go right
            return traverse(curr.right, p, q)
        }
        else{
            return curr;//if neither both less or right then curr node must be the common ancestor
        }
    }
    return traverse(root, p, q);
    
=======
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//LOGIC-if both p,q value less than current then go left 
//if both gereater then go right else return the current node as it must be LCA as this is only we left with
var lowestCommonAncestor = function(root, p, q) {
    
    function traverse(curr, p, q){

        if(p.val<curr.val && q.val<curr.val){//if both are less then go left
            return traverse(curr.left, p, q);//each time dont call traverse but return traverse coz there is no return at the end after if else and function has to return something when they are called
        }
        else if(p.val>curr.val && q.val>curr.val){//if both are greater then go right
            return traverse(curr.right, p, q)
        }
        else{
            return curr;//if neither both less or right then curr node must be the common ancestor
        }
    }
    return traverse(root, p, q);
    
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};