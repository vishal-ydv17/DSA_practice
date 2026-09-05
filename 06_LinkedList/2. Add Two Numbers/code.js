/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let sentinal= new ListNode();//its a dummy node-now in this we will attach our answer digit and move to next digit
    let sentinalHead= sentinal;//store the head otherwise later we will lose this head as at last we neet to return this
    let carry=0;

    while(l1 || l2 || carry){//means if l1, l2, carry exist then run loop
        //use ternary operator - if l1 not exist then l1=0 else l1.val same for l2 also
        let sum= (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry= Math.floor(sum/10);//math.floor remove decimal and give carry
        let sumDigit= sum%10;

        let newNode= new ListNode(sumDigit);
        sentinal.next= newNode;
        sentinal= sentinal.next;//after attaching the link move the sentinal node

        l1= l1 && l1.next;//if l1 exist then move forward eg:li.next
        l2= l2 && l2.next;//same as above
    }
    return sentinalHead.next;//dont return sentinalHead as its dummy return sentinalHead.next as it poits to actual sumDigit node which we have store at starting point
};