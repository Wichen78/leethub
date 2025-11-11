function romanToInt(s: string): number {
    const len = s.length;
    if (len === 0) {
        return 0;
    }
    let res = 0;
    for (let i = 0; i < len; i++) {
        switch (s[i]) {
            case 'I':
                if (i < len) {
                    switch (s[i + 1]) {
                        case 'V':
                            res += 4;
                            i++;
                            break;
                        case 'X':
                            res += 9;
                            i++;
                            break;
                        default:
                            res++;
                            break;
                    }
                } else {
                    res++;
                }
                break;
            case 'V':
                res += 5;
                break;
            case 'X':
                if (i < len) {
                    switch (s[i + 1]) {
                        case 'L':
                            res += 40;
                            i++;
                            break;
                        case 'C':
                            res += 90;
                            i++;
                            break;
                        default:
                            res += 10;
                            break;
                    }
                } else {
                    res += 10;
                }
                break;
            case 'L':
                res += 50;
                break;
            case 'C':
                if (i < len) {
                    switch (s[i + 1]) {
                        case 'D':
                            res += 400;
                            i++;
                            break;
                        case 'M':
                            res += 900;
                            i++;
                            break;
                        default:
                            res += 100;
                            break;
                    }
                } else {
                    res += 100;
                }
                break;

            case 'D':
                res += 500;
                break;
            case 'M':
                res += 1000;
                break;
            default:
                res--;
                break;
        }
    }
    return res;


};