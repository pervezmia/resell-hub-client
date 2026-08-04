import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default async function DashboardLayout({ children, params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const userRole = session.user.role;

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role={userRole} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}