import { delay } from "../../delay/delay.js";

describe('delay', () => {
    test("cor data", async () => {
        const res = await delay ( () => 5 * 2, 1000);
        expect(res).toBe(10);
    })
})