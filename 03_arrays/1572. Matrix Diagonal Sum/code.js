
var diagonalSum = function(mat) {
    
    let sum=0;

    for(let r=0; r<mat.length; r++){
        //sum all values from primary diagonal (r,r) eg: [1,1],[2,2]...
        sum += mat[r][r];

        //sum all value from Secondary diagonal: (r, n-1-r) n is mat.length
        sum += mat[r][mat.length-1-r];//for even matrix length it is correct 
    }

    //for odd mat length subtract the center element (counted twice)
    if(mat.length % 2 !=0){

        let center_index= Math.floor(mat.length/2);

        sum -= mat[center_index][center_index];
    }

    return sum;
};
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); //25
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])); //8
console.log(diagonalSum([[5]])); //5