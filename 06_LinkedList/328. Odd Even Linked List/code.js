/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    
    //edge case(if 1 single node is there or if 2 node is there)
    if(!head || !head.next) return head;
    
    let odd= head;
    let even= head.next;
    let evenStart= even;//keep this value store as it will be used when we connect the last node to this even node eg: 5 links to 2

    while(odd.next !=null && even.next!= null){

        odd.next=odd.next.next;//connect odd to odd
        even.next=even.next.next;//connect even to even

        odd=odd.next;//move to next node 
        even=even.next;//move to next node
    }
    odd.next= evenStart;//connect last node to evenStart
    return head;
};