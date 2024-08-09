export default class Course {
  language: string;
  _name: string;
  _created: Date;
  constructor(props: { name: string; language: string; created: Date }) {
    this.language = props["language"];
    this._name = props["name"];
    this._created = props["created"];
  }

  get created() {
    return this._getCreated();
  }

  getName() {
    return `${this.language}: ${this._name}`;
  }

  _getCreated() {
    return this._created;
  }

  setName(name: string) {
    this._name = name;
  }
}
