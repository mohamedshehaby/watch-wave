import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

function generatePrismaClient(): PrismaClient {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }
  if ((!global as any).db) {
    (global as any).db = new PrismaClient();
  }

  return (global as any).db;
}

export default db;
