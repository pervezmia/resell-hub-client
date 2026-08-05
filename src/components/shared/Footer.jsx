"use client";

import { Separator } from "@heroui/react";
import { Envelope, Handset, MapPin } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { ResellHubIcon } from "./ResellHubLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Browse listings", href: "/listings" },
  { label: "Categories", href: "/categories" },
  { label: "Sell an item", href: "/sell" },
  { label: "About us", href: "/about" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/resellhub",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/resellhub",
    path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.4.4a5 5 0 0 1 2.9 2.9c.2.6.4 1.3.4 2.4.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.4 2.4a5 5 0 0 1-2.9 2.9c-.6.2-1.3.4-2.4.4-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.4-.4a5 5 0 0 1-2.9-2.9c-.2-.6-.4-1.3-.4-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.4-2.4a5 5 0 0 1 2.9-2.9c.6-.2 1.3-.4 2.4-.4C8.9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    label: "X",
    href: "https://x.com/resellhub",
    path: "M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.9L4.5 22H1.3l8.1-9.3L1 2h7.1l4.9 6.3L18.9 2Zm-1.2 18h1.7L6.4 4H4.6l13.1 16Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/resellhub",
    path: "M6.9 8.4H3.3V21h3.6V8.4ZM5.1 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM21 21v-7c0-3.4-1.8-5-4.3-5-1.9 0-2.8 1.1-3.3 1.8V8.4H9.8c.1 1 0 12.6 0 12.6h3.6v-7c0-.4 0-.7.1-1 .3-.7 1-1.5 2.1-1.5 1.5 0 2.1 1.1 2.1 2.8V21H21Z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 pt-12 pb-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1.4fr]">
        <div>
          <Link href="/" className="mb-3 flex items-center gap-2.5">
            <ResellHubIcon></ResellHubIcon>
            <span className="text-xl font-bold text-foreground">ReSell Hub</span>
          </Link>
          <p className="max-w-xs text-sm leading-7 text-muted">
            A simpler way to buy and sell the things you already own. List an
            item in minutes and connect directly with buyers near you.
          </p>
        </div>

        <div>
          <p className="mb-3.5 text-sm font-bold text-foreground">Quick links</p>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3.5 text-sm font-bold text-foreground">Contact us</p>
          <div className="mb-5 flex flex-col gap-2.5">
            <span className="flex items-center gap-2 text-sm text-muted">
              <Envelope width={16} height={16} />
              support@resellhub.com
            </span>
            <span className="flex items-center gap-2 text-sm text-muted">
              <Handset width={16} height={16} />
              +880 1XXX-XXXXXX
            </span>
            <span className="flex items-center gap-2 text-sm text-muted">
              <MapPin width={16} height={16} />
              Dhaka, Bangladesh
            </span>
          </div>

          <p className="mb-3 text-sm font-bold text-foreground">Follow us</p>
          <div className="flex gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="text-accent-foreground">
                  <path d={item.path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-9 border-border" />

      <p className="text-center text-[13px] text-muted">
        {`© ${new Date().getFullYear()} ReSell Hub. All rights reserved.`}
      </p>
    </footer>
  );
}