"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soma_1 = require("main/soma");
describe("soma teste", () => {
    test("soma teste", () => {
        const sut = (0, soma_1.soma)(1, 2);
        expect(sut).toBe(3);
    });
});
//# sourceMappingURL=index.test.js.map