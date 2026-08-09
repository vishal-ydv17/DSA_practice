//this function is like a constructor
// constructor function for a Node.
// every time we call new Node(val),
// JavaScript creates an object like:
// {
//    val: val,
//    next: null
// }it stores like this internally
function Node(val){//create one node of the linked list
//create a linkedlist
    this.val=val;
    this.next=null;
}

var MyLinkedList = function() {//same as Node function //just to ininialize the linkedlist
    this.head=null;
    this.size=0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
    if(index<0 || index>=this.size){//corner cases
        return -1;
    }
    let current= this.head;

    for(let i=0; i<index; i++){
        current= current.next;
    }
    return current.val;//val is not defines in this but in constructor thats why we use term val so what is defines in constructor use that
    //note current is node object in this whole code so
    //node has { val, next } so current.val is valid.
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    
    let newNode= new Node(val);

    newNode.next= this.head;//1st link to head
    this.head= newNode;//then break the previos link and link to newNode

    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    
    let newNode= new Node(val);

    if(this.head==null) {//corner case
        this.head= newNode;
        this.size++;
        return;
    }

    //main logic
    //lets reach to last node
    let current= this.head;
    while(current.next !== null){

        current =current.next;
    }
    current.next= newNode;//lets link newNode to list

    this.size++;//at last increase size 
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    if(index<0 || index>this.size) return ;

    else if(index==0){//corner case-1
        this.addAtHead(val);
        return;
    }
    else if(index==this.size){//corner case-2
        this.addAtTail(val);
        return;
    }
    //main logic
    let newNode= new Node(val);
    let current =this.head;
    
    //1st traverse to the index-1 where we nee to add new node
    for(let i=0; i<index-1; i++){

        current= current.next;
    }
    newNode.next= current.next;//1st connect newNode 
    current.next= newNode;//then break old link and connect to newNode
    
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
    if(index<0 || index>=this.size) return ;//corner case-1

    else if(index==0){//corner case-2
        this.head= this.head.next;
        this.size--;
        return;
    }
    //main logic
    let current= this.head;

    for(let i=0; i<index-1;i++){
        current=current.next;
    }
    current.next= current.next.next;
    
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */