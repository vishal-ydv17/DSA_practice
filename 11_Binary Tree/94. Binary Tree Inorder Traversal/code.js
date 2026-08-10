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
 * @return {number[]}
 */
//sol-1 (recursion)
//LOGIC- inorder= left->root->right (inorder means traverse like this in tree)
var inorderTraversal = function(root) {
    
    let ans=[];//do not put root as we did in preorder coz 1st we need to push left as left-root-right

    function traverse(curr){
        //base case
        if(!curr) return;//stop recursion if curr doesnt exist
        //step1-visit left
        traverse(curr.left)
        //step2-push root
        ans.push(curr.val);
        //step3-visit right
        traverse(curr.right);
    }
    traverse(root);

    return ans;
};

// //sol-2(iterative)
// //LOGIC- left->root-<right
// var inorderTraversal = function(root) {
//     //edge case
//     //if(!root) return [];//no need as code run for Null also and guve []

//     let ans=[];
//     let stack=[];
//     let curr= root;

//     while(curr || stack.length){
//         while(curr){
//             stack.push(curr);
//             curr= curr.left;
//         }
//         //after while loop we reach at tree bottom most left
//         curr= stack.pop();
//         ans.push(curr.val);//now push left as we are at bottom coz inorder= left-root-right
//         curr= curr.right;//make curr as right coz
//         //in 2nd iteration now if we are at bottom left of tree there is no right so right get null and above while loop does not execute
//         //then we pop curr and push as this is root then repeat all again
//     }
//     return ans;
// }