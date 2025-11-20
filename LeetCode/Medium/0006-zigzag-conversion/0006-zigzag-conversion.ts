function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }
    const res = new Array<string>(numRows).fill('');
    for (let i = 0, j = 0, ascending = true; i < s.length; i++) {
        res[j] += s[i];
        if (ascending) {
            if (j < numRows - 1) {
                j++;
            } else {
                ascending = !ascending;
                j--;
            }
        } else {
            if (j > 0) {
                j--;
            } else {
                ascending = !ascending;
                j++;
            }
        }
    }
    return res.join('');
};