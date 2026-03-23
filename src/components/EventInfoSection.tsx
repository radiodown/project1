import SectionHeading from "@/components/SectionHeading";
import { EventInfo, VenueInfo } from "@/data/wedding";
import { formatWeddingDate, formatWeddingTime, getCountdownDays } from "@/utils/date";

interface EventInfoSectionProps {
  event: EventInfo;
  venue: VenueInfo;
}

function EventInfoSection({ event, venue }: EventInfoSectionProps) {
  const dDay = getCountdownDays(event.datetime);
  const dDayText =
    dDay === 0 ? "오늘이 바로 예식일입니다." : `예식까지 ${Math.abs(dDay)}일 남았습니다.`;

  return (
    <section id="event" className="section-shell snap-section scroll-mt-6">
      <div className="section-inner space-y-7">
        <SectionHeading
          eyebrow="Event Info"
          title="예식 안내"
          description="날짜, 시간, 장소를 한 번에 확인할 수 있도록 가장 중요한 정보만 먼저 정리했습니다."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <article className="soft-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
              Date
            </p>
            <p className="mt-3 font-display text-3xl text-ink">
              {formatWeddingDate(event.datetime)}
            </p>
            <p className="mt-2 text-sm leading-7 text-rosewood/80">{dDayText}</p>
          </article>

          <article className="soft-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
              Time
            </p>
            <p className="mt-3 font-display text-3xl text-ink">
              {formatWeddingTime(event.datetime)}
            </p>
            <p className="mt-2 text-sm leading-7 text-rosewood/80">
              여유 있게 도착하실 수 있도록 20분 전 입장을 권장드립니다.
            </p>
          </article>

          <article className="soft-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
              Venue
            </p>
            <p className="mt-3 font-display text-3xl text-ink">{event.venueName}</p>
            <p className="mt-2 text-sm leading-7 text-rosewood/80">{event.hallName}</p>
          </article>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.92fr]">
          <article className="soft-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
              Address
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">{event.address}</p>
            <p className="mt-2 text-sm leading-7 text-rosewood/80">{event.roadAddress}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {venue.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-rose-200 bg-[#fff8f3] px-4 py-2 text-sm font-medium text-rosewood transition hover:border-clay hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>

          <article className="soft-card bg-gradient-to-br from-[#fffdfb] to-[#f7eee6]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
              Quick Guide
            </p>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-ink/80">
              {venue.transportation.map((item) => (
                <li key={item.label}>
                  <span className="block font-semibold text-rosewood">{item.label}</span>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default EventInfoSection;
