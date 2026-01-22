require("dotenv").config();
import { createClient } from "@supabase/supabase-js";
import envConfig from "../config/load-env";

if (!envConfig.SUPABASE_URL || !envConfig.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Supabase URL or SERVICE_ROLE key is missing");
}

const supabaseClient = createClient(
  envConfig.SUPABASE_URL,
  envConfig.SUPABASE_SERVICE_ROLE_KEY,
);
export default supabaseClient;
