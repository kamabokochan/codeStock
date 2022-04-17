import { CodeResponse } from "~/infrastructure/supabase";

export type CodeEntity = {
  secondaryText: string;
} & Omit<CodeResponse, "description">;

export class Code {
  public id!: number;
  public title!: string;
  public secondaryText!: string;
  public code!: string;

  constructor(code: Code) {
    Object.assign(this, code);
  }
}
