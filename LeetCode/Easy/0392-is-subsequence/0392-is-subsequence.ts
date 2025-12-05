function isSubsequence(s: string, t: string): boolean {
    if(s.length === 0) {
        return true;
    }
    if(s.length > t.length) {
        return false;
    }
    let sI = 0, tI = 0;
    do {
        if(s[sI] === t[tI]) {
            sI++;
            tI++;
        } else {
            tI++;
        }
    } while(sI < s.length && tI < t.length && s.length - sI <= t.length - tI);
    return sI === s.length;
};