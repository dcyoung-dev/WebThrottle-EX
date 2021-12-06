import {makeCommandString} from "../../../app/commands/makeCommandString";

describe('makeCommandString()', function () {
  test("returns string wrapped with '<>'", () => {
    const testString = "test-string"
    expect(makeCommandString(testString)).toBe("<test-string>")
  });
});
