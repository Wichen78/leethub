/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const res = nums1.slice(0, m);
    res.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0, j = 0;
    while (i + j < m + n) {
        if (j === n || i < m && res[i] < nums2[j]) {
            nums1[i + j] = res[i];
            i++;
        } else {
            nums1[i + j] = nums2[j];
            j++
        }
    }
};