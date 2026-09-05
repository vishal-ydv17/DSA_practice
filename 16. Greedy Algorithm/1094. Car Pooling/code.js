/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
//LOGIC-Build a difference array loc where boarding a passenger at from adds to loc[from] and
//dropping them off at to subtracts from loc[to] Scanning left to right and keeping a running
//sum of loc gives the exact number of passengers in the car at every point along the route if
//this running sum ever exceeds capacity the trips cant all be accommodated
var carPooling = function(trips, capacity) {
    //we take array length 1001 as given in Q constraints
    let loc = Array(1001).fill(0);//loc(location) keep the record of how many passenger are coming and going at each point
    
    //lets iterate and populate the loc(location) array
    for(let i=0; i<trips.length; i++){

        let [passenger, from, to]= trips[i];
        loc[from] = loc[from] + passenger;//add passenger in loc(location) aaray 
        loc[to] = loc[to] - passenger;//remove passenger from loc
    }

    //now we find the used capacity at each point 
    let usedCapacity=0;
    for(i=0; i<1001; i++){
        usedCapacity = usedCapacity + loc[i];
        if(usedCapacity > capacity){//here capacity is car capacity
            return false;
        }
    }   
    return true;
};