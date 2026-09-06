//LOGIC= fix 1 row then find min in row and it col index and use that col index and iterate on another row to find max row if same then return the answer else NOW change the fixed row to 1 and find the min row and repeate process
var luckyNumbers = function(matrix) {

    for(let r=0; r<matrix.length; r++){

        let minInRow= Infinity;
        let colIndex=-1;
        //find min val in each row then update its column and use that column index to find  max in column
        for(let c=0; c<matrix[0].length; c++){

            if(matrix[r][c] < minInRow ) {

                minInRow= matrix[r][c];
                colIndex=c;
                
            }
        }

        let maxInCol= -Infinity;
        //iterating on each row to find max column by using column index found from min val in row
        for(let i=0; i<matrix.length; i++){

            if(matrix[i][colIndex] > maxInCol){

                maxInCol=matrix[i][colIndex];
                
            }
        }

        if(minInRow==maxInCol) return [maxInCol];

    }

    return [];//this condition never executes
};
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));//[15]
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));//[12]
console.log(luckyNumbers([[7,8],[1,2]]));//[7]