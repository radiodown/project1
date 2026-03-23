import ContactSection from "@/components/ContactSection";
import EventInfoSection from "@/components/EventInfoSection";
import GallerySection from "@/components/GallerySection";
import GreetingSection from "@/components/GreetingSection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import ThemeTesterPanel from "@/components/ThemeTesterPanel";
import VideoSection from "@/components/VideoSection";
import { weddingData } from "@/data/wedding";
import { useThemePreset } from "@/hooks/useThemePreset";

function App() {
  const { activePresetId, presets, setActivePresetId, testerEnabled } = useThemePreset();
  const { couple, hero, greeting, event, venue, gallery, videos, contacts, footer } =
    weddingData;

  return (
    <div className="relative min-h-screen overflow-hidden bg-ivory text-ink">
      <div className="page-atmosphere pointer-events-none absolute inset-0" />
      <div className="page-top-glow pointer-events-none absolute inset-x-0 top-0 h-96" />

      <HeroSection couple={couple} hero={hero} event={event} />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pb-20 sm:px-6">
        <GreetingSection couple={couple} greeting={greeting} />
        <EventInfoSection event={event} venue={venue} />
        <MapSection event={event} venue={venue} />
        <GallerySection gallery={gallery} couple={couple} />
        <VideoSection videos={videos} />
        <ContactSection contacts={contacts} couple={couple} />
      </main>

      <footer className="relative z-10 px-4 pb-10 pt-2 text-center sm:px-6">
        <div className="mx-auto max-w-3xl rounded-full border border-line-strong/70 bg-surface/80 px-5 py-3 text-sm text-rosewood shadow-card backdrop-blur">
          {footer.note}
        </div>
      </footer>

      {testerEnabled ? (
        <ThemeTesterPanel
          presets={presets}
          activePresetId={activePresetId}
          onSelectPreset={setActivePresetId}
        />
      ) : null}
    </div>
  );
}

export default App;
