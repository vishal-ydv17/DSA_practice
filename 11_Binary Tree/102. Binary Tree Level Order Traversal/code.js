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
 * @return {number[][]}
 */

//sol-1 (recursive)
// LOGIC: store every node according to its level.
// root is at level 0.
// for every child, increase the level by 1.
var levelOrder = function(root) {

    if(!root) return [];//edeg case
    let ans=[];
    function traverse(curr,level){

        if(!ans[level]){ // Create array for this level if it doesn't exist
            ans[level]=[];
        }
        ans[level].push(curr.val);//push curr value to ans 

        //stop if curr.left or curr.right dont exist but if exist then go to next level
        curr.left && traverse(curr.left, level+1);
        curr.right && traverse(curr.right, level+1);
    }
    traverse(root,0);

    return ans;
};


// //sol-2 (recursive by using queue)
// // LOGIC - Normal level order would give: [3, 9, 20, 15, 7]
// // But this question asks for nodes grouped by level: [[3], [9, 20], [15, 7]]
// // thats why we use levelArr
// // levelArr temporarily stores all nodes of one level
// // then after completing that level, we push levelArr into ans.
// var levelOrder = function(root) {
//     //edge case
//     if (!root) return [];

//     let ans=[];
//     let q= [root];//queue
//     let curr=null;

//     while(q.length){
        
//         let levelArr=[];//temporary array for the current level
//         let levelSize= q.length; //number of nodes in the current level

//         for(let i=0; i<levelSize; i++){
//             curr= q.shift();
//             levelArr.push(curr.val);

//             curr.left && q.push(curr.left);//dont change the push order as in level order we push form left to right
//             curr.right && q.push(curr.right);
//         }
//         ans.push(levelArr);//store each completed level in ans
//     }
//     return ans;
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
 * @return {number[][]}
 */

//sol-1 (recursive)
// LOGIC: store every node according to its level.
// root is at level 0.
// for every child, increase the level by 1.
var levelOrder = function(root) {

    if(!root) return [];//edeg case
    let ans=[];
    function traverse(curr,level){

        if(!ans[level]){ // Create array for this level if it doesn't exist
            ans[level]=[];
        }
        ans[level].push(curr.val);//push curr value to ans 

        //stop if curr.left or curr.right dont exist but if exist then go to next level
        curr.left && traverse(curr.left, level+1);
        curr.right && traverse(curr.right, level+1);
    }
    traverse(root,0);

    return ans;
};


// //sol-2 (recursive by using queue)
// // LOGIC - Normal level order would give: [3, 9, 20, 15, 7]
// // But this question asks for nodes grouped by level: [[3], [9, 20], [15, 7]]
// // thats why we use levelArr
// // levelArr temporarily stores all nodes of one level
// // then after completing that level, we push levelArr into ans.
// var levelOrder = function(root) {
//     //edge case
//     if (!root) return [];

//     let ans=[];
//     let q= [root];//queue
//     let curr=null;

//     while(q.length){
        
//         let levelArr=[];//temporary array for the current level
//         let levelSize= q.length; //number of nodes in the current level

//         for(let i=0; i<levelSize; i++){
//             curr= q.shift();
//             levelArr.push(curr.val);

//             curr.left && q.push(curr.left);//dont change the push order as in level order we push form left to right
//             curr.right && q.push(curr.right);
//         }
//         ans.push(levelArr);//store each completed level in ans
//     }
//     return ans;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// }