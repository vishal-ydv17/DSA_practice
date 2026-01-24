//LOGIC-question asks that we need to find the widest gap b/w the two points
//and question also mentions in y-axis goes to infinity 
//so it means we do not worry about y-axis and we only focus on how to find the gap b/w x consecutive-points
//so we extract the x points points then sort it and then we find the gap
var maxWidthOfVerticalArea = function(points) {
    
    let x_cordinates=[];


    for(let r=0; r<points.length; r++){
        
        x_cordinates.push(points[r][0]);
    }

    x_cordinates.sort((a,b)=>a-b);

    //lets find the gap b/w the each consecutive x cordinates
    let gap=[];
    for(let i=0;i<x_cordinates.length-1; i++){

        gap.push(x_cordinates[i+1]-x_cordinates[i]);
    }

    return Math.max(...gap);//spread operation to pass each element one by one
};
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])); //1
console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])); //3