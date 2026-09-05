<<<<<<< HEAD
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// //LOGIC- without using the sentinal node
// //sentinal node is a helping node to solve the problem of deleting a node
// var removeElements = function(head, val) {
    
//     //do this till head value is not same as val eg: [6,6,2,7,4,6,7] so remove all 6
//     while(head !==null && head.val == val){//corner case-1 
//         head= head.next;
//     }
//     if(head==null) return null ;//corner case-2

//     let current= head;
//     //note current.next guve the next node object eg: { val: 20, next: Node3}
//     while(current.next !==null){

//         if(current.next.val==val){

//             //means if next of current(eg 2) is val(eg 6) then remove current next(eg 6) by copying current next next(eg 3) value into previous that is current next(eg 6) 
//             current.next=current.next.next;
//         }
//         else{
//             current= current.next;
//         }
//     }
//     return head;
// }

//LOGIC-by using sentinal node
//i suggest use sentinal node as this concept used in tree 
var removeElements = function(head, val) {

    let sentinal= new ListNode();//as this given in above in question above at top of solution code-defination of linkedList
    sentinal.next=head;//make it poit to head as to delete we nee to find previous so make temporary node as prev

    let prev= sentinal;
    while(prev!= null && prev.next !=null){

        if(prev.next.val== val){
            prev.next= prev.next.next;//delete the node
        }
        else{
            prev=prev.next;
        }
    }
    return sentinal.next;
=======
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// //LOGIC- without using the sentinal node
// //sentinal node is a helping node to solve the problem of deleting a node
// var removeElements = function(head, val) {
    
//     //do this till head value is not same as val eg: [6,6,2,7,4,6,7] so remove all 6
//     while(head !==null && head.val == val){//corner case-1 
//         head= head.next;
//     }
//     if(head==null) return null ;//corner case-2

//     let current= head;
//     //note current.next guve the next node object eg: { val: 20, next: Node3}
//     while(current.next !==null){

//         if(current.next.val==val){

//             //means if next of current(eg 2) is val(eg 6) then remove current next(eg 6) by copying current next next(eg 3) value into previous that is current next(eg 6) 
//             current.next=current.next.next;
//         }
//         else{
//             current= current.next;
//         }
//     }
//     return head;
// }

//LOGIC-by using sentinal node
//i suggest use sentinal node as this concept used in tree 
var removeElements = function(head, val) {

    let sentinal= new ListNode();//as this given in above in question above at top of solution code-defination of linkedList
    sentinal.next=head;//make it poit to head as to delete we nee to find previous so make temporary node as prev

    let prev= sentinal;
    while(prev!= null && prev.next !=null){

        if(prev.next.val== val){
            prev.next= prev.next.next;//delete the node
        }
        else{
            prev=prev.next;
        }
    }
    return sentinal.next;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
}