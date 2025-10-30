function jump(nums: number[]): number {
    if (nums.length < 2) {
        return 0;
    }
    let jumpCount = 0;
    let maxRange = nums[0];
    let i = 0;
    while (i < nums.length - 1) {
        jumpCount++;
        if (maxRange >= nums.length - 1) {
            break;
        }
        const range = nums.slice(i + 1, maxRange + 1);
        i += 1 + range.reduce((acc, cur, index) => cur + index >= range[acc] + acc ? index : acc, 0);
        maxRange = nums[i] + i;
    }
    return jumpCount;
};