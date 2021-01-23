export const stringifyFa = function (num, level) {
  "use strict";

  function isCorrectNumber(num) {
    return /^-?(\d{1,3},?)+(\.?\d+)?$/.test(num);
  }

  if (num === null) {
    return "";
  }

  level = level || 0;

  // remove all non digits from string
  if (level === 0 && typeof num === "string" && isCorrectNumber(num)) {
    num = parseInt(num.replace(/,/g, ""));
  }

  // convert negative number to positive and get wordify value
  if (num < 0) {
    num = num * -1;
    return "منفی " + stringifyFa(num, level);
  }
  if (num === 0) {
    if (level === 0) {
      return "صفر";
    } else {
      return "";
    }
  }
  var result = "",
    yekan = [
      " یک ",
      " دو ",
      " سه ",
      " چهار ",
      " پنج ",
      " شش ",
      " هفت ",
      " هشت ",
      " نه ",
    ],
    dahgan = [
      " بیست ",
      " سی ",
      " چهل ",
      " پنجاه ",
      " شصت ",
      " هفتاد ",
      " هشتاد ",
      " نود ",
    ],
    sadgan = [
      " یکصد ",
      " دویست ",
      " سیصد ",
      " چهارصد ",
      " پانصد ",
      " ششصد ",
      " هفتصد ",
      " هشتصد ",
      " نهصد ",
    ],
    dah = [
      " ده ",
      " یازده ",
      " دوازده ",
      " سیزده ",
      " چهارده ",
      " پانزده ",
      " شانزده ",
      " هفده ",
      " هیجده ",
      " نوزده ",
    ];
  if (level > 0) {
    result += " و ";
    level -= 1;
  }

  if (num < 10) {
    result += yekan[num - 1];
  } else if (num < 20) {
    result += dah[num - 10];
  } else if (num < 100) {
    result +=
      dahgan[parseInt(num / 10, 10) - 2] + stringifyFa(num % 10, level + 1);
  } else if (num < 1000) {
    result +=
      sadgan[parseInt(num / 100, 10) - 1] + stringifyFa(num % 100, level + 1);
  } else if (num < 1000000) {
    result +=
      stringifyFa(parseInt(num / 1000, 10), level) +
      " هزار " +
      stringifyFa(num % 1000, level + 1);
  } else if (num < 1000000000) {
    result +=
      stringifyFa(parseInt(num / 1000000, 10), level) +
      " میلیون " +
      stringifyFa(num % 1000000, level + 1);
  } else if (num < 1000000000000) {
    result +=
      stringifyFa(parseInt(num / 1000000000, 10), level) +
      " میلیارد " +
      stringifyFa(num % 1000000000, level + 1);
  } else if (num < 1000000000000000) {
    result +=
      stringifyFa(parseInt(num / 1000000000000, 10), level) +
      " تریلیارد " +
      stringifyFa(num % 1000000000000, level + 1);
  }
  return result;
};
