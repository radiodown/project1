import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { ContactInfo, CoupleInfo } from "@/data/wedding";
import { copyText } from "@/utils/copy";
import { resolveShareUrl, shareInvitation } from "@/utils/share";

interface ContactSectionProps {
  contacts: ContactInfo;
  couple: CoupleInfo;
}

function ContactSection({ contacts, couple }: ContactSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [shareNotice, setShareNotice] = useState<string>(
    "링크를 복사하거나 모바일 공유 시트를 열 수 있습니다."
  );

  const handleCopy = async (key: string, value: string) => {
    await copyText(value);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((current) => (current === key ? null : current));
    }, 1600);
  };

  const handleShare = async () => {
    const url = resolveShareUrl(contacts.shareUrl);
    const result = await shareInvitation({
      title: `${couple.groomName} & ${couple.brideName} 모바일 청첩장`,
      text: contacts.shareMessage,
      url
    });

    if (result === "shared") {
      setShareNotice("공유 시트가 열렸습니다.");
      return;
    }

    if (result === "copied") {
      setShareNotice("링크를 클립보드에 복사했습니다.");
      return;
    }

    setShareNotice("공유가 취소되었습니다.");
  };

  const handleCopyLink = async () => {
    await copyText(resolveShareUrl(contacts.shareUrl));
    setShareNotice("청첩장 링크를 복사했습니다.");
  };

  return (
    <section id="contact" className="section-shell scroll-mt-6">
      <div className="section-inner space-y-7">
        <SectionHeading
          eyebrow="Contact"
          title={contacts.title}
          description={contacts.description}
        />

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.people.map((person) => (
              <article key={person.role} className="soft-card">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
                  {person.role}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{person.name}</h3>
                <a
                  href={`tel:${person.phone.replace(/-/g, "")}`}
                  className="mt-4 inline-flex rounded-full border border-line-strong bg-surface-tint px-4 py-2 text-sm font-medium text-rosewood transition hover:border-clay hover:text-ink"
                >
                  {person.phone}
                </a>
              </article>
            ))}
          </div>

          <div className="space-y-4">
            <article className="soft-card space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
                  Account
                </p>
                <p className="mt-2 text-sm leading-7 text-ink/80">
                  계좌번호는 버튼 한 번으로 복사할 수 있도록 구성했습니다.
                </p>
              </div>
              <div className="space-y-3">
                {contacts.accounts.map((account) => (
                  <div
                    key={account.label}
                    className="rounded-[24px] border border-line bg-surface-soft p-4"
                  >
                    <p className="text-sm font-semibold text-rosewood">{account.label}</p>
                    <p className="mt-2 text-sm text-ink/80">
                      {account.bank} {account.number}
                    </p>
                    <p className="text-sm text-ink/70">예금주 {account.holder}</p>
                    <button
                      type="button"
                      onClick={() => handleCopy(account.label, account.number)}
                      className="mt-3 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-rosewood transition hover:border-clay hover:text-ink"
                    >
                      {copiedKey === account.label ? "복사 완료" : "계좌번호 복사"}
                    </button>
                  </div>
                ))}
              </div>
            </article>

            <article className="soft-card bg-gradient-to-br from-surface to-sand/70">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
                Share
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/80">{shareNotice}</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={handleShare}
                  className="action-button bg-rosewood text-white hover:bg-rosewood/90"
                >
                  링크 공유하기
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="action-button border border-line-strong bg-surface text-rosewood hover:border-clay hover:text-ink"
                >
                  링크 복사
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
