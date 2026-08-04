import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-4 text-center">
      <svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-8"
        role="img"
        aria-label="Lost package illustration"
      >
        <ellipse cx="110" cy="160" rx="70" ry="10" className="fill-muted/20" />
        <rect
          x="60"
          y="60"
          width="100"
          height="80"
          rx="8"
          className="fill-surface stroke-border"
          strokeWidth="2"
        />
        <path d="M60 80 L110 105 L160 80" className="stroke-border" strokeWidth="2" fill="none" />
        <line x1="110" y1="105" x2="110" y2="140" className="stroke-border" strokeWidth="2" />
        <circle cx="80" cy="45" r="18" className="fill-accent-soft stroke-accent" strokeWidth="2" />
        <text x="80" y="52" textAnchor="middle" className="fill-accent text-sm font-bold">
          ?
        </text>
        <circle cx="145" cy="35" r="4" className="fill-accent" />
        <circle cx="160" cy="55" r="3" className="fill-accent/60" />
        <circle cx="50" cy="60" r="3" className="fill-accent/60" />
      </svg>

      <p className="text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold text-foreground">
        Page Not Found
      </h1>
      <p className="mt-2 max-w-md text-muted">
        Looks like this listing has been sold, removed, or never existed.
        Let&apos;s get you back to browsing.
      </p>

      <Link href="/" className="mt-8">
        <Button className="bg-accent text-accent-foreground">
          Back To Home
        </Button>
      </Link>
    </div>
  );
}