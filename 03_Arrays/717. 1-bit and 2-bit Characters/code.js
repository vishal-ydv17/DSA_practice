
var isOneBitCharacter = function(bits) {

    let i=0;
    while(i<bits.length-1){//check all the element in bits except last one

        if(bits[i]==0){
            i++;//move 1 step
        }else{
            i +=2//move 2 steps
        }
    }
//if after processing the while loop we reach to the last element of bits.then return true directly
    if(i==bits.length-1){
        return true;
    }else{
        return false;
    }
    //OR return i==bits.length-1;
};
console.log(isOneBitCharacter([1,0,0])); // Output: true
console.log(isOneBitCharacter([1,1,1,0])); // Output: false