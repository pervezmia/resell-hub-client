"use client";

import { Bars } from "@gravity-ui/icons";
import { Drawer } from "@heroui/react";
import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

export default function MobileDrawer() {
  return (
    <Drawer>
      {/* Drawer.Trigger নিজেই বাটন হিসেবে কাজ করবে */}
      <Drawer.Trigger 
        className="flex md:hidden items-center justify-center p-2 rounded-xl text-foreground hover:bg-default-100 transition-colors"
        aria-label="Open Navigation Menu"
      >
        <Bars className="size-6" />
      </Drawer.Trigger>

      {/* Drawer Backdrop */}
      <Drawer.Backdrop>
        <Drawer.Content placement="left" className="bg-background/95 backdrop-blur-md">
          <Drawer.Dialog className="max-w-[280px] w-full h-full flex flex-col">
            <Drawer.CloseTrigger />

            {/* Header */}
            <Drawer.Header className="px-6 py-4 border-b border-divider flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20">
                H
              </div>
              <Drawer.Heading className="font-bold text-lg text-foreground">
                Hero Dashboard
              </Drawer.Heading>
            </Drawer.Header>

            {/* Sidebar Body */}
            <Drawer.Body className="flex-1 overflow-y-auto p-4">
              <DashboardSideBar />
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}