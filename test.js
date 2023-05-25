var numList = [
    1,
    2,
    26 * 1 + 0,
    26 * 1 + 1,
    26 * 1 + 2,
    26 * 2 + 0,
    26 * 2 + 1,
    26 * 2 + 2,
    26 * 3 + 0,
    26 * 3 + 1,
    26 * 3 + 2,
];
var charMaxCount = 26;
var charACode = 65;
var strList = numList.map(function (num) {
    var charCodeList = [0, num];
    while (charCodeList.findIndex(function (charCode) { return charCode > 26; }) > -1) {
        for (var i = charCodeList.length - 1; i >= 0; i--) {
            var charCode = charCodeList[i];
            if (charCode > 26) {
                var remainder = charCode % charMaxCount;
                var quotient = charCode / charMaxCount;
                charCodeList[i] = remainder;
                charCodeList[i - 1] = quotient;
                charCodeList.unshift(0);
                continue;
            }
        }
    }
    return charCodeList
        .map(function (charCode) { return String.fromCharCode(charACode + charCode); })
        .join("");
});
console.log(strList);
