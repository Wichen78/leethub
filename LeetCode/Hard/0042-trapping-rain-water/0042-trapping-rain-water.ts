function trap(height: number[]): number {
    let water = 0;
    let i = 0;
    while (i < height.length) {
        if (height[i] > 0 || i < height.length - 1 && height[i] > height[i + 1]) {
            let nextStep = i + 1;
            for (let h = 1, j = 1; h <= height[i] && i + j < height.length; h++, j = 1) {
                while (i + j < height.length && height[i + j] < h) {
                    j++;
                }
                if (i + j >= height.length) {
                    break;
                } else if (j === 1) {
                    h = height[i + j];
                } else {
                    water += j - 1;
                }
                if (h === 1) {
                    nextStep = i + j;
                }
            }
            i = nextStep;
        } else {
            i++;
        }
    }
    return water;
};