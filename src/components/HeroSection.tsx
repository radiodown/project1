import { useEffect, useRef } from "react";
import { CoupleInfo, EventInfo, GalleryImage, HeroInfo } from "@/data/wedding";
import { formatDateTimeLine, getCountdownDays } from "@/utils/date";

interface HeroSectionProps {
  couple: CoupleInfo;
  hero: HeroInfo;
  event: EventInfo;
  mainImage?: Pick<GalleryImage, "src" | "alt">;
}

function HeroSection({ couple, hero, event, mainImage }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isPagingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const dDay = getCountdownDays(event.datetime);
  const dDayLabel = dDay === 0 ? "D-Day" : `D-${Math.abs(dDay)}`;
  const coverImage = mainImage?.src ?? hero.coverImage;
  const coverAlt = mainImage?.alt ?? hero.coverAlt;

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const releasePaging = () => {
      window.setTimeout(() => {
        isPagingRef.current = false;
      }, 900);
    };

    const moveToGreeting = () => {
      if (isPagingRef.current) {
        return;
      }

      const greetingSection = document.getElementById("greeting");

      if (!greetingSection) {
        return;
      }

      isPagingRef.current = true;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      greetingSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });

      releasePaging();
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY <= 4 || isPagingRef.current) {
        return;
      }

      event.preventDefault();
      moveToGreeting();
    };

    const handleTouchStart = (event: TouchEvent) => {
      const [touch] = event.touches;

      if (!touch) {
        return;
      }

      touchStartYRef.current = touch.clientY;
      touchStartXRef.current = touch.clientX;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isPagingRef.current || touchStartYRef.current === null || touchStartXRef.current === null) {
        return;
      }

      const [touch] = event.touches;

      if (!touch) {
        return;
      }

      const deltaY = touchStartYRef.current - touch.clientY;
      const deltaX = Math.abs(touchStartXRef.current - touch.clientX);

      if (deltaY <= 24 || deltaY <= deltaX) {
        return;
      }

      event.preventDefault();
      moveToGreeting();
      touchStartYRef.current = null;
      touchStartXRef.current = null;
    };

    const resetTouch = () => {
      touchStartYRef.current = null;
      touchStartXRef.current = null;
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    section.addEventListener("touchend", resetTouch);
    section.addEventListener("touchcancel", resetTouch);

    return () => {
      section.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
      section.removeEventListener("touchend", resetTouch);
      section.removeEventListener("touchcancel", resetTouch);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="snap-section snap-section-strong relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="relative min-h-[100svh]">
          <img
            src={coverImage}
            alt={coverAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,18,13,0.12),rgba(31,18,13,0.6)_56%,rgba(31,18,13,0.82))]" />
          <div className="absolute -left-10 top-20 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -right-8 bottom-16 h-52 w-52 animate-float-slow rounded-full bg-[#f1dccf]/30 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-between px-5 pb-10 pt-6 text-white sm:px-10 sm:pb-14 sm:pt-8">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="pill-chip border-white/35 bg-white/10 text-white">
                Mobile Invitation
              </span>
              <span className="rounded-full border border-white/30 bg-black/10 px-4 py-2 text-sm font-medium backdrop-blur">
                {dDayLabel}
              </span>
            </div>

            <div className="max-w-3xl space-y-7">
              <div className="flex flex-wrap gap-2">
                {hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-white/85 backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.45em] text-white/70">
                  Wedding Day
                </p>
                <h1 className="font-display text-5xl leading-[0.92] text-white text-balance sm:text-7xl">
                  {couple.groomName}
                  <span className="mx-3 text-3xl sm:text-4xl">&amp;</span>
                  {couple.brideName}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                  {couple.subtitle}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  {hero.invitation}
                </p>
              </div>

              <div className="rounded-[30px] border border-white/20 bg-white/12 p-5 backdrop-blur sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                  Ceremony
                </p>
                <p className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  {formatDateTimeLine(event.datetime)}
                </p>
                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  {event.venueName} {event.hallName}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#event"
                  className="action-button bg-white text-ink shadow-lg shadow-black/15 hover:bg-[#fff6ef]"
                >
                  예식 정보 보기
                </a>
                <a
                  href="#map"
                  className="action-button border border-white/30 bg-white/10 text-white hover:bg-white/15"
                >
                  오시는 길 확인
                </a>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="#greeting"
                className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition hover:text-white"
              >
                아래로 스크롤
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg backdrop-blur">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}

export default HeroSection;

