var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    
    // shift the cell for k times
    for(let shift = 0; shift < k; shift++) {
        let newGrid = Array(m).fill().map(() => Array(n).fill(0));
        
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                // Calculate new position
                if(j < n - 1) {//for normal i,j
                    newGrid[i][j + 1] = grid[i][j];
                } 
                else if(i < m - 1 && j==n-1) {
                    newGrid[i + 1][0] = grid[i][j];
                } 
                else if(i==m-1 && j==n-1){
                    newGrid[0][0] = grid[i][j];
                }
            }
        }
        //copy back to grid as may be k>1 so to perform k times this operationa 
        grid = newGrid;//we can directly copy the reference to grid as arrays are objects in js and can be direcctly copied(not copy but copy reference)
    }
    
    return grid;
};
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)); //[[9,1,2],[3,4,5],[6,7,8]]
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4)); //[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9)); //[[1,2,3],[4,5,6],[7,8,9]]