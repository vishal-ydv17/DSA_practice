// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
//  //LOGIC-we use the set to store the node then check if set has same node then it is cyclic so return true 
// var hasCycle = function(head) {
    
//     let mySet= new Set();

//     let current= head;

//     while(current!=null){

//         if(mySet.has(current)) return true;//linkelist is cyclic

//         mySet.add(current);//store in mySet
//         current= current.next;
//     }
//     return false;//linkedlist is not cyclic
// };

var hasCycle = function(head) {

    if(head==null || head.next==null) return false;//edge case if head is null or only single node is there

    let slow=head;
    let fast=head;

    while(fast !==null && fast.next!= null){//both condition should satisfy

        slow=slow.next;//moves 1 step a time
        fast=fast.next.next;//moves 2 step a time

        if(slow==fast) return true;//if same mean they form a cycle and fast does not reach null or end of node
    }
    return false;
}