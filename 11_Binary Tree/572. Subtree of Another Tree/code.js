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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// sol-1 (hashing / serialization) 
// LOGIC - convert both trees into unique strings by hashing/serialization
// if subRoot string appears anywhere inside root string tehn it is subtree
var isSubtree = function(root, subRoot) {

    // convert the whole "root" tree into one string
    // eg: "-3-4-1-#-#-2-#-#-5-#-#"
    let hashRoot= serialize(root);
    let hashsubRoot= serialize(subRoot);// eg: "-4-1-#-#-2-#-#"

    return hashRoot.includes(hashsubRoot);
}
// serialize() converts a tree into a single string using PRE-ORDER traversal
// (node → left → right) marking every null child explicitly with "-#"
// and every real node as "-" + value
let serialize= function(root){
    let hash= "";
    function traverse(curr){
        if(!curr){
            hash= hash + "-#";
            return;
        }    
        hash= hash + "-" + curr.val ;
        
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return hash;
}
//eg:
    //hashRoot:    -3-4-1-#-#-2-#-#-5-#-#
    //hashSubRoot:    -4-1-#-#-2-#-#
    //                ^^^^^^^^^^^^^^ found inside hashRoot
    //so this correctly returns true for the given example



// //sol-2(brute force) O(m x n)
// //LOGIC-choose 1 node then compare to subtree node if match then
// //check its left and right if not then 
// //move to next node then check same
// var isSubtree = function(root, subRoot) {
//     if(!root) return false;

//     function isSame(root, subRoot){//isSame() → checks ONE location of node wether from that node it matches the subTree or not
//         if(!root && !subRoot) return true;//if both dont exist then same
//         if(!root || !subRoot) return false;//if one exist and anither do not so different

//         if(root.val !== subRoot.val) return false;//both tree root val is not same

//         //check both left and right if node val matches
//         return isSame(root.left, subRoot.left) && 
//                isSame(root.right, subRoot.right);

//     }

//     if(isSame(root, subRoot)){
//         return true;
//     }
//     //isSubtree() → searches ALL possible locations
//     return isSubtree(root.left, subRoot) ||
//             isSubtree(root.right, subRoot); 
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// sol-1 (hashing / serialization) 
// LOGIC - convert both trees into unique strings by hashing/serialization
// if subRoot string appears anywhere inside root string tehn it is subtree
var isSubtree = function(root, subRoot) {

    // convert the whole "root" tree into one string
    // eg: "-3-4-1-#-#-2-#-#-5-#-#"
    let hashRoot= serialize(root);
    let hashsubRoot= serialize(subRoot);// eg: "-4-1-#-#-2-#-#"

    return hashRoot.includes(hashsubRoot);
}
// serialize() converts a tree into a single string using PRE-ORDER traversal
// (node → left → right) marking every null child explicitly with "-#"
// and every real node as "-" + value
let serialize= function(root){
    let hash= "";
    function traverse(curr){
        if(!curr){
            hash= hash + "-#";
            return;
        }    
        hash= hash + "-" + curr.val ;
        
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return hash;
}
//eg:
    //hashRoot:    -3-4-1-#-#-2-#-#-5-#-#
    //hashSubRoot:    -4-1-#-#-2-#-#
    //                ^^^^^^^^^^^^^^ found inside hashRoot
    //so this correctly returns true for the given example



// //sol-2(brute force) O(m x n)
// //LOGIC-choose 1 node then compare to subtree node if match then
// //check its left and right if not then 
// //move to next node then check same
// var isSubtree = function(root, subRoot) {
//     if(!root) return false;

//     function isSame(root, subRoot){//isSame() → checks ONE location of node wether from that node it matches the subTree or not
//         if(!root && !subRoot) return true;//if both dont exist then same
//         if(!root || !subRoot) return false;//if one exist and anither do not so different

//         if(root.val !== subRoot.val) return false;//both tree root val is not same

//         //check both left and right if node val matches
//         return isSame(root.left, subRoot.left) && 
//                isSame(root.right, subRoot.right);

//     }

//     if(isSame(root, subRoot)){
//         return true;
//     }
//     //isSubtree() → searches ALL possible locations
//     return isSubtree(root.left, subRoot) ||
//             isSubtree(root.right, subRoot); 
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// };