// LOGIC:
// Reverse each link one by one.
// Store the next node before changing the link in temp variable,
// otherwise the remaining list will be lost.
var reverseList = function(head) {
    
    let prev= null;
    let current=head;

    while(current!=null){
        
        //store next link of current so that later we move our current to next
        let temp= current.next;
        // reverse current node pointer ,point current to the null in 1st iteration
        current.next= prev;
        prev= current;//move prev forward
        current= temp;
    }
    return prev;//at final when list reversed prev is the new head of reversed list
};