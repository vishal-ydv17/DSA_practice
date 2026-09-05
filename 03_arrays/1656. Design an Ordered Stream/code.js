//LOGIC-declare the stream_arr and it index then use that in another by using this method to acess its values throught program and nwo use the idkey and its value to push the value into stream array
//why use this
//Inside constructor/class methods: this refers to the instance being created/used
//Without this: Variables are local and disappear after function ends
//eg: function Car(brand) {
//    this.brand = brand;  // Instance property (stays with object)
//    let color = "red";   // Local variable (disappears)
//}
//const myCar = new Car("Toyota");
//console.log(myCar.brand);  // "Toyota" ✓
//console.log(myCar.color);  // undefined ✗ (local variable)


var OrderedStream = function(n) {
    
    this.stream_arr= [];//if i use let stream_arr=[]; then i wont be able to acess after this function ends

    this.stream_index=0;
};

OrderedStream.prototype.insert = function(idKey, value) {
    
    //given in Q that idKey is bw 1 to n so decreament to put it at correct index of arr eg: 0th index 
    this.stream_arr[idKey-1]= value;//value is put into stream at correct index

    let result=[];

    while(this.stream_index < this.stream_arr.length &&
          this.stream_arr[this.stream_index]){//also check id value exist and not undefined

        result.push(this.stream_arr[this.stream_index]);
        this.stream_index++;
    }   

    return result;
};
// Now create an instance and test it
const os = new OrderedStream(7); // Create instance with capacity 7

// Test inserts
console.log("Test 1 - Insert id=3, value='ccccc':", os.insert(3, "ccccc"));
// Output: [] (because we haven't inserted at position 1 yet)

console.log("Test 2 - Insert id=1, value='aaaaa':", os.insert(1, "aaaaa"));
// Output: ["aaaaa"] (now we have consecutive value starting from index 0)

console.log("Test 3 - Insert id=2, value='bbbbb':", os.insert(2, "bbbbb"));
// Output: ["bbbbb", "ccccc"] (returns consecutive values from index 1)

console.log("Test 4 - Insert id=5, value='eeeee':", os.insert(5, "eeeee"));
// Output: [] (no consecutive values from current pointer)

console.log("Test 5 - Insert id=4, value='ddddd':", os.insert(4, "ddddd"));
// Output: ["ddddd", "eeeee"] (returns consecutive values from index 3)

console.log("Test 6 - Insert id=7, value='ggggg':", os.insert(7, "ggggg"));
// Output: [] (position 6 is still empty)

console.log("Test 7 - Insert id=6, value='fffff':", os.insert(6, "fffff"));
// Output: ["fffff", "ggggg"] (returns consecutive values from index 5)

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n) //Constructor function: A regular function that can become a constructor when called with new 
 * var param_1 = obj.insert(idKey,value)
 */