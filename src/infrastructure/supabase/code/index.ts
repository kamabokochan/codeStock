import { supabase } from "supabaseClient";

interface CodeDriverInterface {
  fetchAllCodes: () => Promise<any[] | null>;
}

export class CodeDriver implements CodeDriverInterface {
  // constructor() {}
  async fetchAllCodes() {
    const { data: codes, error } = await supabase.from("code").select("*");
    return codes;
  }
}
