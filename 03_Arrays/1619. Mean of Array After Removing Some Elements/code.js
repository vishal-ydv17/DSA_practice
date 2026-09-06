
var trimMean = function(arr) {
    
    if(arr.length <=0) return 0;//edge case

    arr.sort((a,b)=>a-b);
    let n= arr.length;

    let minRemove= Math.floor(n * 0.05);//roundoff if comes in decimal form
    //let maxRemove= Math.floor(n * 0.05);//give same as minRemove so we use minRemove

    let sum=0;
    let remainingCount=0;

    for(let i=minRemove; i<n-minRemove; i++){

        sum += arr[i];
        remainingCount++;
    }

    return sum/remainingCount;
};
console.log(trimMean([1,2,3,4,5,6,7,8,9,10])); //5.5
console.log(trimMean([6,2,7,5,1,2,0,3,4,8])); //4.0
console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4])); //4.777777777777778