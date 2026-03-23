import { useEffect, useState } from "react";
import {
  defaultThemePresetId,
  getThemePresetById,
  themePresets
} from "@/data/themePresets";

const STORAGE_KEY = "wedding-theme-preset";

function readStoredPresetId() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function persistPresetId(presetId: string) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, presetId);
  } catch {
    // Ignore storage failures and keep the selected theme in memory only.
  }
}

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

  return getThemePresetById(readStoredPresetId()).id;
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
    persistPresetId(activePreset.id);
  }, [activePreset]);

  return {
    activePreset,
    activePresetId: activePreset.id,
    setActivePresetId,
    testerEnabled,
    presets: themePresets
  };
}
