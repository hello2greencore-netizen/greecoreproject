"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

const serviceAreaCities = [
  "Petaluma",
  "Rohnert Park",
  "Santa Rosa",
  "Novato",
  "San Rafael",
  "Mill Valley",
  "Tiburon",
  "Sebastopol",
  "Cotati",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phoneCountryCode: formData.get("phone-country-code"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          city: formData.get("city"),
          service: formData.get("service"),
          preferredDate: formData.get("preferred-date"),
          preferredTime: formData.get("preferred-time"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("success");

      const dataLayer = (window.dataLayer = window.dataLayer || []);
      dataLayer.push({
        event: "contact_form_submit",
        form_name: "main_contact",
        form_location: window.location.pathname,
        service: (formData.get("service") as string) || "not_provided",
        city: (formData.get("city") as string) || "not_provided",
      });

      form.reset();
    } catch {
      setStatus("error");
    }
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
          <div className="flex">
            <select
              name="phone-country-code"
              defaultValue="+1"
              aria-label="Phone country code"
              autoComplete="tel-country-code"
              className="w-[6.5rem] rounded-l-xl border border-r-0 border-border bg-subtle px-3 py-3 text-base font-semibold text-foreground focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
            >
              <option value="+1">US +1</option>
            </select>
            <input
              required
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              className="w-full rounded-r-xl border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              placeholder="(707) 988-5858"
            />
          </div>
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
          <select
            name="city"
            defaultValue=""
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select your city
            </option>
            {serviceAreaCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
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

      <fieldset className="rounded-2xl border border-border bg-subtle/40 p-4 sm:p-5">
        <legend className="px-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          Preferred appointment
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-foreground">
              Date
            </span>
            <input
              type="date"
              name="preferred-date"
              min={new Date().toISOString().split("T")[0]}
              suppressHydrationWarning
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-foreground">
              Time
            </span>
            <input
              type="time"
              name="preferred-time"
              min="08:00"
              max="18:00"
              step="300"
              className={inputClass}
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-muted">
          Pick any hour and minute that works for you — we&apos;ll confirm
          availability and follow up. Typical service hours 8am–6pm, closed Sundays.
        </p>
      </fieldset>

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
        <Button
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
        >
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
