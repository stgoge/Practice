export default class InnerUrl {
  private _url: URL;
  constructor(url: string) {
    this._url = new URL(url);
  }
  getScheme() {
    return this._url.protocol.substring(0, this._url.protocol.length - 1);
  }
  getHostName() {
    return this._url.hostname;
  }
  getQueryParams() {
    const result: Record<string, string> = {};
    for (const [key, value] of this._url.searchParams.entries()) {
      result[key] = value;
    }
    return result;
  }
  getQueryParam(key1: string, key2?: string): string {
    const params = this.getQueryParams();
    return params[key1] ?? key2 ?? null;
  }
  equals(url: InnerUrl): boolean {
    return this._url.href === url._url.href;
  }
}
