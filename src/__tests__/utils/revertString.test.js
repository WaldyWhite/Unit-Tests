import { revertString } from "../../utils/revertString.js";

describe("tests for revertString function", () => {
  test("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});
