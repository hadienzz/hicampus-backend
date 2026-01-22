import dotenv from "dotenv";
dotenv.config();

type EnvConfig = {
  DATABASE_SESSION_POOLER: string;
  DATABASE_TRANSACTION_POOLER: string;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
};

const requireEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable ${key} is required but not set.`);
  }

  return value;
};

const envConfig: EnvConfig = {
  DATABASE_SESSION_POOLER: requireEnv("DATABASE_SESSION_POOLER"),
  DATABASE_TRANSACTION_POOLER: requireEnv("DATABASE_TRANSACTION_POOLER"),
  SUPABASE_URL: requireEnv("SUPABASE_URL"),
  SUPABASE_SERVICE_ROLE_KEY: requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
};

export default envConfig;
