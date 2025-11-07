function candy(ratings: number[]): number {
    const len = ratings.length;
    const res = new Array<number>(len).fill(1);
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            if (res[i] <= res[i - 1]) {
                res[i] = res[i - 1] + 1;
            }
        }
        if (ratings[len - i - 1] > ratings[len - i]) {
            if (res[len - i - 1] <= res[len - i]) {
                res[len - i - 1] = res[len - i] + 1;
            }
        }
    }
    return res.reduce((a, b) => a + b, 0);
};