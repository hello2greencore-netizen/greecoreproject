"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  chatbotFaqCategories,
  type ChatbotFAQ,
} from "@/data/chatbotFaqs";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SearchableFAQ = ChatbotFAQ & {
  categoryId: string;
  categoryLabel: string;
};

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  fallback?: boolean;
};

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hi, I'm Corey. I can help with quick questions about Green Core services, service areas, estimates, rebates, and booking.",
};

const stopWords = new Set([
  "about",
  "after",
  "also",
  "and",
  "are",
  "can",
  "could",
  "does",
  "for",
  "from",
  "have",
  "how",
  "the",
  "this",
  "what",
  "when",
  "where",
  "with",
  "you",
  "your",
]);

const searchableFaqs: SearchableFAQ[] = chatbotFaqCategories.flatMap(
  (category) =>
    category.questions.map((faq) => ({
      ...faq,
      categoryId: category.id,
      categoryLabel: category.label,
    })),
);

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokenize(value: string) {
  return normalize(value)
    .split(" ")
    .filter((term) => (term.length > 2 || term === "ac") && !stopWords.has(term));
}

function getFaqText(faq: SearchableFAQ) {
  return normalize(
    `${faq.question} ${faq.answer} ${faq.keywords.join(" ")} ${faq.categoryLabel}`,
  );
}

function findBestMatch(query: string) {
  const normalizedQuery = normalize(query);
  const terms = tokenize(query);

  if (!normalizedQuery || terms.length === 0) {
    return null;
  }

  let bestMatch: SearchableFAQ | null = null;
  let bestScore = 0;

  for (const faq of searchableFaqs) {
    const normalizedQuestion = normalize(faq.question);
    const normalizedKeywords = faq.keywords.map(normalize);
    const searchableText = getFaqText(faq);
    let score = 0;

    if (normalizedQuestion === normalizedQuery) {
      score += 20;
    } else if (normalizedQuestion.includes(normalizedQuery)) {
      score += 10;
    }

    if (
      normalizedKeywords.some(
        (keyword) =>
          keyword === normalizedQuery ||
          keyword.includes(normalizedQuery) ||
          normalizedQuery.includes(keyword),
      )
    ) {
      score += 8;
    }

    for (const term of terms) {
      if (normalizedQuestion.includes(term)) {
        score += 3;
      } else if (normalizedKeywords.some((keyword) => keyword.includes(term))) {
        score += 3;
      } else if (searchableText.includes(term)) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  return bestScore >= 3 ? bestMatch : null;
}

function filterFaqs(categoryId: string | null, query: string) {
  const baseFaqs = categoryId
    ? searchableFaqs.filter((faq) => faq.categoryId === categoryId)
    : searchableFaqs;
  const terms = tokenize(query);

  if (terms.length === 0) {
    return baseFaqs;
  }

  return baseFaqs.filter((faq) => {
    const searchableText = getFaqText(faq);
    return terms.some((term) => searchableText.includes(term));
  });
}

export function FAQChatbot() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  const visibleFaqs = useMemo(
    () => filterFaqs(selectedCategory, draft).slice(0, 5),
    [selectedCategory, draft],
  );

  const selectedCategoryDetails = chatbotFaqCategories.find(
    (category) => category.id === selectedCategory,
  );

  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 80);

    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    messageEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function nextMessageId(prefix: string) {
    messageIdRef.current += 1;
    return `${prefix}-${messageIdRef.current}`;
  }

  function answerFaq(faq: SearchableFAQ) {
    setSelectedCategory(faq.categoryId);
    setDraft("");
    setMessages((current) => [
      ...current,
      {
        id: nextMessageId("user"),
        role: "user",
        text: faq.question,
      },
      {
        id: nextMessageId("assistant"),
        role: "assistant",
        text: faq.answer,
      },
    ]);
  }

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const question = draft.trim();
    if (!question) return;

    const match = findBestMatch(question);

    setMessages((current) => [
      ...current,
      {
        id: nextMessageId("user"),
        role: "user",
        text: question,
      },
      match
        ? {
            id: nextMessageId("assistant"),
            role: "assistant",
            text: match.answer,
          }
        : {
            id: nextMessageId("assistant"),
            role: "assistant",
            text: "I could not find an exact FAQ match. Please call Green Core or send a message through the contact form so the team can help directly.",
            fallback: true,
          },
    ]);

    if (match) {
      setSelectedCategory(match.categoryId);
    }

    setDraft("");
  }

  function resetChat() {
    setMessages([welcomeMessage]);
    setSelectedCategory(null);
    setDraft("");
    inputRef.current?.focus();
  }

  return (
    <>
      {open && (
        <section
          id="faq-chatbot-panel"
          role="dialog"
          aria-label="Green Core FAQ chat"
          className={cn(
            "fixed inset-x-4 z-40 flex max-h-[70dvh] flex-col overflow-hidden rounded-3xl",
            "border border-black/[0.06] bg-white shadow-[0_18px_52px_-18px_rgba(15,27,20,0.35),0_8px_24px_-16px_rgba(15,27,20,0.22)] ring-1 ring-black/[0.04]",
            "bottom-[calc(92px+env(safe-area-inset-bottom))]",
            "sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[380px] sm:max-h-[34rem]",
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-border bg-subtle/60 px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-brand-50 ring-1 ring-brand-100">
                <Image
                  src="/images/chatbot/chatbot-icon.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </span>
              <div className="min-w-0">
                <h2 className="truncate font-display text-base font-bold text-foreground">
                  Corey
                </h2>
                <p className="truncate text-xs text-muted">
                  The Comfort Hero
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full text-foreground/50",
                  "transition-colors duration-150 hover:bg-black/[0.04] hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                )}
                aria-label="Reset FAQ chat"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                  <path
                    d="M4.75 12a7.25 7.25 0 1 0 2.12-5.13L4.75 9M4.75 5.25V9h3.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full text-foreground/50",
                  "transition-colors duration-150 hover:bg-black/[0.04] hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                )}
                aria-label="Close FAQ chat"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px]">
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                {message.role === "assistant" && (
                  <span className="relative mr-2 mt-1 h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-brand-50 ring-1 ring-brand-100">
                    <Image
                      src="/images/chatbot/chatbot-icon.png"
                      alt=""
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </span>
                )}
                <div
                  className={cn(
                    "max-w-[84%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-brand-600 text-white"
                      : "bg-subtle text-foreground",
                  )}
                >
                  <p>{message.text}</p>
                  {message.fallback && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={siteConfig.phoneHref}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 ring-1 ring-border transition-colors hover:bg-brand-50"
                      >
                        Call {siteConfig.phone}
                      </a>
                      <Link
                        href="/contact"
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 ring-1 ring-border transition-colors hover:bg-brand-50"
                      >
                        Contact form
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          <div className="border-t border-border bg-subtle/50 px-4 py-3">
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                  selectedCategory === null
                    ? "bg-brand-600 text-white"
                    : "bg-white text-foreground/70 ring-1 ring-border hover:bg-brand-50 hover:text-brand-800",
                )}
              >
                All
              </button>
              {chatbotFaqCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                    selectedCategory === category.id
                      ? "bg-brand-600 text-white"
                      : "bg-white text-foreground/70 ring-1 ring-border hover:bg-brand-50 hover:text-brand-800",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {selectedCategoryDetails?.prompt ?? "Top questions"}
            </p>
            <div className="mt-2 grid gap-2">
              {visibleFaqs.length > 0 ? (
                visibleFaqs.map((faq) => (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => answerFaq(faq)}
                    className={cn(
                      "rounded-xl bg-white px-3 py-2 text-left text-sm font-medium text-foreground/80 ring-1 ring-border",
                      "transition-colors duration-150 hover:bg-brand-50 hover:text-brand-800",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                    )}
                  >
                    {faq.question}
                  </button>
                ))
              ) : (
                <p className="rounded-xl bg-white px-3 py-2 text-sm text-muted ring-1 ring-border">
                  No quick match yet.
                </p>
              )}
            </div>
          </div>

          <form onSubmit={submitQuestion} className="border-t border-border bg-white p-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-white pl-4 pr-1.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/25">
              <input
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about estimates, rebates, or service areas"
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground placeholder:text-muted/70 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                className={cn(
                  "grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-brand-600 text-white",
                  "transition-[background-color,transform,opacity] duration-150 hover:bg-brand-700 active:scale-[0.96]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:opacity-45",
                )}
                aria-label="Send question"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                  <path
                    d="M5 12h13M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </form>
        </section>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-controls="faq-chatbot-panel"
          aria-expanded={open}
          className={cn(
            "fixed right-3 z-40 grid h-20 w-20 place-items-center rounded-full bg-transparent p-0",
            "drop-shadow-[0_14px_18px_rgba(15,27,20,0.28)]",
            "transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:drop-shadow-[0_18px_24px_rgba(15,27,20,0.32)] active:scale-[0.96]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
            "bottom-[calc(122px+env(safe-area-inset-bottom))] sm:right-5 sm:bottom-5",
          )}
        >
          <span className="sr-only">Open FAQ chat</span>
          <Image
            src="/images/chatbot/chatbot-icon.png"
            alt=""
            fill
            sizes="80px"
            className="object-contain"
          />
        </button>
      )}
    </>
  );
}
