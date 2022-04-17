export class Code {
  public readonly id: number;
  public readonly title: string;
  public readonly secondaryText: string;
  public readonly code: string;

  constructor(id: number, title: string, secondaryText: string, code: string) {
    this.id = id;
    this.title = title;
    this.secondaryText = secondaryText;
    this.code = code;
  }
}
