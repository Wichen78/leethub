function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        const finded = findIndex(numbers, i + 1, target - numbers[i]);
        if (finded > 0) {
            return [i + 1, finded + 1];
        }
    }
    return [1, 2];
};

function findIndex(numbers: number[], minIndex: number, target: number): number {
    let left = minIndex;
    let right = numbers.length - 1;
    do {
        let mid = Math.ceil((left + right) / 2);
        if (numbers[mid] === target) {
            return mid;
        } else if (numbers[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    } while (left <= right);
    return 0;
}