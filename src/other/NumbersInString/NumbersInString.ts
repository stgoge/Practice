export default (input: string): number => {
  return input
    .split(" ")
    .map((word) => word.split("").filter((char) => !isNaN(Number(char))))
    .map((el) => el.length > 0 && el[0] + "" + el[el.length - 1])
    .reduce((acc, el) => acc + +el, 0);
};
