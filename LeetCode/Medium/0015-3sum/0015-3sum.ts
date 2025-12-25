function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res = {};
    const length = nums.length;
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            const k = findIndex(nums, j + 1, - nums[i] - nums[j]);
            if (k > 0) {
                const triplet = [nums[i], nums[j], nums[k]];
                res[triplet.toString()] = triplet;
            }
        }
    }
    return Object.values(res);

};

function findIndex(nums: number[], minIndex: number, target: number) {
    const length = nums.length;
    if (nums[length - 1] < target) {
        return -1;
    }
    let left = minIndex, right = length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const guess = nums[mid];
        if (guess === target) {
            return mid;
        } else if (guess > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}