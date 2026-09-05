/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 //LOGIC-1: by using sentinal/dummy node
 //use a dummy node to simplify merging.
// compare both current nodes and always attach
// the smaller node to the merged list.
var mergeTwoLists = function(list1, list2) {

    let sentinal= new ListNode();//dummy node
    let curr= sentinal;//we will use this curr to move and aatach nodes but sentinal remains same
    while(list1 && list2){//run till both list1, list2 exist beace both require for comparison

        if(list1.val<list2.val){

            curr.next= list1;
            list1= list1.next;//move list 1 node ahead
        }
        else{
            curr.next= list2;
            list2= list2.next;
        }
        curr= curr.next;//move curr ahead after we added node
    }
    //add remaining node if in list after while loop means list2 node got empty and only list1 is there
    if(list1){
        curr.next= list1;
    }
    if(list2){//same as above (vice versa)
        curr.next= list2;
    }

    return sentinal.next;
};

// //LOGIC-2: without sentinal/dummy node
// // select the smaller first node as the head.
// // then keep attaching the smaller node from
// // both lists until one list becomes empty.
// var mergeTwoLists = function(list1, list2) {

//     //edge case
//     if(!list1) return list2;//if list1 not exist or null return list2
//     if(!list2) return list1;

//     let curr= null;

//     if(list1.val<list2.val){
//         curr= list1;//curr is not node so we do not use curr.next but after curr= list1; it becomes starting node of merged list
//         list1= list1.next;
//     }
//     else{
//         curr= list2;
//         list2= list2.next;
//     }
//     //save the head
//     let start= curr;//keep track of 1st node of merged list as later we can lose it sp store it in diff variable than curr

//     while(list1 && list2){//run till both list1 and list2 exist

//         if(list1.val<list2.val){
//             curr.next= list1;
//             list1= list1.next;
//         }
//         else{
//             curr.next= list2;
//             list2= list2.next;
//         }
//         curr= curr.next;//move curr ahead
//     }
//     //attach remaining node
//     if(!list1){
//         curr.next= list2;
//     }
//     else{
//         curr.next= list1;
//     }

//     return start;
// }