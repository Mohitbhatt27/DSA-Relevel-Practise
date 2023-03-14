//Just place N queen in N rows, and print all possible solution. Do not care if Queens are attacking each other or not

function main(n){

    //Create an empty chess board of size n x n
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

    //for now just place the queen rowwise without caring if they attack each other or not
    for (let j = 0; j<board.length; j++){
        board[row][j]='Q';
        //We have placed first queen in first row, now recursively call for next row
        nQueens(board,row+1);
        //now when the backtracking will occur, we will place another queen on these rows, this time at some other column of that row, so before that we need to delete the Queen we have placed already in that row
        board[row][j]='.';
    }

}

main(2);