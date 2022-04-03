export class Code {
  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
  public readonly code: string;

  constructor(id: number, title: string, description: string, code: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.code = code;
  }
}
