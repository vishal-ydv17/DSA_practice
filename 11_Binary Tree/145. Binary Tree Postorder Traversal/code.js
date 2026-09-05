//sol-1 (recursive)
//LOGIC- postorder= left->right->root
var postorderTraversal = function(root) {

    let ans=[];//do not put root as we did in preorder coz 1st we need to push left as left-root-right

    function traverse(curr){
        //base case
        if(!curr) return;//stop recursion if curr doesnt exist

        //step1-visit left
        traverse(curr.left);
        //step1-visit right
        traverse(curr.right);
        //step1-push root
        ans.push(curr.val)
    }
    traverse(root);

    return ans;
};

// //sol-2 (iterative)
// //LOGIC:postorder left->right->root
// var postorderTraversal = function(root) {

//     let stack=[];
//     let curr= root;
//     let ans= [];
//     let lastVisitedNode=null;//keep null not 0 as node can be null not 0

//     while(stack.length || curr){
//         //push all the values to stack till we reach stack bottom left
//         while(curr){//at last when curr=null this will not run
//             stack.push(curr);
//             curr= curr.left;
//         }
//         //peeking top of the stack
//         let peek= stack[stack.length-1];//top element of stack

//         //if right chiled exist and it is not last Visited node 
//         if(peek.right && peek.right != lastVisitedNode ){
//             curr= peek.right;
//         }
//         else{ // both left and right are processed here
//             ans.push(peek.val)
//             lastVisitedNode= stack.pop();
//         }
//     }
//     return ans;
// }