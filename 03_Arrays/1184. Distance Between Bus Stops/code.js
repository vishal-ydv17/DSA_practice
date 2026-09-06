/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    
    let leftSum=0;//clockwise
    let totalSum=0;

    if(start>destination) {//swap if start>destination // edge case
        [start,destination] = [destination, start];
    }

    for(let i=0; i<distance.length; i++){
        
        totalSum += distance[i];

        if(i>=start && i<destination){
            leftSum += distance[i];
        }
    }

    let rightSum= totalSum - leftSum; //anticlockwise

    return Math.min(leftSum, rightSum);
};
console.log(distanceBetweenBusStops([1,2,3,4], 0, 1)); //1
console.log(distanceBetweenBusStops([1,2,3,4], 0, 2)); //3
console.log(distanceBetweenBusStops([1,2,3,4], 0, 3)); //4