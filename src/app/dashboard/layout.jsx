import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground antialiased">
      {/* Desktop Sidebar (Fixed) */}
      <aside className="hidden md:flex w-72 flex-col border-r border-divider bg-content1/80 backdrop-blur-md transition-all">
        {/* Logo Section */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-divider">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20">
            H
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hero Dashboard
          </span>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-none">
          <DashboardSideBar />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar with integrated Mobile Drawer */}
        <DashboardNavbar />

        {/* Scrollable Main Viewport */}
        <main className="flex-1 overflow-y-auto bg-content2/30 p-4 md:p-8 transition-all">
          <div className="mx-auto max-w-7xl space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}