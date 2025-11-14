function findMaxConsecutiveOnes(nums: number[]): number {
    let maxcount = 0;
    let curcount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            curcount++;
        } else {
            if (curcount > maxcount) {
                maxcount = curcount;
            }
            if (maxcount > nums.length - i) {
                break;
            }
            curcount = 0;
        }
    }
    if (curcount > maxcount) {
        return curcount;
    }
    return maxcount;
};