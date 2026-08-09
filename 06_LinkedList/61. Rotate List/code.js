// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */
//  //LOGIC=BRUTE FORCE
//  //find the 2nd last element then last node then link list node to front 
//  //and break old connection and update new head di this for k times
// var rotateRight = function(head, k) {

//     if(!head || head.next) return head;//efge case
//     while(k>0){
//         let curr= head;

//         //find 2nd last element
//         //loop start form head and goes till 2nd last elemen and in each iteration move the curr
//         while(curr.next.next != null){
//             curr= curr.next;//curr gives 2nd last node in its last iteration
//         }
//         let last= curr.next;//last node

//         //link last node to front
//         last.next= head;

//         //break the old connection
//         curr.next= null;

//         head= last;//now update new head

//         k--;
//     }
//     return head;
// };


var rotateRight = function(head, k) {

    if(!head || !head.next) return head;//efge case

    //lets find length of list
    let curr= head;
    let length=0;
    while(curr){
        curr= curr.next;
        length++;
    }

    //lets reduce iteration(optimize)
    //coz if we rotate list when k=length then we get same list so this avoide unessary rotation
    k= k % length;

    //lets find the node in list where we will beak the list node and link all node after that node to front
    let slow= head;
    let fast= head;
    //move fast k times ahead of slow coz when fast reaches end node slow will be k times back and that is the point we will break node form there and link to front
    while(k){
        fast= fast.next;
        k--;
    }

    //ove both pointers until fast reaches last node
    while(fast.next){
        slow= slow.next;
        fast= fast.next;
    }

    //link the fast which is at the end node of list to fornt
    fast.next= head;

    let newHead= slow.next;//same the link of new head before changing the head

    slow.next= null;//make slow last node of list means it beaks the list

    return newHead;
}