/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 //LOGIC-we use the set to store the node then check if set has same node then it is cyclic so return true 
var hasCycle = function(head) {
    
    let mySet= new Set();

    let current= head;

    while(current!=null){

        if(mySet.has(current)) return true;//linkelist is cyclic

        mySet.add(current);//store in mySet
        current= current.next;
    }
    return false;//linkedlist is not cyclic
};