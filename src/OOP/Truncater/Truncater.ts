export default class Truncater {
  static defaultOptions = {
    separator: "...",
    length: 200,
  };
  private options: Options;
  constructor(options?: Options) {
    this.options = { ...Truncater.defaultOptions, ...options };
  }
  truncate(text: string, options?: Options) {
    const props = { ...this.options, ...options };
    let result = "";
    if (text.length > props.length) {
      result = text.substring(0, props.length) + props.separator;
    } else {
      result = text;
    }
    return result;
  }
}

type Options = {
  separator: string;
  length: number;
};
