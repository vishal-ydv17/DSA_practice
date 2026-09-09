//LOGIC- we use two stacks with fixed roles s1 only receives pushes s2 only serves pop
//peek so when s2 is empty we drain all of s1 into s2 via repeated pop/push — this 
//reverses the order turning the oldest (bottom of s1) into the top of s2 so once 
//elements are in s2, s2.pop()/top-of-s2 directly gives correct FIFO order now no 
//swapping — elements move s1→s2 exactly once
var MyQueue = function() {
    this.s1=[];//we will use base as s1 if later we shift element form s1 to s2 we swap s1,s2
    this.s2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
    if(this.s2.length===0){
        let n= this.s1.length;
        for(let i=0; i<=n-2; i++){//leave 1 last element
            this.s2.push(this.s1.pop());
        }
        let lastElement= this.s1.pop();
    
        return lastElement;
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.s2.length===0){
        let n= this.s1.length;
        for(let i=0; i<=n-2; i++){//leave 1 last element
            this.s2.push(this.s1.pop());
        }
        let lastElement= this.s1.pop();
        this.s2.push(lastElement);
        return lastElement;
    }
    return this.s2[this.s2.length-1];//gives the top of a stack s2[0] gives bootom of stack
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.s1.length===0 && this.s2.length===0){
        return true;
    }
    else{
        return false
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */