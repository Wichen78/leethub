function intToRoman(num: number): string {
    if (num > 999) {
        return 'M' + intToRoman(num - 1000);
    } else if (num > 899) {
        return 'CM' + intToRoman(num - 900);
    } else if (num > 499) {
        return 'D' + intToRoman(num - 500);
    } else if (num > 399) {
        return 'CD' + intToRoman(num - 400);
    } else if (num > 99) {
        return 'C' + intToRoman(num - 100);
    } else if (num > 89) {
        return 'XC' + intToRoman(num - 90);
    } else if (num > 49) {
        return 'L' + intToRoman(num - 50);
    } else if (num > 39) {
        return 'XL' + intToRoman(num - 40);
    } else if (num > 9) {
        return 'X' + intToRoman(num - 10);
    } else if (num > 8) {
        return 'IX' + intToRoman(num - 9);
    } else if (num > 4) {
        return 'V' + intToRoman(num - 5);
    } else if (num > 3) {
        return 'IV' + intToRoman(num - 4);
    } else if (num > 0) {
        return 'I' + intToRoman(num - 1);
    } else {
        return '';
    }
};