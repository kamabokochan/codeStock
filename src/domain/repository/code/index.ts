import { Code } from "~/domain/entity";
import { CodeDriver } from "~/infrastructure/supabase";

export class CodeRepository {
  private driver: CodeDriver;
  constructor() {
    this.driver = new CodeDriver();
  }

  async fetchAllCodes() {
    const codesResponse = await this.driver.fetchAllCodes();
    return codesResponse?.map((codeResponse) => {
      const { id, title, description, code } = codeResponse;
      return new Code(id, title, description, code);
    });
  }
}
