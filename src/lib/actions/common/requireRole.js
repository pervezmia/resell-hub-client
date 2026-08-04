"use server";
import { getSession } from "./getSession";

export const requireRole = async (...allowedRoles) => {
  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized: please sign in");
  }

  if (!allowedRoles.includes(session.user.role)) {
    throw new Error("Forbidden: you don't have permission for this action");
  }

  return session;
};