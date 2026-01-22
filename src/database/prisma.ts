import { Pool } from "pg";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";
import envConfig from "../config/load-env";

const pool = new Pool({
  connectionString: envConfig.DATABASE_TRANSACTION_POOLER,
});

const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

export default prisma;
