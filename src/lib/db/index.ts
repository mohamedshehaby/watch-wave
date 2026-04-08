import { PrismaClient } from "@prisma/client";

function generatePrismaClient(): PrismaClient {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }
  if (!(global as any).db) {
    (global as any).db = new PrismaClient();
  }

  return (global as any).db;
}

const db = generatePrismaClient();

export default db;
