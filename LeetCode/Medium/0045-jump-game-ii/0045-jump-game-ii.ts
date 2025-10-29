function jump(nums: number[]): number {
    if (nums.length < 2) {
        return 0;
    }
    const jumpArray = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i] && i + j + 1 < nums.length; j++) {
            if (jumpArray[i + j + 1] > jumpArray[i] || jumpArray[i + j + 1] === 0) {
                jumpArray[i + j + 1] = jumpArray[i] + 1;
            }
        }
    }
    return jumpArray[jumpArray.length - 1];
};