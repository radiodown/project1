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
    <div className="relative min-h-screen overflow-hidden bg-ivory text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(180,138,120,0.16),_transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[linear-gradient(180deg,rgba(244,231,220,0.85),transparent)]" />

      <HeroSection couple={couple} hero={hero} event={event} mainImage={heroImage} />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pb-20 sm:px-6">
        <GreetingSection couple={couple} greeting={greeting} />
        <EventInfoSection event={event} venue={venue} />
        <MapSection event={event} venue={venue} />
        <GallerySection gallery={gallery} couple={couple} />
        <VideoSection videos={videos} />
        <ContactSection contacts={contacts} couple={couple} />
      </main>

      <footer className="relative z-10 px-4 pb-10 pt-2 text-center sm:px-6">
        <div className="mx-auto max-w-3xl rounded-full border border-rose-200/70 bg-white/80 px-5 py-3 text-sm text-rosewood shadow-card backdrop-blur">
          {footer.note}
        </div>
      </footer>
    </div>
  );
}

export default App;

