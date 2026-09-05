// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
//  //brute force
//  //LOGIC: find the size of list then find the which node to be deleted from front
//  //then mth is node from the frint to delete now if m==0 mean 1st node to delete that is head so handle that case seperatelt
//  //if m>0 then we have discussed in while loop
// var removeNthFromEnd = function(head, n) {
    
//     let sizeOfList=0;
//     let temp= head;//use temp itherwise we will lose head later

//     while(temp != null){
//         temp= temp.next;
//         sizeOfList++;
//     }
//     //use 0 based indexing as 3rd index to be deleted 
//     let delete_pos = sizeOfList-n;//delete_pos node from the front to delete

//     //it means the node to remove is the 0th node from the front, i.e., the head
//     //if delete_pos > 0 → delete a node after the head like below in loop we done
//     if(delete_pos==0) return head.next;//edge case

//     let curr=head;

//     for(let i=0; i<delete_pos-1; i++){//delete_pos-1 becasue we need to stop at one node before the nxt node to delete
//         curr= curr.next;
//     }
//     //after the loop ends curr points to previous to the node to delete
//     curr.next= curr.next.next;

//     return head;
// };


// //LOGIC-without using sentinal node
// //but would suggest learn sentinal node sol as this concept useful in tree
// var removeNthFromEnd = function(head, n) {

//     let slow=head;
//     let fast=head;

//     while(n>0){//make gap n bw slow and fast
//         fast= fast.next;
//         n--;
//     }
//     //what if n==size of list then fast becomes null after while loop of above
//     if(fast==null) return head.next;//edge case

//     let prev=null;
//     while(fast !=null){//as after the loop end slow poits to delete_position of the node so we need previous of delete_postion 

//         prev=slow;
//         slow=slow.next;
//         fast= fast.next;
//     }
//     prev.next=prev.next.next;

//     return head;
// }

//by using sentinal node
var removeNthFromEnd = function(head, n) {

    //add sentinal node at start
    let sentinal= new ListNode();
    sentinal.next= head;

    //move pointer by fast pointer by n from star
    let fast=sentinal;
    for(let i=0; i<n; i++){
        fast= fast.next
    }

    //move both pointers slow,fast until fast reaches to last node
    let slow=sentinal;
    while(fast.next != null){
        slow= slow.next;
        fast= fast.next;
    }

    //now slow pointer is before 1 node to delete
    slow.next= slow.next.next;//delete next node of slow

    return sentinal.next;
}