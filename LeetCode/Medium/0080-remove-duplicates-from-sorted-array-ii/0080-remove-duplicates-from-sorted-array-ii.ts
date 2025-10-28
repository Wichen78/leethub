function removeDuplicates(nums: number[]): number {
    if (nums.length < 3) {
        return nums.length;
    }
    let i = 1, j = 2;
    while (j < nums.length) {
        if (nums[i - 1] !== nums[i] || nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
        j++;
    }
    return i + 1;
};