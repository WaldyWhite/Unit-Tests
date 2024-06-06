import { multiply, division } from "../index.js";

describe("test multiply", () => {
  test("multiply 1 * 0 to equal 0", () => {

    expect(multiply(1, 0)).toBe(0);

  }),

  test("multiply 1 * 1 to equal 1", () => {

    expect(multiply(1, 1)).toBe(1);
    
    });
});

describe( "test division", () => {
  test("division by 0", () => {
    expect(division(2, 0)).toBe("You can't divide by zero!")
  });
})
