//@ts-nocheck
import util from "util";
import Course from "./Course.js";
import protect from "./protect.js";

const hexletCourse = {
  name: "Объектно-ориентированный дизайн",
  language: "JS",
  created: new Date(),
};

test("Using Proxy", () => {
  const course = protect(new Course(hexletCourse));
  expect(util.types.isProxy(course)).toBe(true);
});

test.each([
  [(course: Course) => course.language, hexletCourse.language],
  [(course: Course) => course.created, hexletCourse.created],
  [
    (course: Course) => course.getName(),
    `${hexletCourse.language}: ${hexletCourse.name}`,
  ],
])("Check getters %#", (getter, expected) => {
  const course = protect(new Course(hexletCourse));
  expect(getter(course)).toEqual(expected);
});

test.each([
  (course: Course) => course._created,
  (course: Course) => course._getCreated(),
  (course: Course) => course._name,
])("Check getters direct access %#", (getter) => {
  const course = protect(new Course(hexletCourse));
  expect(() => getter(course)).toThrow();
});

test("Check setters", () => {
  const course = protect(new Course(hexletCourse));
  const language = "JavaScript";
  const name = "Object-oriented design";

  expect(() => {
    course.language = language;
  }).not.toThrow();
  expect(course.language).not.toEqual(hexletCourse.language);
  expect(course.language).toEqual(language);
  expect(course.getName()).toEqual(`${language}: ${hexletCourse.name}`);

  expect(() => {
    course.setName(name);
  }).not.toThrow();
  expect(course.getName()).not.toEqual(`${language}: ${hexletCourse.name}`);
  expect(course.getName()).toEqual(`${language}: ${name}`);

  expect(() => {
    course.getName = function getName() {
      return this._name;
    };
  }).not.toThrow();
  expect(course.getName()).toEqual(name);
});

test("Check setters direct access", () => {
  const course = protect(new Course(hexletCourse));
  expect(() => {
    course._name = "OOD";
  }).toThrow();
  expect(course.getName()).toEqual(
    `${hexletCourse.language}: ${hexletCourse.name}`
  );

  expect(() => {
    course.created = new Date("01.01.2001");
  }).toThrow();
  expect(course.created).toEqual(hexletCourse.created);

  expect(() => {
    course._getCreated = function _getCreated() {
      return this._name;
    };
  }).toThrow();
  expect(course.created).toEqual(hexletCourse.created);
});

test.each([
  (course: Course) => {
    course._language = hexletCourse.language;
  },
  (course: Course) => {
    course.notExists = hexletCourse.language;
  },
  (course: Course) => course._language,
  (course: Course) => course._duration,
  (course: Course) => course.name,
  (course: Course) => course.getLanguage(),
  (course: Course) => course._getLanguage(),
])("Check nonexistent %#", (getter) => {
  const course = protect(new Course(hexletCourse));
  expect(() => getter(course)).toThrow();
});
