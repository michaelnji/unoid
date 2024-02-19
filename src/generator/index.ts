import type { UnoId, UnoIdSize } from "../types";
import { customHash, customNanoId, customRandomBytes } from "../utils";

export class UnoGenerator {
  date: Date;
  size: UnoIdSize;

  constructor(date: Date, size: UnoIdSize) {
    this.date = date;
    this.size = size;
  }

  /**
   * Generates a unique UnoId.
   *
   * @return {UnoId} the generated unique UnoId
   */
  generateRefId(): UnoId {
    const body = customNanoId(this.size);
    const milliseconds = this.date.getMilliseconds();
    const seconds = this.date.getSeconds();

    const random1 = Math.abs(
      Math.floor(Math.random() * milliseconds - Math.random() - seconds)
    );
    const random2 = Math.abs(
      Math.ceil(Math.random() * Math.PI - Math.random() * Math.E)
    );
    const random3 = Math.abs(
      Math.ceil(Math.random() * milliseconds - Math.random() - seconds)
    );

    let shuffleId = `${random1}${random2}${random3}${body}`;

    if (shuffleId.length > this.size) {
      shuffleId = shuffleId.slice(-this.size + 4);
    }

    return `REF-${shuffleId}`;
  }
  generateProductId(name: string) {
    const salt = customRandomBytes(16);
    const hash = customHash(name + salt);
    const uniqueId = parseInt(hash.slice(0, 12), 16);
    return Math.abs(uniqueId);
  }
}
