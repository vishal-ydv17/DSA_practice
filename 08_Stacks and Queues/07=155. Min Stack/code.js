//LOGIC-as we know that push, pop, top all are O(1)
//so we only need to make getMin as O(1) coz nomally we would have to iterate on
//stack then find minVal but what if we pre process it while we are pushing the
//elements in stack so now we push an array of length 2 eg: [element, minVal]
//0th index in element need to be pushed and 1st index is minVal so far
var MinStack = function() {
    this.s=[];//s is stack
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.s.length===0){
        //in stack push an array [val,val]-here 0th = element 
        //and 1st=min element found till now 
        //as stack is empty so min val is same as val(element)
        this.s.push([value, value]);
    }
    else{//if length is not 0
        //min val should be min of both curr val(element) and last minVal
        //and last minVal is at the top of the stack with array of 1st index
        //and 0th index is last element pushed
        let minVal = Math.min(value, this.s[this.s.length-1][1]);
        this.s.push([value, minVal]);//each time push an array remeber
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop();//dont return anything as its given void so just pop
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //return last pushed element in stack as we pushed array [ement, minval]
    //so element is 1st index
    return this.s[this.s.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //same as above like last pushed array we have 1st index of as as minVal
    return this.s[this.s.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */