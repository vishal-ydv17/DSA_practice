 //LOGIC:push 0 and gain[0] in new gain array then start adding new altitude as go further in gain array and push alll altitude in new gain then find the max 
var largestAltitude = function(gain) {

    let newGain=[];
    newGain.push(0);

    let curr_altitude=gain[0];
    newGain.push(curr_altitude);
    
    for(let i=1; i<gain.length; i++){

        curr_altitude= curr_altitude+gain[i];

        newGain.push(curr_altitude);
    }

    return Math.max(...newGain);
};
//LOGIC: in above sol we used a array to track the all altitudes during process but question asks only max/highest altitude so that means
// We only need the largest altitude not every altitude.
// As soon as we calculate a new altitude we can immediately compare it with the highest seen so far

// var largestAltitude = function(gain) {
//     let current_altitude = 0;
//     let highest = 0;//maximum altitude seen so far

//     for (let i = 0; i < gain.length; i++) {
//         current_altitude += gain[i];
//         highest = Math.max(highest, current_altitude);
//     }

//     return highest;
// };