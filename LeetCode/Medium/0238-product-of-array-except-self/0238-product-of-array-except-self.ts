function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;
    if (length === 1) {
        return nums;
    }
    const left = new Array<number>(length);
    const right = new Array<number>(length);
    left[0] = nums[0];
    right[length - 1] = nums[length - 1];
    for (let i = 1; i < length; i++) {
        left[i] = left[i - 1] * nums[i];
        right[length - 1 - i] = right[length - i] * nums[length - 1 - i];
    }
    return left.map((val, index) => {
        if (index === 0) {
            return right[index + 1];
        } else if (index === length - 1) {
            return left[index - 1];
        } else {
            return left[index - 1] * right[index + 1];
        }
    })
};