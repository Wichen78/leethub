function isPalindrome(s: string): boolean {
    if (s.length < 2) {
        return true;
    }
    const sLow = s.toLowerCase();
    let i = 0, j = s.length - 1;
    do {
        if (isValidChar(sLow[i]) && isValidChar(sLow[j])) {
            if (sLow[i] !== sLow[j]) {
                return false;
            } else {
                i++;
                j--;
            }
        } else {
            if (isValidChar(sLow[i])) {
                j--;
            } else {
                i++;
            }
        }
    } while (i <= j);
    return true;
};

function isValidChar(s: string): boolean {
    return s.length === 1 && (s >= '0' && s <= '9' || s >= 'a' && s <= 'z');
}