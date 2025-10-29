function canJump(nums: number[]): boolean {
    if (nums.length < 2) {
        return true;
    }
    let jumpCredit = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        jumpCredit = Math.max(jumpCredit, nums[i]);
        if (jumpCredit === 0) {
            return false;
        }
        jumpCredit--;
    }
    return true;
};