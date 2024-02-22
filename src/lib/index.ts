import { UnoGenerator } from "../generator";
import { UnoIdSize } from "../types";
import { shuffleArray, stringToArray } from "../utils";

export function generateRefId(date: Date = new Date(), size: UnoIdSize = 21) {
  const generator = new UnoGenerator(date, size);
  return generator.generateRefId();
}

export function generateProductId(name: string) {
  const generator = new UnoGenerator(new Date(), 21);
  return parseInt(
    shuffleArray(
      stringToArray((generator.generateProductId(name) * 32).toString())
    ).join("")
  );
}
