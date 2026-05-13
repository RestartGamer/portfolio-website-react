import { convert } from "./muiConverter";

describe("convert", () => {
  it("returns 1 for 8", () => {
    expect(convert(8)).toBe(1);
  });

  it("returns 2 for 16", () => {
    expect(convert(16)).toBe(2);
  });

  it("returns 0 for 0", () => {
    expect(convert(0)).toBe(0);
  });
});
