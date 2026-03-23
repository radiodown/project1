import { useState } from "react";
import { ThemePreset } from "@/data/themePresets";

interface ThemeTesterPanelProps {
  presets: ThemePreset[];
  activePresetId: string;
  onSelectPreset: (presetId: string) => void;
}

function ThemeTesterPanel({
  presets,
  activePresetId,
  onSelectPreset
}: ThemeTesterPanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full border border-line-strong bg-surface/95 px-4 py-3 text-sm font-semibold text-rosewood shadow-card backdrop-blur transition hover:border-clay hover:text-ink"
      >
        컬러 프리셋
      </button>
    );
  }

  return (
    <aside className="fixed bottom-4 right-4 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-[28px] border border-line-strong/90 bg-surface/95 p-4 shadow-card backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-rosewood/70">
            Theme Tester
          </p>
          <h2 className="mt-2 font-display text-3xl leading-none text-ink">
            컬러 프리셋 비교
          </h2>
          <p className="mt-2 text-sm leading-6 text-rosewood/80">
            버튼을 누르면 바로 적용됩니다. 선택값은 브라우저에 저장됩니다.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-soft text-lg text-rosewood transition hover:border-clay hover:text-ink"
          aria-label="테마 패널 닫기"
        >
          ×
        </button>
      </div>

      <div className="mt-4 grid gap-2">
        {presets.map((preset) => {
          const isActive = preset.id === activePresetId;

          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset.id)}
              className={`rounded-[22px] border p-3 text-left transition ${
                isActive
                  ? "border-clay bg-surface-tint shadow-[0_12px_30px_-24px_rgba(67,41,26,0.5)]"
                  : "border-line bg-surface-soft hover:border-line-strong hover:bg-surface"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{preset.name}</p>
                  <p className="mt-1 text-xs leading-5 text-rosewood/75">
                    {preset.description}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  {[
                    preset.colors.ivory,
                    preset.colors.sand,
                    preset.colors.rosewood,
                    preset.colors.clay,
                    preset.colors.ink
                  ].map((color) => (
                    <span
                      key={`${preset.id}-${color}`}
                      className="h-5 w-5 rounded-full border border-white/70 shadow-sm"
                      style={{ backgroundColor: `rgb(${color})` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs leading-5 text-rosewood/70">
        배포 환경에서는 주소 뒤에 <code>?theme-tester=1</code> 을 붙이면 다시 열 수 있습니다.
      </p>
    </aside>
  );
}

export default ThemeTesterPanel;
