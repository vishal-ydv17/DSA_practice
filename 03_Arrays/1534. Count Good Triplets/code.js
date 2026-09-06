
var countGoodTriplets = function(arr, a, b, c) {
    
    if(arr.length < 3) return 0;

    let count=0;

    for(let i=0; i<arr.length; i++){

        for(let j=i+1; j<arr.length; j++){
            //if(Math.abs(arr[i] - arr[j]) <= a) { //early check if |arr[i] - arr[j]| > a, we skip checking all k values making it slightly more efficient.
            for(let k=j+1; k<arr.length; k++){

                if(Math.abs(arr[i]-arr[j]) <= a &&
                    Math.abs(arr[j]-arr[k]) <= b &&
                    Math.abs(arr[i]-arr[k]) <= c){

                    count++;
                }
            }
        }
    }

    return count;
};
console.log(countGoodTriplets([3,0,1,1,9,7],7,2,3)); //4
console.log(countGoodTriplets([1,1,2,2,3],0,0,1)); //0