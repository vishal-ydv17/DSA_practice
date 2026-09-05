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
 * @param {number} targetSum
 * @return {boolean}
 */
//sol-1 (bottom up recursion)
// LOGIC:
// bottom-Up Recursion
// reduce targetSum by the current nodes value
// at a leaf check whether the remaining target
// is equal to the leaf's value
var hasPathSum = function(root, targetSum) {

    if(!root) return false;//edge case

    //base case
    if(!root.left && !root.right){
        if(root.val===targetSum) return true;
    }
    let remainingSum= targetSum-root.val;//remaing sum gets reduced each time when we go down to get if cuurent node value === remaining sum or not

    let leftPathSum= hasPathSum(root.left, remainingSum);//check left subtree
    let rightPathSum= hasPathSum(root.right, remainingSum);//check right subtree

    return leftPathSum || rightPathSum;
    //make sure that even if one leaf is target sum then return true
}

// //sol-2 (topt down recursion)
// //LOGIC:
// //top-Down Recursion
// //keep track of the sum accumulated from
// //root to the current node
// //at a leaf compare the accumulated sum
// //with targetSum.

// var hasPathSum = function(root, targetSum) {

//     if(!root) return false;

//     let ans= false;

//     function traverse(curr, currSum){

//         let newSum= currSum + curr.val;//add current node value to path sum
//         //base case
//         if(!curr.left && !curr.right){
//             if(newSum===targetSum){
//                 return ans = ans || true;//even if one of the leaf of tree hit tragetSum return true
//             }
//         }

//         curr.left && traverse(curr.left, newSum);//traverse left sub tree
//         curr.right && traverse(curr.right, newSum);//traverse right subtree

//     }
//     traverse(root,0);

//     return ans;
// }
// //this line can be written as
// // curr.left && traverse(curr.left, newSum);
// // or
// // if(curr.left){
// //     traverse(curr.left, newSum);
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
 * @param {number} targetSum
 * @return {boolean}
 */
//sol-1 (bottom up recursion)
// LOGIC:
// bottom-Up Recursion
// reduce targetSum by the current nodes value
// at a leaf check whether the remaining target
// is equal to the leaf's value
var hasPathSum = function(root, targetSum) {

    if(!root) return false;//edge case

    //base case
    if(!root.left && !root.right){
        if(root.val===targetSum) return true;
    }
    let remainingSum= targetSum-root.val;//remaing sum gets reduced each time when we go down to get if cuurent node value === remaining sum or not

    let leftPathSum= hasPathSum(root.left, remainingSum);//check left subtree
    let rightPathSum= hasPathSum(root.right, remainingSum);//check right subtree

    return leftPathSum || rightPathSum;
    //make sure that even if one leaf is target sum then return true
}

// //sol-2 (topt down recursion)
// //LOGIC:
// //top-Down Recursion
// //keep track of the sum accumulated from
// //root to the current node
// //at a leaf compare the accumulated sum
// //with targetSum.

// var hasPathSum = function(root, targetSum) {

//     if(!root) return false;

//     let ans= false;

//     function traverse(curr, currSum){

//         let newSum= currSum + curr.val;//add current node value to path sum
//         //base case
//         if(!curr.left && !curr.right){
//             if(newSum===targetSum){
//                 return ans = ans || true;//even if one of the leaf of tree hit tragetSum return true
//             }
//         }

//         curr.left && traverse(curr.left, newSum);//traverse left sub tree
//         curr.right && traverse(curr.right, newSum);//traverse right subtree

//     }
//     traverse(root,0);

//     return ans;
// }
// //this line can be written as
// // curr.left && traverse(curr.left, newSum);
// // or
// // if(curr.left){
// //     traverse(curr.left, newSum);
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// // }