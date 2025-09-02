export const HEADER_OFFSET = 96;

export function scrollToId(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = typeof document !== "undefined" ? document.getElementById(id) : null;
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}