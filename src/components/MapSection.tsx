import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { EventInfo, VenueInfo } from "@/data/wedding";
import { useKakaoMap } from "@/hooks/useKakaoMap";

interface MapSectionProps {
  event: EventInfo;
  venue: VenueInfo;
}

function MapSection({ event, venue }: MapSectionProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapStatus = useKakaoMap(mapRef, {
    lat: venue.lat,
    lng: venue.lng,
    markerLabel: venue.markerLabel
  });

  return (
    <section id="map" className="section-shell scroll-mt-6">
      <div className="section-inner space-y-7">
        <SectionHeading
          eyebrow="Location"
          title="오시는 길"
          description="카카오 지도로 예식장 위치를 확인하고, 교통편과 주차 안내를 함께 살펴보실 수 있습니다."
        />

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-rose-100 bg-[#f7efe8]">
            <div ref={mapRef} className="h-[22rem] w-full bg-[#f4ebe3]" />

            {mapStatus !== "ready" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(180deg,rgba(250,245,239,0.85),rgba(247,238,229,0.95))] px-6 text-center">
                <p className="font-display text-3xl text-rosewood">Map Preview</p>
                <p className="max-w-sm text-sm leading-7 text-rosewood/85">
                  {mapStatus === "disabled"
                    ? "`VITE_KAKAO_JAVASCRIPT_KEY`를 설정하면 실제 카카오 지도가 표시됩니다."
                    : "지도를 불러오는 중입니다. 외부 길찾기 링크는 바로 사용할 수 있습니다."}
                </p>
                <p className="text-sm font-medium text-ink">
                  {event.venueName} {event.hallName}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <article className="soft-card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
                Transportation
              </p>
              <ul className="mt-4 space-y-4">
                {venue.transportation.map((item) => (
                  <li key={item.label} className="text-sm leading-7 text-ink/80">
                    <span className="block font-semibold text-rosewood">{item.label}</span>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="soft-card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
                Parking
              </p>
              <p className="mt-4 text-sm leading-7 text-ink/80">{venue.parking}</p>
            </article>

            <article className="soft-card bg-gradient-to-br from-[#fffefc] to-[#f6ece4]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosewood/60">
                Route Links
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {venue.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-rose-200 bg-white px-4 py-3 text-sm font-medium text-rosewood transition hover:border-clay hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;

