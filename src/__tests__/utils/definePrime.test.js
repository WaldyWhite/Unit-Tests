import { definePrime } from "../../utils/definePrime.js";

describe("tests for definePrime function", () => {
  const simple = 19;
  const complex = 22;

    test("should operate correctly with simple number", () => {
      expect(definePrime(simple)).toBe(`Number ${simple} - Prime number`);
    });

    test("should operate correctly with complex number", () => {
      expect(definePrime(complex)).toBe(`Number ${complex} - Composite number`);
    });
    
    test("should operate correctly with invalid number", () => {
      expect(definePrime(1001)).toBe("Data is incorrect");
    });
});

