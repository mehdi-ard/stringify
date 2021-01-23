import { stringifyFa } from "./stringify";

export const stringifyRials = function (num) {
    'use strict';
    return stringifyFa(num, 0) + " ریال";
  };
  