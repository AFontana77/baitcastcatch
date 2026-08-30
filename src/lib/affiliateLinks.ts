import affiliateLinksData from "@/data/affiliateLinks.json";

export type AffiliateStatus = "pending" | "queued_signup" | "enrolled" | "declined";

export type AffiliateProgram = {
  brand: string;
  base_url: string;
  tracking_param: string;
  tracking_value: string;
  status: AffiliateStatus;
  network: string;
  commission: string;
  cookie: string;
  notes: string;
};

export type AffiliateLinksData = {
  _meta: {
    purpose: string;
    format_note: string;
    last_updated: string;
    session: string;
  };
  programs: Record<string, AffiliateProgram>;
};

const data = affiliateLinksData as AffiliateLinksData;

export function getAffiliateProgram(id: string): AffiliateProgram | undefined {
  return data.programs[id];
}

export function resolveAffiliateUrl(id: string, deepLinkPath?: string): string {
  const program = data.programs[id];
  if (!program) return "#";
  const base = deepLinkPath
    ? `${program.base_url}${deepLinkPath.startsWith("/") ? "" : "/"}${deepLinkPath}`
    : program.base_url;
  try {
    const url = new URL(base);
    url.searchParams.set(program.tracking_param, program.tracking_value);
    return url.toString();
  } catch {
    return base;
  }
}

export function isEnrolled(id: string): boolean {
  const program = data.programs[id];
  return program?.status === "enrolled";
}

/**
 * Returns props ready to spread onto an `<a>` element. Includes resolved
 * href plus `data-affiliate-*` attributes used by `<AffiliateClickTracker />`
 * to fire `affiliate_click` events into the GTM dataLayer.
 *
 * Usage: `<a {...affiliateLinkProps("marcus", "/us/en/savings")} target="_blank" rel="nofollow noopener noreferrer sponsored">Open Marcus</a>`
 */
export function affiliateLinkProps(
  id: string,
  deepLinkPath?: string,
): {
  href: string;
  "data-affiliate-brand": string;
  "data-affiliate-network": string;
} {
  const program = data.programs[id];
  return {
    href: resolveAffiliateUrl(id, deepLinkPath),
    "data-affiliate-brand": id,
    "data-affiliate-network": program?.network ?? "unknown",
  };
}


/**
 * Tagged Amazon search for a species' gear.
 *
 * This property rendered Amazon commerce on 391 pages with NO tag at all - one
 * template line emitted a bare /s?k= URL, so every click earned nothing. The
 * Associates tracking ID baitcastcatch-20 was created in Associates Central on
 * 2026-08-30 under the existing approved account and verified against the
 * Creators API with a known-live control ASIN before being wired here.
 */
export const AMAZON_TAG = "baitcastcatch-20";

export function amazonSearch(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
