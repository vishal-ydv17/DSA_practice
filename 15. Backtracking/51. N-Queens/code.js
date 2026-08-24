//LOGIC-if row === n all queens are placed validly — transform the board and save it then 
//return immediately (base case checked first not tied to any col) Otherwise try each column
//in the current row skipping ones under attack (via colSet/diaSet/antiDiaSet) placing a queen
//and recursing to row+1 with all updated sets then backtracking (removing the queen cleaning the sets)
//to try the next column
var solveNQueens = function(n) {
    
    let ans=[];
    //1-step let 1st create a board and fill with "." 
    let board=[];
    for(let i=0; i<n; i++){//or we can use 2 nested for loop also 
        board.push(Array(n).fill("."));//for 1 row fill this . 
    }

    var backtrack=(board, row, colSet, diaSet, antiDiaSet)=>{

        //6-step  base case - push in ans(see step-7 helper function simultaneoulsy)
        if(row===n){
            //console.log(board);
            ans.push(transform(board));
            return;
        }

        for(let col=0; col<n; col++){

            //2-step  dont push if Queen eleminates other Queen
            if(colSet.has(col) ||
                diaSet.has(row-col) ||  //use mathematical fomula find dia where row,col is current Q coordinates (search on google once) 
                antiDiaSet.has(row+col)){
                
                continue;
            }

            //3-step push the Q in board and update its colSet, diaSet, antiDiaSet
            board[row][col] = "Q";
            colSet.add(col);
            diaSet.add(row-col);
            antiDiaSet.add(row+col);

            //4-step  call backtrack with updated values like we used to do in permutation and combinations problem
            backtrack(board, row+1, colSet, diaSet, antiDiaSet);

            //5-step  prune/pop the Q if we do not find sol in this row and we have to remove the branch(in tree)
            board[row][col]= ".";//reset the CELL directly
            colSet.delete(col);
            diaSet.delete(row-col);
            antiDiaSet.delete(row+col);
        }
    }
    backtrack(board, 0, new Set, new Set, new Set);
            //board,col,rowSet,  diaSet,  antiDiaSet


    return ans;
};
//7-step: helper to convert board (array of char-arrays) into array of strings since
//thats the expected output format e.g. [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
var transform = (board) => {
    let newBoard = [];
    for (let i = 0; i < board.length; i++) {
        newBoard.push(board[i].join(""));  // fixed: closed the missing paren, and used newBoard consistently (was newboard/newBoard mismatch)
    }
    return newBoard;
}
//we are doing this coz we were getting answer like matrix if we console like i have done in 6-step
// [
//     [".", "Q", ".", "."],     
//     [".", ".", ".", "Q"],
//     ["Q", ".", ".", "."],
//     [".", ".", "Q", "."]
// ]
// [
//     [".", ".", "Q", "."],
//     ["Q", ".", ".", "."],
//     [".", ".", ".", "Q"],
//     [".", "Q", ".", "."]
// ]
//so we transform above matrix in like leetcode want as 
// [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]