"use client";
import { Button, useTheme } from "@heroui/react";
import {Sun, Moon} from '@gravity-ui/icons';


export function ThemeSwitcher() {
 
  const { resolvedTheme, setTheme } = useTheme("light");
  
  

  return (
    <div className="flex items-center justify-center gap-1 rounded-full border border-neutral-200 p-1 dark:border-neutral-800">
      <Button
        variant={resolvedTheme === "light" ? "primary" : "ghost"}
        size="sm"
        onPress={() => setTheme("light")}
        aria-label="Light mode"
      >
        <Sun></Sun>
      </Button>

      <Button
        variant={resolvedTheme === "dark" ? "primary" : "ghost"}
        size="sm"
        onPress={() => setTheme("dark")}
        aria-label="Dark mode"
      >
        <Moon />
      </Button>
    </div>
  );
}