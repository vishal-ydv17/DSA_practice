//LOGIC- iterate on each element of matrix, if you found any element==1 then find that i th row sum and then j th col sum, after that check if for that particular element that is eqal to 1 has both total rowSum==1 and colSumm==1. So then increse count
var numSpecial = function(mat) {
    
    let rows= mat.length;
    let cols= mat[0].length;

    let count=0;

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){

            if(mat[i][j]==1){

                //find row sum of i
                let rowSum=0;
                for(let c=0; c<cols; c++){

                    rowSum += mat[i][c];
                }

                //find column sum of j
                let colSum=0;
                for(let r=0; r<rows; r++){

                    colSum += mat[r][j];
                }

                //check the special cond
                if(rowSum==1 && colSum==1){
                    count++;
                }
            }
        }
    }
    return count;
};
console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]])); //1
console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]])); //3

// //Method-2  more efficient
// var numSpecial = function(mat) {

//     let rows= mat.length;
//     let cols= mat[0].length;

//     let rowSumArr= new Array(rows).fill(0);//eg: [1,2,3] //1 is 0 th row sum and 2 is 1st row sum and 3 is 2nd row sum 
//     let colSumArr= new Array(cols).fill(0);//as above

//     //find both row and col sum at same time and store it arr
//     for(let r=0; r<rows; r++){
//         for(let c=0;c<cols; c++){

//             rowSumArr[r] += mat[r][c];
//             colSumArr[c] += mat[r][c];
//         }
//     }

//     //now again iterate each element then find if element==1 and if that rowSum and colSum both ==1
//     let count=0;
//     for(let r=0; r<rows; r++){
//         for(let c=0; c<cols; c++){

//             if(mat[r][c]==1 && rowSumArr[r]==1 && colSumArr[c]==1){
                
//                 count++;
//             }
//         }
//     }

//     return count;
// }
