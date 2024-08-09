import Course from "./Course";

export default (course: Course) => {
  const errorCheck = (target: any, key: string) => {
    if (
      key.substring(0, 1) === "_" ||
      (Object.hasOwn(target, key) === false && target[key] === undefined)
    ) {
      throw Error(key);
    }
  };
  return new Proxy(course, {
    get: (target: any, key: string) => {
      errorCheck(target, key);
      const returned = target[key];
      if (typeof returned === "function") {
        return returned.bind(target);
      }
      return target[key];
    },
    set: (target: any, key: string, value: any) => {
      errorCheck(target, key);
      target[key] = value;
      return true;
    },
  });
};
