/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// //brute force
// //LOGIC: take one node of A then compare each node of B
// //if both have same node the return node(note-dont compare node value)
// var getIntersectionNode = function(headA, headB) {
    
//     let currA=headA;
    
//     while(currA != null){
        
//         let currB= headB;//each time reset the currB to begining of node
        
//         while(currB != null){

//             if(currA == currB) return currA;
            
//             currB= currB.next;
//         }
//         currA= currA.next;//check next node if no match for 1st iterration
//     }
//     return null;
// };

//OPTIMIZED:use set as it make sol more optimized
//LOGIC: store all node of one linkelist in set 
//then use other linkedlist to check if that node is present in set or not
var getIntersectionNode = function(headA, headB) {

    //step-1: store all node in myset 
    let myset= new Set();
    
    while(headB != null){

        myset.add(headB);
        headB= headB.next;
    }

    //step-2: check if headA matching node is present in myset or not
    while(headA){

        if(myset.has(headA)) return headA;

        headA= headA.next;
    } 

    return null;//no matching node found
}