function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        const row = board[i];
        const col = board.map(r => r[i]);
        const square = getSquare(board, i);

        if (!verify(row) || !verify(col) || !verify(square)) {
            return false;
        }

    }
    return true;
};

function getSquare(board: string[][], index: number): string[] {
    if (index % 3 === 0) {
        return [board[index], board[index + 1], board[index + 2]].flatMap(row => row.slice(0, 3));
    } else if (index % 3 === 1) {
        return [board[index - 1], board[index], board[index + 1]].flatMap(row => row.slice(3, 6));
    } else {
        return [board[index - 2], board[index - 1], board[index]].flatMap(row => row.slice(6, 9));
    }
}

function verify(...inputs: (string | string[])[]): boolean {
    const values = inputs.flatMap(v => Array.isArray(v) ? v : [v]).filter(v => v != ".");
    return new Set(values).size === values.length;
}
