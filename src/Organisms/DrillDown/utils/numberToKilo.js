// convert number to kilo
// use to convert 1000, 10000, 100000 to 1k 10k 100k
// use to convert decimal 1200, 12300, 123300 to 1.2k 12.3k 123.3k

export default function numberToKilo(number) {
  const stringNumber = String(number);
  let placeholder;
  switch (stringNumber.length) {
    case 4:
      placeholder =
        Number(stringNumber[1]) !== 0
          ? `${stringNumber[0]}.${stringNumber[1]}k`
          : `${stringNumber[0]}k"`;
      break;
    case 5:
      placeholder =
        Number(stringNumber[2]) !== 0
          ? `${stringNumber[0]}${stringNumber[1]}.${stringNumber[2]}k`
          : `${stringNumber[0]}${stringNumber[1]}k`;
      break;
    case 6:
      placeholder =
        Number(stringNumber[3]) !== 0
          ? `${stringNumber[0]}${stringNumber[1]}${stringNumber[2]}.${
              stringNumber[3]
            }k`
          : `${stringNumber[0]}${stringNumber[1]}${stringNumber[2]}k`;
      break;
    default:
      return placeholder;
  }
  return placeholder;
}
