// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  const key = process.env.DATABASE_URL || "";
  const sql = neon(key);
  const data = await sql`...`;
  return data;
}
