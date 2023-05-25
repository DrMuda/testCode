const numList = [
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
const charMaxCount = 26;
const charACode = 65;
const strList = numList.map((num) => {
  const charCodeList: number[] = [0, num];
  while (charCodeList.findIndex((charCode) => charCode > 26) > -1) {
    for (let i = charCodeList.length - 1; i >= 0; i--) {
      const charCode = charCodeList[i];
      if (charCode > 26) {
        const remainder = charCode % charMaxCount;
        const quotient = charCode / charMaxCount;
        charCodeList[i] = remainder;
        charCodeList[i - 1] = quotient;
        charCodeList.unshift(0);
        continue;
      }
    }
  }
  return charCodeList
    .map((charCode) => String.fromCharCode(charACode + charCode))
    .join("");
});
console.log(strList);
