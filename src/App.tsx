import ContactSection from "@/components/ContactSection";
import EventInfoSection from "@/components/EventInfoSection";
import GallerySection from "@/components/GallerySection";
import GreetingSection from "@/components/GreetingSection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import VideoSection from "@/components/VideoSection";
import { weddingData } from "@/data/wedding";

function App() {
  const { couple, hero, greeting, event, venue, gallery, videos, contacts, footer } =
    weddingData;
  const heroImage = gallery.images[0];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#eadfd6] text-ink sm:px-4 sm:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(180,138,120,0.16),_transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,246,242,0.2),rgba(196,164,145,0.08))]" />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-ivory sm:min-h-[calc(100svh-3rem)] sm:rounded-[36px] sm:border sm:border-white/75 sm:shadow-[0_30px_90px_-38px_rgba(67,41,26,0.55)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(180,138,120,0.16),_transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[linear-gradient(180deg,rgba(244,231,220,0.85),transparent)]" />

        <HeroSection couple={couple} hero={hero} event={event} mainImage={heroImage} />

        <main className="relative z-10 mx-auto flex w-full flex-col gap-5 px-4 pb-20">
          <GreetingSection couple={couple} greeting={greeting} />
          <EventInfoSection event={event} venue={venue} />
          <MapSection event={event} venue={venue} />
          <GallerySection gallery={gallery} couple={couple} />
          <VideoSection videos={videos} />
          <ContactSection contacts={contacts} couple={couple} />
        </main>

        <footer className="relative z-10 px-4 pb-10 pt-2 text-center">
          <div className="mx-auto rounded-full border border-rose-200/70 bg-white/80 px-5 py-3 text-sm text-rosewood shadow-card backdrop-blur">
            {footer.note}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

