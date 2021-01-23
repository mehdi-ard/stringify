import { stringifyFa } from "stringify/dist/stringify";

export const stringifyTomans = function (num) {
    'use strict';
    if (num >= 10) {
      num = parseInt(num / 10, 10);
    } else if (num <= -10) {
      num = parseInt(num / 10, 10);
    } else {
      num = 0;
    }
  
    return stringifyFa(num, 0) + " تومان";
  };