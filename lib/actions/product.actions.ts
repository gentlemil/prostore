"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// GET latest products
export async function getLatestProducts() {
  if (!prisma) {
    throw new Error("No connection with a db");
  }

  const data = await await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
