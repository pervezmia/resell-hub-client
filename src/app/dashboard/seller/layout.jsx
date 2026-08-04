// app/dashboard/seller/layout.jsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SellerLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user?.role !== "seller") {
    redirect("/dashboard");
  }

  return <>{children}</>;
}