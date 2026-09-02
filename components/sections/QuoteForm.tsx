"use client";

import { useId, useState } from "react";
import { contact } from "@/lib/content";
import { site, whatsappHref, quoteMessage, mailtoHref } from "@/lib/site";

type Field = "name" | "phone" | "category" | "message";
type Errors = Partial<Record<Field, string>>;

const fieldCopy = contact.form.fields;

const inputClass =
  "mt-3 w-full min-h-[48px] border bg-transparent px-4 py-3 text-[15px] text-cocoa placeholder:text-cocoa/38 transition-colors duration-300 focus:border-brass";

export function QuoteForm() {
  const uid = useId();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = fieldCopy.name.error;
    if (values.phone.replace(/\D/g, "").length < 9) next.phone = fieldCopy.phone.error;
    if (!values.category) next.category = fieldCopy.category.error;
    if (values.message.trim().length < 5) next.message = fieldCopy.message.error;
    return next;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    window.open(whatsappHref(quoteMessage(values)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const errorId = (field: Field) => `${uid}-${field}-error`;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border p-7 md:p-10"
      style={{ borderColor: "var(--hairline-strong)" }}
    >
      <h3 className="h3 text-cocoa">{contact.form.heading}</h3>
      <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.65] text-cocoa/64">
        {contact.form.note}
      </p>

      <div className="mt-9 flex flex-col gap-7">
        <div>
          <label htmlFor={`${uid}-name`} className="caption text-cocoa/62">
            {fieldCopy.name.label}
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder={fieldCopy.name.placeholder}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={inputClass}
            style={{ borderColor: errors.name ? "var(--color-cocoa)" : "var(--hairline-strong)" }}
          />
          {errors.name ? (
            <p id={errorId("name")} className="mt-2 text-[13px] text-cocoa">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${uid}-phone`} className="caption text-cocoa/62">
            {fieldCopy.phone.label}
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder={fieldCopy.phone.placeholder}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={`${inputClass} tnum`}
            style={{ borderColor: errors.phone ? "var(--color-cocoa)" : "var(--hairline-strong)" }}
          />
          {errors.phone ? (
            <p id={errorId("phone")} className="mt-2 text-[13px] text-cocoa">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${uid}-category`} className="caption text-cocoa/62">
            {fieldCopy.category.label}
          </label>
          <select
            id={`${uid}-category`}
            name="category"
            value={values.category}
            onChange={(e) => set("category", e.target.value)}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? errorId("category") : undefined}
            className={inputClass}
            style={{
              borderColor: errors.category ? "var(--color-cocoa)" : "var(--hairline-strong)",
            }}
          >
            <option value="">Choose a collection</option>
            {contact.form.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category ? (
            <p id={errorId("category")} className="mt-2 text-[13px] text-cocoa">
              {errors.category}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${uid}-message`} className="caption text-cocoa/62">
            {fieldCopy.message.label}
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder={fieldCopy.message.placeholder}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorId("message") : undefined}
            className={`${inputClass} resize-y`}
            style={{
              borderColor: errors.message ? "var(--color-cocoa)" : "var(--hairline-strong)",
            }}
          />
          {errors.message ? (
            <p id={errorId("message")} className="mt-2 text-[13px] text-cocoa">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-9 inline-flex min-h-[52px] w-full items-center justify-center border border-brass bg-brass px-7 text-[12px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-brass-lift hover:border-brass-lift"
      >
        {contact.form.submit}
      </button>

      <p aria-live="polite" className="mt-5 min-h-[20px] text-[13px] text-brass">
        {sent ? contact.form.success : ""}
      </p>

      <p className="mt-1 text-[13px] text-cocoa/62">
        {contact.form.emailFallback}{" "}
        <a href={mailtoHref} className="text-brass underline underline-offset-4">
          {site.email}
        </a>
      </p>
    </form>
  );
}
