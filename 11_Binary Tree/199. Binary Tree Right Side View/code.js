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

//sol-1
//LOGIC-do level order from right to left but store only 1 node
//visit curr.right before curr.left
//since right is always visited first so that node must be the rightmost one at that level so push it
//any node reached later at the same level (from the left side) is skipped since ans.length has already moved past that depth.
var rightSideView = function(root){
    if(!root) return [];
    let ans=[];

    function traverse(curr, level){
        //1st time we reaches this level so it must be right most node because we always visit right before left
        if(ans.length==level){
            ans.push(curr.val);
        }
        //call right 1st dont do it like we do in level order traversal
        curr.right && traverse(curr.right, level+1);
        curr.left && traverse(curr.left, level+1);
    }
    traverse(root, 0);
    return ans;
}


// //sol-2(brute force)
// //LOGIC-we do level order traversal and store all in tempAns eg: [[1],[2,3],[5,4]]
// //now we push it in finalAns if subarray length is 0 or push last element of subarray 
// //eg: [1,3,4]
// var rightSideView = function(root) {
//     if(!root) return [];
//     let tempAns=[];
//     let finalAns=[];
//     //do lever order traversal
//     function traverse(curr,level){

//         if(!tempAns[level]){
//             tempAns[level]=[];
//         }
//         tempAns[level].push(curr.val);
//         curr.left && traverse(curr.left, level+1);
//         curr.right && traverse(curr.right, level+1);
//     }
//     traverse(root,0);

//     //iterate on each subarray and push in finalAns
//     for(let i=0; i<tempAns.length; i++){

//         if(tempAns[i]==0){
//             finalAns.push(tempAns[i][0]);   
//         }
//         else{
//             finalAns.push(tempAns[i][tempAns[i].length-1]);
//         }
//     }
//     return finalAns;
// };
