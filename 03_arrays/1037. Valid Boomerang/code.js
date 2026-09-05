/**
 * @param {number[][]} points
 * @return {boolean}
 */
 //LOGIC-1= points are colinear if slope is same which given by
 // (y2 - y1)/(x2 - x1) = (y3 - y2)/(x3 - x2)
 //But to avoid division by zero, use cross multiplication:
//(y2 - y1) * (x3 - x2) = (y3 - y2) * (x2 - x1)
//LOGIC-2= area of traingle=0 if all points are on a st line
var isBoomerang = function(points) {
    
    let [p1, p2,p3] = points;//p1= p1[0],p1[1]  p2= p2[0]p2[1]  p2= p3[0]p3[1]

    //p2[1]-p1[1] / p2[0]-p1[0] == p3[1]-p2[1] / p3[0]-p2[0]
    //or can be cross multiply then can be used to avoide 0
    let slope1= (p2[1]-p1[1]) * (p3[0]-p2[0]);
    let slope2 = (p3[1]-p2[1]) * (p2[0]-p1[0]);

    if(slope1 != slope2){
        return true;
    }
    return false;
};
console.log(isBoomerang([[1,1],[2,3],[3,2]])); //true
console.log(isBoomerang([[1,1],[2,2],[3,3]])); //false  