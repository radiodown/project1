import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { CoupleInfo, GalleryInfo } from "@/data/wedding";

interface GallerySectionProps {
  gallery: GalleryInfo;
  couple: CoupleInfo;
}

function GallerySection({ gallery, couple }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    if (currentIndex === null) {
      document.body.classList.remove("modal-open");
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCurrentIndex(null);
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex((previous) =>
          previous === null ? previous : (previous + 1) % gallery.images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex((previous) =>
          previous === null
            ? previous
            : (previous - 1 + gallery.images.length) % gallery.images.length
        );
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, gallery.images.length]);

  const activeIndex = currentIndex ?? 0;
  const activeImage = currentIndex === null ? null : gallery.images[activeIndex];

  return (
    <section id="gallery" className="section-shell snap-section scroll-mt-6">
      <div className="section-inner space-y-7">
        <SectionHeading
          eyebrow="Gallery"
          title={gallery.title}
          description={gallery.description}
          align="center"
        />

        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          {gallery.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className="group mb-4 w-full break-inside-avoid overflow-hidden rounded-[28px] border border-rose-100 bg-white text-left shadow-[0_18px_45px_-28px_rgba(67,41,26,0.38)] transition hover:-translate-y-1"
            >
              <div
                className={
                  image.orientation === "portrait"
                    ? "aspect-[4/5] overflow-hidden"
                    : "aspect-[5/4] overflow-hidden"
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </button>
          ))}
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(18,12,9,0.88)] px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${couple.groomName}와 ${couple.brideName}의 갤러리 확대 보기`}
            onClick={() => setCurrentIndex(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setCurrentIndex(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xl text-white backdrop-blur"
                aria-label="확대 보기 닫기"
              >
                ×
              </button>

              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/10">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[78vh] w-full object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 text-white">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex(
                      (activeIndex - 1 + gallery.images.length) % gallery.images.length
                    )
                  }
                  className="action-button border border-white/20 bg-white/10 text-white hover:bg-white/15"
                >
                  이전
                </button>
                <p className="text-sm text-white/80">
                  {activeIndex + 1} / {gallery.images.length}
                </p>
                <button
                  type="button"
                  onClick={() => setCurrentIndex((activeIndex + 1) % gallery.images.length)}
                  className="action-button border border-white/20 bg-white/10 text-white hover:bg-white/15"
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GallerySection;
