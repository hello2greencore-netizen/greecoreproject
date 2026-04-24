"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder: wire to real endpoint in Phase 2.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Doe"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(707) 555-1234"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            City
          </span>
          <input
            name="city"
            autoComplete="address-level2"
            className={inputClass}
            placeholder="Petaluma"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Service interest
          </span>
          <select name="service" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortName ?? s.name}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-foreground">
          How can we help?
        </span>
        <textarea
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us a bit about your home and what you're looking for."
        />
      </label>

      <div className="pt-2">
        <Button size="lg" className="w-full sm:w-auto">
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
      </div>

      {status === "success" && (
        <p
          role="status"
          className="rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-800"
        >
          Thanks — we got your message and will reach out shortly.
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
