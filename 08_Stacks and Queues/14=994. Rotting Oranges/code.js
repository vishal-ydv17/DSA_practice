/**
 * @param {number[][]} grid
 * @return {number}
 */
//LOGIC-O(n^2)we will follow 2 steps like
//step-1 add all rotten oranges indexes in queue so that later we can process it one by one
//step-2 now mark adj nodes as rotten and push in queue again till its not empty
//step-3 at last check if any fresh oranges are reamining even after processing
//Note- but we need to counts the minutes also so for that wilw we are pushing
//the oranges indexes we also push minutes at each level so that we will be able 
//to track how much minuts has been passed eg: 
var orangesRotting = function(grid) {
    let m= grid.length;//row
    let n= grid[0].length;//col

    let queue = [];

    //step-1 add all rotten oranges indexes in queue
    for(let i=0; i<m; i++){
        for(let j=0; j<n;j++){
            if(grid[i][j] === 2){
                queue.push([i, j, 0])//[row, col, minutes] for initial phase take minutes as 0
            }
        }
    }

    //step-2 mark adj nodes as rotten and push in queue again till its not empty
    let maxMinutes=0;
    while(queue.length){
        let [x, y , minutes] = queue.shift();

        //if rotten orage found at x,y then mark left,right,bottom,top as 
        //rotten orange and push in queue with update minutes  
        if(x>0 && grid[x-1][y]===1){//mark up neighbor of rotten orange as rotten 
            grid[x-1][y] = 2;
            queue.push([x-1, y, minutes+1]);
        }
        if(x<m-1 && grid[x+1][y]===1){//mark down neighbor of rotten orange as rotten 
            grid[x+1][y] = 2;
            queue.push([x+1, y, minutes+1]);
        }
        if(y>0 && grid[x][y-1]===1){//mark left neighbor side of rotten orange as rotten 
            grid[x][y-1] = 2;
            queue.push([x, y-1, minutes+1]);
        }
        if(y<n-1 && grid[x][y+1]===1){//mark right neighbor of rotten orange as rotten 
            grid[x][y+1] = 2;
            queue.push([x, y+1, minutes+1]);
        }

        //now update the maxMinutes each time 
        maxMinutes = Math.max(minutes, maxMinutes);
    }

    //check if any fresh oranges are reamining even after processing
    for(let i=0; i<m; i++){
        for(let j=0; j<n;j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    }

    return maxMinutes;
};