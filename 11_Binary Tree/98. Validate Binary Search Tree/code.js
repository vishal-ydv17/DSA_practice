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
//LOGIC-each node must lie strictly between a running low and high bound inherited from all its ancestors not only its parent
//when you make tree you will understand that when
//we go left of a node then low is carry forward to next node and curr.val become new high
//and when we go right high is carry forward to next node and and curr.val becomes new low;
var isValidBST = function(root) {
    
    function isBST(curr, low, high){
        //base case
        if(!curr) return  true;

        if(low !=null && curr.val<=low){// curr.val must be strictly greater than low
            return false;
        }
        if(high !=null && curr.val>=high){// curr.val must be strictly less than high
            return false;
        }
        //when you make tree you will understand that when
        //we go left of a node then low is carry forward to next node and curr.val become new high
        //and when we go right high is carry forward to next node and and curr.val becomes new low;
        let isLeftBST= isBST(curr.left, low, curr.val)
        let isRightBST= isBST(curr.right, curr.val, high)
        
        return isLeftBST && isRightBST;
    }
    
    return isBST(root, null, null);
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
//LOGIC-each node must lie strictly between a running low and high bound inherited from all its ancestors not only its parent
//when you make tree you will understand that when
//we go left of a node then low is carry forward to next node and curr.val become new high
//and when we go right high is carry forward to next node and and curr.val becomes new low;
var isValidBST = function(root) {
    
    function isBST(curr, low, high){
        //base case
        if(!curr) return  true;

        if(low !=null && curr.val<=low){// curr.val must be strictly greater than low
            return false;
        }
        if(high !=null && curr.val>=high){// curr.val must be strictly less than high
            return false;
        }
        //when you make tree you will understand that when
        //we go left of a node then low is carry forward to next node and curr.val become new high
        //and when we go right high is carry forward to next node and and curr.val becomes new low;
        let isLeftBST= isBST(curr.left, low, curr.val)
        let isRightBST= isBST(curr.right, curr.val, high)
        
        return isLeftBST && isRightBST;
    }
    
    return isBST(root, null, null);
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};