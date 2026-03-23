import SectionHeading from "@/components/SectionHeading";
import { VideoInfo } from "@/data/wedding";

interface VideoSectionProps {
  videos: VideoInfo;
}

function VideoSection({ videos }: VideoSectionProps) {
  return (
    <section id="video" className="section-shell scroll-mt-6">
      <div className="section-inner space-y-7">
        <SectionHeading
          eyebrow="Video"
          title={videos.title}
          description={videos.description}
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {videos.items.map((item) => (
            <article key={item.youtubeId} className="soft-card space-y-4">
              <div className="overflow-hidden rounded-[26px] border border-rose-100 bg-black">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
                    title={item.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-rosewood/85">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;

