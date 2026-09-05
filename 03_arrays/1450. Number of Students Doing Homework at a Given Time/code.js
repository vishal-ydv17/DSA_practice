//LOGIC- check if querytime lie in between startTime and endTime or not
var busyStudent = function(startTime, endTime, queryTime) {

    let count=0;
    
    for(let i=0; i<startTime.length; i++){

        if(startTime[i] <= queryTime && queryTime <= endTime[i]){

            count++;
        }
    }

    return count;
};
console.log(busyStudent([1,2,3], [3,2,7], 4)); //1
console.log(busyStudent([4], [4], 4)); //1
console.log(busyStudent([4], [4], 5)); //0