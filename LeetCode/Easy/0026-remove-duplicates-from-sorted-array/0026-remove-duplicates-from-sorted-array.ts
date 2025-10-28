function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0, j = 1;
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
        j++;
    }
    return i + 1;
};