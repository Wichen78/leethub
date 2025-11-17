function longestCommonPrefix(strs: string[]): string {
    const sorted = strs.sort();
    const minLength = sorted.reduce((acc, cur) => cur.length < acc ? cur.length : acc, sorted[0].length);
    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    for (let i = 0; i < minLength; i++) {
        if (first[i] !== last[i]) {
            return first.slice(0, i);
        }
    }
    return first.slice(0, minLength);
};