import NumbersInString from "../NumbersInString";

test.only("NumbersInString", () => {
  const input = "23nmnn3 6nkn5 klnon onin3nn 234lnkjnkjnrb3n45";
  // 23 + 65 + 33 +25 = 146
  expect(NumbersInString(input)).toBe(146);
});
