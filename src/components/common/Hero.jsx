"use client";

import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";
import Link from "next/link";

const stats = [
  { label: "Items resold", value: "42,000+" },
  { label: "Active sellers", value: "8,300+" },
  { label: "Avg. response time", value: "12 min" },
];

export default function Hero() {
  return (
    <section aria-label="Resell Hub introduction" className="bg-background px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold tracking-widest text-accent">
          BANGLADESH&apos;S RESALE MARKETPLACE
        </p>
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
          Give your things a second life
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted">
          Buy and sell pre-loved electronics, furniture, and more with people
          near you. No middleman, no waiting.
        </p>

        <div className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/sell">
            <Button className="flex items-center gap-2 bg-accent text-accent-foreground">
              Start selling
              <ArrowRight width={16} height={16} aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/listings">
            <Button variant="outline" className="border-border text-foreground">
              Browse listings
            </Button>
          </Link>
        </div>

        <dl className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-bold text-foreground">{stat.value}</dd>
              <dt className="mt-1 text-sm font-normal text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}