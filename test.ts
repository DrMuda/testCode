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

  26 * 26 + 0,
  26 * 26 + 1,
  26 * 26 + 2,

  26 * 27 + 0,
  26 * 27 + 1,
  26 * 27 + 2,

  26 * 28 + 0,
  26 * 28 + 1,
  26 * 28 + 2,
];
const charMaxCount = 26;
const charACode = 65;
const strList = numList.map((num) => {
  const charCodeList: number[] = [num];
  while (charCodeList[0] > 26) {
    const remainder = charCodeList[0] % charMaxCount || 26;
    const quotient = Math.floor((charCodeList[0] - 0.1) / charMaxCount);
    charCodeList[0] = remainder;
    charCodeList.unshift(quotient);
  }
  return charCodeList
    .map((charCode) => String.fromCharCode(charACode + charCode - 1))
    .join("");
});
console.log(strList);
