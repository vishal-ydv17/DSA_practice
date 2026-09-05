//LOGIC- in arithematic progressin common difference of all the element are same
var canMakeArithmeticProgression = function(arr) {
    
    if(arr.length <2) return false;//edge case

    arr.sort((a,b)=>a-b);

    let commonDiff= arr[1]-arr[0];

    for(let i=1; i<arr.length-1; i++){//check all element have same commonDiff or not

        if(arr[i+1] - arr[i] != commonDiff) return false;
    }

    return true;
};
console.log(canMakeArithmeticProgression([3,5,1])); //true
console.log(canMakeArithmeticProgression([1,2,4])); //false