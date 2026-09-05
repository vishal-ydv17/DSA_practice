/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
//sol-1 (brute force)
//LOGIC-since this is a PERFECT binary tree (every level fully filled)
// we can connect nodes using only the trees own left/right/next pointers
var connect = function(root) {
    if(! root) return null;

    function traverse(curr){

        if(curr.left){//see in Q figure now let curr=1 then to make 2->3 we have below condition
            curr.left.next= curr.right;
        }
        if(curr.right && curr.next){//see in Q figure now let curr=2 then to make 5->6
            curr.right.next= curr.next.left;
        }

        curr.left && traverse(curr.left);
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return root;
}



// //sol-2
// //LOGIC-we do level order traversal and store the actual node in temmAns eg:[[1], [2,3], [4,5,6,7]] then we will link each of them
// //note if we do not link a node it automatically points to null
// var connect = function(root) {
//     if(!root) return null;

//     let tempAns=[];//this will hold an array of ACTUAL NODE REFERENCES(not just values)
//     function traverse(curr, level){

//         if(!curr) return ;

//         if(!tempAns[level]){
//             tempAns[level]=[];
//         }
//         tempAns[level].push(curr);// store the node itself (not curr.val) coz later we need to mutate curr.next 

//         traverse(curr.left, level+1);
//         traverse(curr.right, level+1);
//     }
//     traverse(root,0);

//     // now tempAns looks like: [[1], [2,3], [4,5,6,7]] and we need to link like
//     // eg: 1->null, 2->3, 4->5, 5->6, 6->7, 7->null
//     for(let i=0; i<tempAns.length; i++){

//         for(let j=0; j<tempAns[i].length-1; j++){//take total length-1 as in processin we have j+1
//             // for every node in this level except the last one,
//             // link it to the node right after it in the same level
//             tempAns[i][j].next= tempAns[i][j+1];
//         }
//         // note: the LAST node in each level is never assigned
//         // so it keeps its default .next = null
//     }
//     return root;
// };
// //in this we modify the actual tree node not the node value stored in some variable