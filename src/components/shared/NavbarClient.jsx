"use client";

import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Button,
  Dropdown,
  Label,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { ThemeSwitcher } from "../ThemeSwitcher";


export default function NavbarClient({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const pathName = usePathname();
  const router = useRouter();

  if (pathName.includes("dashboard")) {
    return null;
  }

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            className="text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link href="/">
            <div className="flex items-center gap-3">
              <Image height={40} width={40} loading="eager" src="/logo.webp" alt="ReSell Hub logo" />
              <p className="font-bold text-foreground">ReSell Hub</p>
            </div>
          </Link>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathName === link.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
                aria-current={pathName === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeSwitcher />

          {!user && (
            <div className="flex items-center gap-3">
              <Link href="/signin" className="text-sm font-medium text-foreground hover:text-accent">
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-accent text-accent-foreground">Sign Up</Button>
              </Link>
            </div>
          )}

          {user && (
            <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <Avatar size="sm" aria-label="User menu">
                  <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user?.image} />
                  <Avatar.Fallback>{user.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback delayMs={600}>{user.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium text-foreground">{user?.name}</p>
                      <p className="text-xs leading-none text-muted">{user?.email}</p>
                    </div>
                  </div>
                </div>

                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                  <Dropdown.Item id="dashboard" textValue="Dashboard">
                    <Link className="flex items-center gap-2" href={`/dashboard/${user?.role}`}>
                      <MdDashboard />
                      <Label>Dashboard</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item id="profile" textValue="Profile">
                    <Link className="flex items-center gap-2" href={`/dashboard/${user?.role}/profile`}>
                      <CgProfile />
                      <Label>Profile</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                    onClick={handleSignOut}
                  >
                    <BiLogOut />
                    <Label>Logout</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-border md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 ${
                    pathName === link.href ? "font-medium text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="flex items-center justify-between py-2">
              <span className="text-sm text-muted">Theme</span>
              <ThemeSwitcher />
            </li>

            {!user && (
              <li className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Link href="/signin" className="block py-2 text-foreground" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-accent text-accent-foreground">Sign Up</Button>
                </Link>
              </li>
            )}

            {user && (
              <li className="mt-4 border-t border-border pt-4">
                <Link
                  href={`/dashboard/${user?.role}`}
                  className="flex items-center gap-2 py-2 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdDashboard />
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 py-2 text-danger"
                >
                  <BiLogOut />
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}