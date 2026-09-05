<<<<<<< HEAD
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// // LOGIC-Brute force (using two poiters)
// var swapPairs = function(head) {

//     if(!head || !head.next) return head;//edge case
    
//     let sentinal= new ListNode();//make a dummy node 
//     sentinal.next=head;

//     let pre =sentinal;

//     while(pre.next && pre.next.next){

//         let first=pre.next;
//         let second=first.next;

//         pre.next= second;//point dummy node to second

//         first.next= second.next;//break 1st node link and point to next of second

//         second.next=first;//and then point second to 1st

//         pre= first;//move pre to end of swapped pair and end is first as second has moved to first position
//     }
//     return sentinal.next;
// };

//LOGIC- recursion
var swapPairs = function(head) {

    if(!head || !head.next) return head;//base case

    let left= head;
    let right= head.next;

    //swap nodes
    left.next= swapPairs(right.next);//recursive case
    right.next= left;

    return right;//right coz after reverse right becomes head node for 1st iteration
=======
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// // LOGIC-Brute force (using two poiters)
// var swapPairs = function(head) {

//     if(!head || !head.next) return head;//edge case
    
//     let sentinal= new ListNode();//make a dummy node 
//     sentinal.next=head;

//     let pre =sentinal;

//     while(pre.next && pre.next.next){

//         let first=pre.next;
//         let second=first.next;

//         pre.next= second;//point dummy node to second

//         first.next= second.next;//break 1st node link and point to next of second

//         second.next=first;//and then point second to 1st

//         pre= first;//move pre to end of swapped pair and end is first as second has moved to first position
//     }
//     return sentinal.next;
// };

//LOGIC- recursion
var swapPairs = function(head) {

    if(!head || !head.next) return head;//base case

    let left= head;
    let right= head.next;

    //swap nodes
    left.next= swapPairs(right.next);//recursive case
    right.next= left;

    return right;//right coz after reverse right becomes head node for 1st iteration
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
}