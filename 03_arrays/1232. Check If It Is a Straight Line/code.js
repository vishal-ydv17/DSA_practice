var checkStraightLine = function(coordinates) {

    if(coordinates.length < 2) return false;
    if(coordinates.length == 2) return true;//only 2 points will always form st-line 
    
    //use first two points as reference
    let x0 = coordinates[0][0];
    let y0 = coordinates[0][1];
    let x1 = coordinates[1][0];
    let y1 = coordinates[1][1];
    
    //we use 3 points to get 2 slopes and check weather 2 slopes equal or not
    for(let i = 2; i < coordinates.length; i++) {
        let x2 = coordinates[i][0];
        let y2 = coordinates[i][1];
        
        //ceck if (y1-y0)/(x1-x0) == (y2-y0)/(x2-x0) using cross multiplication
        if((y1 - y0) * (x2 - x0) != (y2 - y0) * (x1 - x0)) {
            return false;
        }
    }
    
    return true;
};
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); //true
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])); //false