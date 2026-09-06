//Brute force
var countNegatives = function(grid) {
    
    let count=0;

    for(let r=0; r<grid.length; r++){

        for(let c=0; c<grid[0].length; c++){

            if(grid[r][c] < 0) count++;
        }
    }

    return count;
};
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));//8
console.log(countNegatives([[3,2],[1,0]]));//0

// //method-2 as it is sorted

// var countNegatives = function(grid) {

//     let count=0;
//     let n= grid[0].length;

//     for(let row of grid){

//         let left= 0;
//         let right= n-1;

//         let firstNegative= -1; //1st -ve index

//         while(left<=right){

//             let mid= Math.floor((left+right)/2);

//             if(row[mid] < 0){

//                 firstNegative = mid;
//                 right= mid-1;
//             }
//             else{
//                 left = mid+1;
//             }
//         }

//         //if firstNegative found then only add in count
//         if(firstNegative != -1){
//             count += n-firstNegative;//all elements from firstNegative index to last index are negative
//         }
//     }
//     return count;
// }