/**
 * @param {number[][]} moves
 * @return {string}
 */
 //LOGIC= If a player fills a row completely:For A: +1 +1 +1 = +3,For B: -1 -1 -1 = -3 and We check absolute value |sum| == 3

var tictactoe = function(moves) {
    
    let row=[0,0,0];
    let col=[0,0,0];
    let diag=0; //Main diagonal: Cells where row == col eg: (0,0), (1,1), (2,2)
    let antiDiag=0; //Anti-diagonal: Cells where row + col == 2 eg: (0,2), (1,1), (2,0)

    for(let i=0; i<moves.length; i++){

        let [r, c]= moves[i];

        let player=0;
        // divide by 2 means we only check for player A if he wins and he star 1st each time
        if(i%2==0) player= 1  //if A make move in tic toe then set 1
        else player= -1 //if B make move on tic toe then set -1

        row[r] += player;
        col[c] += player;

        if(r==c) diag += player;
        if(r+c==2) antiDiag += player;

        //check who win
        if(Math.abs(row[r])===3 || Math.abs(col[c])===3 || 
            Math.abs(diag)===3 || Math.abs(antiDiag)===3){

            if(player== 1) return "A"// A wins
            else return "B" // B wins as player=-1
        }
        
    }

    //edge case given in Q
    return moves.length===9 ? "Draw" : "Pending";
};
console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); //"A"
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])); //"B"
console.log(tictactoe([[0,0],[1,1],[2,2],[1,0],[1,2],[0,1],[0,2],[2,0],[2,1]])); //"Draw"
console.log(tictactoe([[0,0],[1,1]])); //"Pending"