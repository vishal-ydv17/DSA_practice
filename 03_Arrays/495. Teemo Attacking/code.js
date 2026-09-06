
var findPoisonedDuration = function(timeSeries, duration) {

    if(timeSeries.length==0) return 0;
    let total= 0;

    for(let i=0; i<timeSeries.length; i++){

        let gap= timeSeries[i+1]-timeSeries[i];

        if(i == timeSeries.length-1){//Last attack so always add full duration
            total +=duration;
        }else{
            //Add either full duration or just until next attack
            total += Math.min(duration, gap);
        }

    }   
    return total; 
};

console.log(findPoisonedDuration([1,4], 2)) // 4
console.log(findPoisonedDuration([1,2], 2)) // 3