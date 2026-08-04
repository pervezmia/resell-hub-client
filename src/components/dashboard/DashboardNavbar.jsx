import MobileDrawer from "./MobileDrawer";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-divider bg-background/70 px-4 md:px-8 backdrop-blur-md transition-all">
      <div className="flex items-center gap-3">
        {/* Mobile Drawer Button */}
        <MobileDrawer />

        {/* Brand / Page Title */}
        <h1 className="font-semibold text-lg text-foreground">Overview</h1>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-2">
        {/* User profile, notifications etc */}
      </div>
    </header>
  );
}