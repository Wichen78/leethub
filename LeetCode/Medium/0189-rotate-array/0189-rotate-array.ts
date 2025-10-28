/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    if (k === 0 || nums.length < 2) {
        return;
    }
    const copy = nums.slice(0, k % nums.length);
    for (let i = nums.length - 1; i > (k - 1) % nums.length; i--) {
        nums[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < copy.length; i++) {
        nums[(k + i) % nums.length] = copy[i];
    }
};