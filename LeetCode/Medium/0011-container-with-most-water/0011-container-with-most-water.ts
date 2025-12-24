function maxArea(height: number[]): number {
    const length = height.length;
    if (length < 2) {
        return 0;
    }
    let res = 0;
    let left = 0, right = length - 1;
    while (left < right) {
        const area = computeArea(height, left, right);
        if (area > res) {
            res = area;
        }
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return res;
};

function computeArea(height: number[], i: number, j: number): number {
    return Math.min(height[i], height[j]) * (j - i);
}