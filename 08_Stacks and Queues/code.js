//LOGIC- this.q1 mean property path dont delare it useing let,var,const
//we will use q1 as base queue thats why we code we swap it at last after the operation 
var MyStack = function() {
    this.q1= [];
    this.q2= []; 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {//note here we dont take any input when called pop
    let n= this.q1.length;

    //lopp tilll 0 to n-2 and leave n-1 as last element then pop it and store it ans
    for(let i=0; i<n-1; i++){
        this.q2.push(this.q1.shift());
    }
    //after the loop 1 last element left
    let ans = this.q1.shift();
    //swap q1 to q2 as we have pushed all the element to q2 now make q2 as q1
    //keep q1 as base for simplicity(without this also we ca do it)
    [this.q1, this.q2] = [this.q2, this.q1];

    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n= this.q1.length;
    
    for(let i=0; i<n-1;i++){//same as abive eleave last element
        this.q2.push(this.q1.shift());
    }
    let frontElement= this.q1.shift();//peek last element in q1
    //after getting last left element push it as we just need to peek
    this.q2.push(frontElement);
    //swap q1 and q1
    [this.q1, this.q2] = [this.q2, this.q1];
    return frontElement; 
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.q1.length===0){
        return true;
    }
    else{
        return false;
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */