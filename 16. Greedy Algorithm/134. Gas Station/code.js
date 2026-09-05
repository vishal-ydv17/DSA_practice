/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//sol-1 (single pass)
//LOGIC-track two sums currGain (running gas balance from the current candidate starting point)
//and totalGain (overall gas balance across the entire trip) Whenever currGain drops below 0
//none of the stations tried so far could work as a start — reset currGain to 0 and try starting
//from the next station (i+1) If totalGain is non-negative overall the last recorded starting
//candidate is guaranteed to work otherwise no valid start exists
var canCompleteCircuit = function(gas, cost) {
    
    let ans=0;//it stores the index that did we form the cycle or not means it return the station index
    let currGain=0;
    let totalGain=0;

    for(let i=0; i<gas.length; i++){

        let gain = gas[i] - cost[i];
        currGain += gain; 
        totalGain += gain;

        if(currGain < 0){
            ans = i+1;// if we run out of gas here try starting from the NEXT station instead
            currGain= 0;// reset running gain for the new starting point
        }
    }
    if(totalGain >= 0) return ans;// if overall gas >= overall cost a valid start exists

    return -1;
};


// //sol-2 (two pointers)
// //LOGIC-seed tank with the station at end (starting at n-1) then grow a wrap-around route using
// //two pointers extend forward (start++ adding before moving) whenever tank stays non-negative
// //or extend backward (end-- moving before adding) whenever tank goes negative this asymmetry
// //ensures every station gets counted exactly once now once end and start meet all stations are 
// //covered if the final tank is non-negative end is a valid starting index otherwise no solution exists
// var canCompleteCircuit = function(gas, cost) {
//     let n= gas.length;
//     let end= n-1;
//     let start= 0;
//     // seed tank with the end pointers starting station (n-1) — this station
//     // will never be re-added later as end only decreases from here
//     let tank= gas[end]-cost[end];//tank is runnung sum of fuel stored thoughout the route

//     while(end>start){

//         if(tank >= 0){//greater menas route so far is sustainable — grow FORWARD
//             tank += gas[start]-cost[start];
//             start++;
//         }
//         else{//route so far has a deficit — grow BACKWARD
//             end--;
//             tank += gas[end]-cost[end];
//         }
//     }
//     //now once the pointers meet all n stations have been included in tank exactly once
//     if(tank >=0){
//         return end;//end is the valid starting station index
//     }
//     return -1;
// }