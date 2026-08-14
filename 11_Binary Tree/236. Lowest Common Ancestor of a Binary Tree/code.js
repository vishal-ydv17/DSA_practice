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
//LOGIC-Recursively search left and right subtrees and counting how many of p/q are found below (plus check if the current node itself is p or q)
//the first node (bottom-up) where that count reaches 2 is where the paths to p and q converge — that is our LCA
var lowestCommonAncestor = function(root, p, q) {
    
    let lca= null;
    function traverse(curr){

        let count=0;
        if(!curr) return 0;//base case we reached past a leaf found 0 targets
        
        let ansOnLeft= traverse(curr.left);//recursively call how many of p, q we find in left subtree(left target)
        let ansOnRight= traverse(curr.right);//same as above(right target)

        if(curr.val==p.val || curr.val==q.val){//check if curr node is target(curr target)
            count++;
        }
        //update count as how much targets found 
        //(found in left) + (found in right) + (found at self)
        count= count + ansOnLeft + ansOnRight;
        
        //if both node found(p,q) and lca is not updated even once then that current node
        //is lowest common ancestar found
        if(count==2 && !lca){
            lca= curr;
        } 
        return count;//pass the running count up to the parent call
    }
    traverse(root)
    return lca;
};


// //sol-2 
// //this is a completely different Q sol much simpler strategy that only works if the tree is a valid BST (left subtree < node < right subtree, always) but 1st sol works for all types of trees
// var lowestCommonAncestor = function(root, p, q) {
    
//     //both p and q are smaller than current node then they must both live in the LEFT subtree
//     if (p.val < root.val && q.val < root.val) {
//         return lowestCommonAncestor(root.left, p, q);

//     } 
//     // both p and q are bigger than current node they must both live in the RIGHT subtree
//     else if (p.val > root.val && q.val > root.val) {
//         return lowestCommonAncestor(root.right, p, q);
//     } 
//     else {//this node is the point where both p,q are on diff side so this id LCA
//         return root;
//     }
// };