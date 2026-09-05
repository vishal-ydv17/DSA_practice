//LOGIC-> Minimum time = max(|x2 - x1|, |y2 - y1|)
//eg; [1,1] to [3,4]
//Minimum time = max(2, 3) = 3 seconds

var minTimeToVisitAllPoints = function(points) {
    let totalTime = 0;
    
    for(let i = 0; i < points.length - 1; i++) {
        let current = points[i];
        let next = points[i + 1];
        
        //find distance in x and y
        let xDist = Math.abs(next[0] - current[0]);
        let yDist = Math.abs(next[1] - current[1]);
        
        totalTime += Math.max(xDist, yDist);
    }
    
    return totalTime;
};
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])); //7
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]])); //5