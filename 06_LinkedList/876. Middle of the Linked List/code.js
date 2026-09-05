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
 //LOGIC- use varible like slow,fast as slow moves 1 step and fast moves 2 step at time
 //if fast reaches end node till then slow also reaches to middle node so we rerurn slow as middle
var middleNode = function(head) {
    
    let slow= head;
    let fast= head;

    while(fast !=null && fast.next !=null){//both condtion should be satisfy to run

        slow= slow.next;
        fast= fast.next.next;
    }
    //after while loop end we fast reach at the end of node 
    //so slow must have reach middle till then
    return slow;
};