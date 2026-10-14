"use client";

/** "2 weeks ago"-style label, using the same buckets Google shows. Computed in the visitor's browser so it stays current. */
export function relativeDate(iso: string, now = new Date()): string {
  const days = Math.round((now.getTime() - new Date(`${iso}T12:00:00`).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days < 2) return "a day ago";
  if (days < 7) return `${days} days ago`;
  if (days < 14) return "a week ago";
  if (days < 28) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 60) return "a month ago";
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  const years = Math.floor(days / 365);
  return years === 1 ? "a year ago" : `${years} years ago`;
}

export function ReviewDate({ date, className }: { date: string; className?: string }) {
  return (
    <time dateTime={date} className={className} suppressHydrationWarning>
      {relativeDate(date)}
    </time>
  );
}
