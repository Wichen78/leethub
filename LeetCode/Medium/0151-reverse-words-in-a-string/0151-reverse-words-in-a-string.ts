function reverseWords(s: string): string {
    return s.trim().split(' ').reverse().filter((w) => w !== '').join(' ');
};