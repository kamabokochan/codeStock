import { supabase } from "supabaseClient";

export interface CodeResponse {
  id: number;
  title: string;
  description: string;
  code: string;
}
interface CodeDriverInterface {
  fetchAllCodes: () => Promise<CodeResponse[] | null>;
}

export class CodeDriver implements CodeDriverInterface {
  // constructor() {}
  async fetchAllCodes() {
    const { data: codes, error } = await supabase.from<CodeResponse>("code").select("*");
    return codes;
  }
}
