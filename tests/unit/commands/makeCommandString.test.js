import {makeCommandString} from "../../../app/commands/makeCommandString";

test("returns string wrapped with '<>'", () => {
  const testString = "test-string"
  expect(makeCommandString(testString)).toBe("<test-string>")
});
