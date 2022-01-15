module.exports = function toReadable(number) {
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numStr = number.toString();

    if (number === 0) {
        return "zero";
    } else if (number < 10) {
        return ones[number];
    } else if (number < 20) {
        return teens[numStr[1]];
    } else if (number < 100) {
        return numStr[1] == 0
            ? tens[numStr[0]]
            : tens[numStr[0]] + " " + ones[numStr[1]];
    } else if (number >= 100 && +numStr.slice(-2) < 10) {
        return numStr[2] == 0
            ? ones[numStr[0]] + " hundred"
            : ones[numStr[0]] + " hundred " + ones[numStr[2]];
    } else if (number >= 100 && +numStr.slice(-2) < 20) {
        return ones[numStr[0]] + " hundred " + teens[numStr[2]];
    } else
        return numStr[2] == 0
            ? ones[numStr[0]] + " hundred " + tens[numStr[1]]
            : ones[numStr[0]] +
                  " hundred " +
                  tens[numStr[1]] +
                  " " +
                  ones[numStr[2]];
};
