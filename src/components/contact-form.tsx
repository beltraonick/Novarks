import { useState, type ReactNode } from "react";
import { Reveal } from "./reveal";
import { toast } from "sonner";

export function ContactForm({
  includeCompany = true,
  includeSubject = true,
  submitLabel = "Send message",
}: {
  includeCompany?: boolean;
  includeSubject?: boolean;
  submitLabel?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      form.reset();
      toast.success("Message received", {
        description: "We'll get back to you within one business day.",
      });
    } catch {
      toast.error("Failed to send", {
        description: "Please try again or email us directly at hello@novarks.com",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="hairline rounded-3xl bg-[color:var(--surface)]/60 p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        {includeCompany && <Field label="Company" name="company" />}
        {includeSubject && <Field label="Subject" name="subject" />}
        <div className="md:col-span-2">
          <Field
            label="Message"
            name="message"
            required
            as="textarea"
            rows={5}
          />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to our Privacy Policy.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-11 items-center rounded-full bg-[color:var(--gold)] px-6 text-sm font-semibold text-[color:var(--primary-foreground)] transition-all hover:brightness-110 disabled:opacity-60"
        >
          {loading ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as,
  rows,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
  rows?: number;
}) {
  const shared =
    "peer w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-transparent transition-colors focus:border-[color:var(--gold)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/25";
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          placeholder={label}
          className={shared + " min-h-32 resize-y"}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={label}
          className={shared}
        />
      )}
      <span className="pointer-events-none absolute left-3 top-1 rounded bg-[color:var(--surface)] px-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </label>
  );
}

export function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <div className="hairline rounded-2xl bg-[color:var(--surface)]/60 p-6">
        <h3 className="text-sm font-semibold tracking-[0.2em] text-[color:var(--gold)]/90">
          {title.toUpperCase()}
        </h3>
        <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </Reveal>
  );
}
