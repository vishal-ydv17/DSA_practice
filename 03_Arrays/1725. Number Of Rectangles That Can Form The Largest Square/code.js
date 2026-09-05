//1-LOGIC-brute force
//in this we are iterating on each rectangle then find its min side length
//then store it in sides array 
//then use it to find the max side length and its count 
var countGoodRectangles = function(rectangles) {

    let sides=[];
    
    for(let i=0; i<rectangles.length; i++){

        let temp= Math.min(rectangles[i][0], rectangles[i][1]);
        sides.push(temp);
    }

    let maxLen= Math.max(...sides);
    let count=0;
    
    for(let num of sides){
        
        if(num==maxLen) count++;
    }

    return count;
};

//2-LOGIC-more efficient and clean
//dont use sides array we can find the maximum square size and 
//its count while traversing the rectangles and return count

// var countGoodRectangles = function(rectangles) {

//     let maxLen = 0;
//     let count = 0;

//     for (let rectangle of rectangles) {

//         let side = Math.min(rectangle[0], rectangle[1]);

//         if (side > maxLen) {
//             maxLen = side;
//             count = 1;
//         } 
//         else if (side === maxLen) {
//             count++;
//         }
//     }

//     return count;
// };