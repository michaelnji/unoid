import { test, expect, it, describe } from "vitest";
import { generateRefId, generateProductId } from "../../src";
function generateRandomProductNameArray(amount: number): string[] {
  const arrayLength = amount;
  const minNameLength = 1;
  const maxNameLength = 50;
  const productNameArray: string[] = [];

  for (let i = 0; i < arrayLength; i++) {
    const nameLength =
      Math.floor(Math.random() * (maxNameLength - minNameLength + 1)) +
      minNameLength;
    const productName = generateRandomName(nameLength);
    productNameArray.push(productName);
  }

  return productNameArray;
}

function generateRandomName(length: number): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

test("generateRefId should have the correct length", () => {
  const id = generateRefId(new Date(), 32);
  expect(id.length).toBe(32); // Assuming this.size is 11
});

test('generateRefId should start with "REF-"', () => {
  const id = generateRefId();
  expect(id.startsWith("REF-")).toBe(true);
});

test('generateRefId should generate 150,000 unique ids"', () => {
  const amount = 150000;
  const ids = [];
  for (let i = 0; i < amount; i++) {
    ids.push(generateRefId(new Date(), 32));
    if (i < 10) console.log(ids[i]);
  }
  const finals = new Set(ids);
  expect(finals.size).toBe(amount);
});

describe("generateProductId", () => {
  it("should generate a product id for a short name", () => {
    const result = generateProductId("shirt");
    console.log(result);
    expect(result).toBeGreaterThan(0);
    expect(result.toString().length).toBeGreaterThanOrEqual(5);
  });

  it("should generate a product id for a long name", () => {
    const result = generateProductId("thisisalongproductname");
    console.log(result);
    expect(result).toBeGreaterThan(0);
    expect(result.toString().length).toBeGreaterThanOrEqual(5);
  });

  it("should generate a product id for a name with special characters", () => {
    const result = generateProductId("!@#$%^&*()");
    console.log(result);
    expect(result).toBeGreaterThan(0);
    expect(result.toString().length).toBeGreaterThanOrEqual(5);
  });
});

test('generateProductId should generate 150,000 unique ids"', () => {
  const amount: string[] = generateRandomProductNameArray(150000);
  const ids = [];
  for (let i = 0; i < amount.length; i++) {
    ids.push(generateProductId(amount[i]));
    if (i < 10) console.log(ids[i]);
  }
  const finals = new Set(ids);
  expect(finals.size).toBe(amount.length);
});
