import { useEffect, useState } from "react";
import {
  defaultThemePresetId,
  getThemePresetById,
  themePresets
} from "@/data/themePresets";

const STORAGE_KEY = "wedding-theme-preset";

function readThemeFromSearchParams() {
  if (typeof window === "undefined") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("theme");
}

function readInitialPresetId() {
  const queryTheme = readThemeFromSearchParams();

  if (queryTheme) {
    return getThemePresetById(queryTheme).id;
  }

  if (typeof window === "undefined") {
    return defaultThemePresetId;
  }

  return getThemePresetById(window.localStorage.getItem(STORAGE_KEY)).id;
}

function isThemeTesterEnabled() {
  if (typeof window === "undefined") {
    return false;
  }

  const testerFlag = new URLSearchParams(window.location.search).get("theme-tester");
  return import.meta.env.DEV || testerFlag === "1";
}

function applyThemePreset(presetId: string) {
  if (typeof document === "undefined") {
    return;
  }

  const preset = getThemePresetById(presetId);
  const root = document.documentElement;

  Object.entries(preset.colors).forEach(([token, value]) => {
    root.style.setProperty(`--color-${token}`, value);
  });

  root.dataset.themePreset = preset.id;
}

export function useThemePreset() {
  const [activePresetId, setActivePresetId] = useState(readInitialPresetId);
  const testerEnabled = isThemeTesterEnabled();
  const activePreset = getThemePresetById(activePresetId);

  useEffect(() => {
    applyThemePreset(activePreset.id);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, activePreset.id);
    }
  }, [activePreset]);

  return {
    activePreset,
    activePresetId: activePreset.id,
    setActivePresetId,
    testerEnabled,
    presets: themePresets
  };
}

