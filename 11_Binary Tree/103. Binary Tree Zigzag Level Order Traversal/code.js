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
//LOGIC-if there is no sub array in ans at a given level then push empty at level
//now normaly push curr then call for left and right like we do in level order traversal
//but at last go to ans and iterate at each even(as we start form odd level-0) and 
//reverse at alteranating value of ans
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let ans=[];

    function traverse(curr,level){

        if(!ans[level]){//create array for this level
            ans[level]=[];
        }
        //reverse alternate levels
        ans[level].push(curr.val);
        curr.left && traverse(curr.left, level+1);
        curr.right && traverse(curr.right, level+1);
    }
    traverse(root,0);

    //reverse alternate levels
    for(let i=1; i<ans.length; i +=2){
        ans[i].reverse();
    }

    return ans;
};
