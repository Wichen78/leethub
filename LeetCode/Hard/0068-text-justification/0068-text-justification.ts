function fullJustify(words: string[], maxWidth: number): string[] {
    const justified = [];
    let acc = [];
    for (let i = 0, accLength = 0; i < words.length; i++) {
        if (accLength + words[i].length === maxWidth) {
            acc.push(words[i]);
            justified.push(acc.join(' '));
            acc = [];
            accLength = 0;
        } else if (accLength + words[i].length > maxWidth) {
            justified.push(lineJustify(acc, maxWidth));
            acc = [words[i]];
            accLength = words[i].length + 1;
        } else {
            acc.push(words[i]);
            accLength += words[i].length + 1;
        }
    }
    if (acc.length > 0) {
        const lastLine = acc.join(' ');
        justified.push(lastLine + ' '.repeat(maxWidth - lastLine.length));
    } else {
        const lastLine = justified.pop().split(' ').filter(s => s.length).join(' ');
        justified.push(lastLine + ' '.repeat(maxWidth - lastLine.length));
    }
    return justified;
};

function lineJustify(words: string[], maxWidth: number): string {
    const length = words.length;
    let res = words[0];
    let spaces = maxWidth - words.join('').length;
    for (let i = 1; i < length; i++) {
        const space = Math.ceil(spaces / (length - i));
        res += ' '.repeat(space) + words[i];
        spaces -= space;
    }

    return res + ' '.repeat(spaces);
};