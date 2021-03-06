import { pow } from './pow.js';

/**
 * Calculates the cube of a number. For arrays, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The cube of `a`. Returns an array with the the cubes of each element if `a` is an array.
 *
 * @example
 * cube(-3) // returns -27
 * cube([3, 4, 5]) // returns [27, 64, 125]
 */

export function cube(a) {
  return pow(a, 3);
}
