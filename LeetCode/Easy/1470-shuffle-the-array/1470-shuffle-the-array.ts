function shuffle(nums: number[], n: number): number[] {
    const ans = new Array(2 * n);
    for (let i = 0; i < n; i++) {
        ans[2 * i] = nums[i];
        ans[2 * i + 1] = nums[i + n];
    }
    return ans;
};