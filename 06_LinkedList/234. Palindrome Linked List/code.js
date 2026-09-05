/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    //step-1 lets find the middle of list
    let slow=head;
    let fast=head;

    while(fast != null && fast.next != null){
        
        slow= slow.next;
        fast= fast.next.next;
    }
    let middle= slow;//after lopp runs slow become the middle of list


    //step-2 now from middle to end reverse the list 
    let prev=null;//assume
    let current= middle;

    while(current !== null ){

        let temp=current.next;//save the next node to put in current
        current.next=prev;//reverse the link and point to null in 1st iteration
        prev= current;//move prev forward
        current= temp;//move current forward 
    }

    //step-3 check for palindrome
    let firstList= head;
    let secondList= prev;

    while(secondList !=null ){
        
        if(firstList.val != secondList.val) return false;

        firstList= firstList.next;
        secondList= secondList.next;
    }
    return true;
};