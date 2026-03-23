import { copyText } from "@/utils/copy";

export interface SharePayload {
  title: string;
  text: string;
  url: string;
}

export function resolveShareUrl(preferredUrl: string) {
  if (typeof window === "undefined") {
    return preferredUrl;
  }

  if (!preferredUrl || preferredUrl.includes("example.com")) {
    return window.location.href;
  }

  return preferredUrl;
}

export async function shareInvitation(payload: SharePayload) {
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return "shared" as const;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return "cancelled" as const;
      }
    }
  }

  await copyText(payload.url);
  return "copied" as const;
}

