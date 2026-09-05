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
//sol-1(recursive)
// LOGIC:
// compare the left and right subtrees as mirrors.
// compare opposite children:
// left.left  ↔ right.right
// left.right ↔ right.left
var isSymmetric = function(root) {
    
    function isMirror(l,r){

        if(!l && !r) return true;//both nodes dont exist → symmetric

        if(!l || !r) return false;//only one node exists → not symmetric

        if(l.val !== r.val) return false; //values must be equal

        //compare opposite sides draw the tree diagram then you will understand this line or how we move left and right
        return isMirror(l.left, r.right) &&
                isMirror(l.right, r.left);
                
    }
    
    return isMirror(root.left, root.right);
};

// //sol-2(iterative)
// //LOGIC:
// //use a queue to compare mirror node pairs.
// //compare:
// //left.left  ↔ right.right
// //left.right ↔ right.left
// var isSymmetric = function(root) {
    
//     let q=[root.left, root.right];
    
//     while(q.length){

//         let p1= q.shift();
//         let p2= q.shift();

//         if(!p1 && !p2) return true;//if both node does not exist
//         if(!p1 || !p2) return false;//if one of the node does not exist

//         if(p1.val != p2.val) return false;//values must be equal

//         //push from left and right side of tree make a diagram then you will understand this line
//         q.push(p1.left, p2.right);
//         q.push(p1.right, p2.left);
//     }
//     return true;
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
//sol-1(recursive)
// LOGIC:
// compare the left and right subtrees as mirrors.
// compare opposite children:
// left.left  ↔ right.right
// left.right ↔ right.left
var isSymmetric = function(root) {
    
    function isMirror(l,r){

        if(!l && !r) return true;//both nodes dont exist → symmetric

        if(!l || !r) return false;//only one node exists → not symmetric

        if(l.val !== r.val) return false; //values must be equal

        //compare opposite sides draw the tree diagram then you will understand this line or how we move left and right
        return isMirror(l.left, r.right) &&
                isMirror(l.right, r.left);
                
    }
    
    return isMirror(root.left, root.right);
};

// //sol-2(iterative)
// //LOGIC:
// //use a queue to compare mirror node pairs.
// //compare:
// //left.left  ↔ right.right
// //left.right ↔ right.left
// var isSymmetric = function(root) {
    
//     let q=[root.left, root.right];
    
//     while(q.length){

//         let p1= q.shift();
//         let p2= q.shift();

//         if(!p1 && !p2) return true;//if both node does not exist
//         if(!p1 || !p2) return false;//if one of the node does not exist

//         if(p1.val != p2.val) return false;//values must be equal

//         //push from left and right side of tree make a diagram then you will understand this line
//         q.push(p1.left, p2.right);
//         q.push(p1.right, p2.left);
//     }
//     return true;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// }