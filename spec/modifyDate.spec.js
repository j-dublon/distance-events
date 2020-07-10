const modifyDate = require("../utils/modifyDate");

describe("modifyDate", () => {
  test("return empty string when passed empty string", () => {
    expect(modifyDate("")).toBe("");
  });
  test("returns correctly formatted date", () => {
    expect(modifyDate("2018-05-11T19:00:00")).toBe("11/05/2018");
    expect(modifyDate("2020-09-24T08:30:00")).toBe("24/09/2020");
  });
});
