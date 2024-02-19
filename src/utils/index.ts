import { customAlphabet } from "nanoid";
import { UnoIdSize } from "../types";

/**
 * Shuffles the elements of the input array.
 *
 * @param {unknown[]} array - the array to be shuffled
 * @return {any[]} the shuffled array
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const shuffleArray = (array: unknown[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

/**
 * Splits a string into an array of its individual characters.
 *
 * @param {string} str - The input string to be split
 * @return {string[]} An array of individual characters
 */
export function stringToArray(str: string): string[] {
  return str.split("");
}

/**
 * Generates a custom nanoid of the specified size.
 *
 * @param {UnoIdSize} size - the size of the custom nanoid
 * @return {string} the generated custom nanoid
 */
export function customNanoId(size: UnoIdSize): string {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nanoid = customAlphabet(alphabet, size);
  return nanoid();
}

// export function stringToAlphabetIndexes(str: string): number[] {
//   const alphabet = stringToArray(
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 -_!@#$%^&*()"
//   );
//   // console.log(alphabet);
//   const indexes = [];
//   const strArray = stringToArray(str.toUpperCase());
//   for (const char in strArray) {
//     const element = strArray[char];
//     indexes.push(alphabet.indexOf(element));
//   }
//   return indexes;
// }
// export function padArray(
//   arr: unknown[],
//   targetLength: number,
//   padValue: () => number
// ) {
//   if (arr.length >= targetLength) {
//     return arr.slice(0, targetLength);
//   }
//   const padding = Array(targetLength - arr.length)
//     .fill(0)
//     .map(padValue);
//   return arr.concat(padding);
// }

export function customHash(input: string): string {
  let hash = 0;
  if (input.length === 0) {
    return hash.toString();
  }
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash.toString();
}
export function customRandomBytes(length: number): Uint8Array {
  const result = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = Math.floor(Math.random() * 256);
  }
  return result;
}
