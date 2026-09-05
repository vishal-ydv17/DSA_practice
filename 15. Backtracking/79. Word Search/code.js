/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //note x = row → compare with board.length
    //y = column → compare with board[0].length
    let ans=false;

    var backtrack= (x,y,nextIndex)=>{
        //base case
        if(nextIndex===word.length){//we have found the match word exist in board
            ans=true;
            return;
        }
        //after exploring its neighbors we must restore it otherwise that cell remains # when another 
        //starting position/path tries to use it so later after checking vertical and horizontal we restore it
        let original= board[x][y];
        //mark current coordinates as # as we have already checked it
        board[x][y]='#';

        //now we check all possible both horixontally ans vertically choices what char matches we recurse there
        if(y < board[0].length-1 && board[x][y+1] === word[nextIndex]){//check for (x,y+1) cordinates(1 step right) if it match(vertically)
            backtrack(x, y+1, nextIndex+1);
        }
        if(y-1 >= 0 && board[x][y-1]=== word[nextIndex]){
            backtrack(x,y-1, nextIndex+1);//chaeck 1 step left (x,y-1)(vertically)
        }
        if(x < board.length-1 && board[x+1][y]===word[nextIndex]){//check horizontally 1 step right in board
            backtrack(x+1, y, nextIndex+1)
        }
        if(x-1 >=0 && board[x-1][y]===word[nextIndex]){//check horizontally 1 step left in board
            backtrack(x-1,y, nextIndex+1);//check ve
        }

        //lets restore teh original board[x][y] for if another position starting position tries to use it
        board[x][y]= original;
    }
    //1st search the board for which words(1st char match) then for that call the backtrack
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === word[0]){
                //call backtrack for all the char matches 
                backtrack(i,j,1);// 1 is a nextIndex after match we call for backtrack
            }
        }
    }

    return ans;
};