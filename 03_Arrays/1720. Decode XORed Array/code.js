//LOGIC-main logic is its given formula lets change it 
//give that: encoded[i] = arr[i] XOR arr[i + 1]
// change to: encoded[i] XOR arr[i + 1] = arr[i]  by XOR property as it is 
//commutativa and associative mean orderna dgouping does not matter
//as we in question already give encoded[i] and arr[i + 1] so we can 
//easily find arr[i] mean all original arr elemet can be found

var decode = function(encoded, first) {
    
    let originalArray=[];
    originalArray.push(first);//arr[0] is given as fist

    for(let i=0; i<encoded.length; i++){

      //arr[i+1] = encoded[i] ^ arr[i]  same as
        let temp = encoded[i] ^ originalArray[i];

        originalArray.push(temp);
    }

    return originalArray;
};