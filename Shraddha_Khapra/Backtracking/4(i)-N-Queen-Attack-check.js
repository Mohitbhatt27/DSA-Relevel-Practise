//Now we will also add an isSafe function which will tell if it's safe to place our Queen, before placing our Queen

//Just place N queen in N rows, and print all possible solution. Do not care if Queens are attacking each other or not

function main(n){
    let board=Array(n);
    for(let i = 0; i < n; i++){
        board[i]=Array(n).fill('.');
    }
    nQueens(board,0);
}

function nQueens(board,row){
    if(row==board.length){
        console.log(board);
        return;
    }

    for (let j = 0; j<board.length; j++){
        //only placing Queens if it's safe to place it
        if(isSafe(board,row,j)){
            board[row][j] = "Q";
            nQueens(board, row + 1);
            board[row][j] = ".";
        }
    }
}

function isSafe(board,row,col){
    //we are placing our Queens fromtop to bottom, so we don't need to check down

    //checking vertically up
    for(let i = 0; i<row; i++){
        if(board[i][col]=='Q')
        return false;
    }
    //checking diagnally left up
    for (let i = row-1, j = col-1; i >=0 && j>=0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }
    //checking diagonally right up
    for (let i = row - 1, j = col + 1; i >= 0 && j < board[0].length; i--, j++) {
      if (board[i][j] == 'Q') return false;
    }    
    return true;
}

main(9);