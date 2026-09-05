//without map
var slowestKey = function(releaseTimes, keysPressed) {

    let maxDuration= releaseTimes[0];
    let resultChar= keysPressed[0];

    for(let i=0; i<releaseTimes.length-1;i++){

        let duration = releaseTimes[i+1]-releaseTimes[i];//duration for key at index i+1
        //update only if
        //longer duration found OR
        //same duration so choose lexicographically larger character
        if(duration > maxDuration || 
            (duration == maxDuration && keysPressed[i+1] > resultChar)){

            maxDuration= duration;
            resultChar= keysPressed[i+1];
        }
    }

    return resultChar;
};
console.log(slowestKey([9,29,49,50],"cbcd")); //c
console.log(slowestKey([12,23,36,46,62],"spuda")); //a
console.log(slowestKey([1,2,3,4,5,6,7,8,9,10],"abcdefghij")); //j

// brute force
// //LOGIC- use the duration map to store the actual time taken and now find the max time taken and its index if same time mean tie then choose lexicographically larger character
// var slowestKey = function(releaseTimes, keysPressed) {
    
//     let duration= new Map();
//     duration.set(0, releaseTimes[0]);//for 0 index time is as it is

//     for(let i=1; i<releaseTimes.length; i++){

//         duration.set(i, releaseTimes[i]-releaseTimes[i-1]);
//     }

//     //find the max value and its index  from map duration
//     let max_duration=0;
//     let duration_index=-1;

//     for(let i=0; i<duration.size; i++){

//         let currentTime= duration.get(i);

//         if(currentTime > max_duration || 
//             (currentTime==max_duration && keysPressed[i] > keysPressed[duration_index])){
//             //if tie then choose larget character
//             max_duration= currentTime;
//             duration_index= i;
//         }
//     }

//     return keysPressed[duration_index];
// };