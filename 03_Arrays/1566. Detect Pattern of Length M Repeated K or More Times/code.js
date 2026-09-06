//LOGIC- 1st make a pattern string of m length by selecting from array and then run another loop and use this pattern to check the subsquent elemnt in aaray that this pattern matches or not
var containsPattern = function(arr, m, k) {
    
    if(arr.length < m*k) return false;//edge case

    for(let i=0; i<arr.length; i++){

        let count=0;
        let pattern= arr.slice(i, i+m);
        
        //check how many times this pattern repeats consecutively
        for(let j=i; j<arr.length; j +=m){

            if(arr.slice(j, j+m).toString() == pattern.toString()){

                count++;
            }
            else break;//if no pattern found
        }

        if(count >=k) return true;

    }

    return false;
};
console.log(containsPattern([1,2,4,4,4,4],1,3)); //true 
console.log(containsPattern([1,2,1,2,1,1,1,3],2,2)); //true
console.log(containsPattern([1,2,1,2,1,3],2,3)); //false