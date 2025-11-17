function longestCommonPrefix(strs: string[]): string {
    const sorted = strs.sort();
    const minLength = sorted.reduce((acc, cur) => cur.length < acc ? cur.length : acc, sorted[0].length);
    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    for (let i = 0; i < minLength; i++) {
        if (first.length < i) {
            return first;
        } else if (last.length < i) {
            return last;
        } else if (first[i] !== last[i]) {
            return first.substring(0, i);
        }
    }
    return first.length > last.length ? last : first;
};