function maxProfit(prices: number[]): number {
    let buyPrice = prices[0];
    let sumProfit = 0;
    const length = prices.length;
    for (let i = 1; i < length - 1; i++) {
        if (buyPrice < prices[i]) {
            if (prices[i] > prices[i + 1]) {
                sumProfit += prices[i] - buyPrice;
                buyPrice = prices[i + 1];
            }
        } else {
            buyPrice = prices[i];
        }
    }
    if (buyPrice < prices[length - 1]) {
        sumProfit += prices[length - 1] - buyPrice;
    }
    return sumProfit;
};