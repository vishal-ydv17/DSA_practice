
var canBeEqual = function(target, arr) {

    if(arr.length != target.length) return false;

    //if we sort then check weather each element is equa or not even duplicates 
    target.sort((a,b)=>a-b);
    arr.sort((a,b)=>a-b);
    
    for(let i=0; i<arr.length; i++){

        if(arr[i] != target[i]){
            return false;
        }        
    }
    return true;
//OR return JSON.stringify(arr) === JSON.stringify(target); //write this line and remove for loop
};
console.log(canBeEqual([1,2,3,4], [2,4,1,3])); //true
console.log(canBeEqual([7], [7])); //true
console.log(canBeEqual([3,7,9], [3,7,11])); //false