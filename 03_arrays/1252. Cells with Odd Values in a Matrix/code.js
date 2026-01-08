/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 //LOGIC = initially we have all values as 0 in matrix. now for this eg [[0,1],[1,1]] we take [0,1] and inrement row-0 by 1 and then increamenr col-1 by 1 similarly for [1,1] alos do this
//=assume a matrix that we studied in class 10th
var oddCells = function(m, n, indices) {
    
    let matrix= [];
    for(let i=0; i<m; i++){//to create somthing like [[0,0],[0,0]]
        matrix[i] = new Array(n).fill(0);
    }
    //OR let matrix = Array(m).fill().map(() => Array(n).fill(0));

    for(let [r,c] of indices){

        //increment row means fix row and change col then you get each cell 
        for(let j=0; j<n; j++){

            matrix[r][j]++;
        }
        //increment col mean fix col and change row
        for(let i=0; i<m; i++){
            
            matrix[i][c]++;
        }
    }

    //count all odd cell in matrix array
    let count=0;
    for(let r=0; r<matrix.length; r++){
        for(let c=0; c<matrix[r].length;c++){

            if(matrix[r][c] %2 !=0){
                count++;
            }
        }
    }

    return count;
};
console.log(oddCells(2,3,[[0,1],[1,1]])); //6
console.log(oddCells(2,2,[[1,1],[0,0]])); //0