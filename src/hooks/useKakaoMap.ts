import { RefObject, useEffect, useState } from "react";

type MapStatus = "disabled" | "loading" | "ready" | "error";

interface MapOptions {
  lat: number;
  lng: number;
  markerLabel: string;
}

let kakaoSdkPromise: Promise<void> | null = null;

function loadKakaoMapSdk(appKey: string) {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.kakao?.maps) {
    return new Promise<void>((resolve) => {
      window.kakao?.maps.load(resolve);
    });
  }

  if (!kakaoSdkPromise) {
    kakaoSdkPromise = new Promise<void>((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        "script[data-kakao-map-sdk='true']"
      );

      const handleLoad = () => {
        if (!window.kakao?.maps?.load) {
          reject(new Error("Kakao map SDK is unavailable."));
          return;
        }

        window.kakao.maps.load(resolve);
      };

      if (existingScript) {
        existingScript.addEventListener("load", handleLoad, { once: true });
        existingScript.addEventListener(
          "error",
          () => reject(new Error("Failed to load Kakao map SDK.")),
          { once: true }
        );
        return;
      }

      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
      script.async = true;
      script.dataset.kakaoMapSdk = "true";
      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener(
        "error",
        () => reject(new Error("Failed to load Kakao map SDK.")),
        { once: true }
      );
      document.head.appendChild(script);
    });
  }

  return kakaoSdkPromise;
}

export function useKakaoMap(
  containerRef: RefObject<HTMLDivElement>,
  options: MapOptions
) {
  const [status, setStatus] = useState<MapStatus>(
    import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY ? "loading" : "disabled"
  );

  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;

    if (!appKey) {
      setStatus("disabled");
      return;
    }

    if (!containerRef.current) {
      return;
    }

    let cancelled = false;
    setStatus("loading");

    loadKakaoMapSdk(appKey)
      .then(() => {
        if (cancelled || !containerRef.current || !window.kakao?.maps) {
          return;
        }

        const position = new window.kakao.maps.LatLng(options.lat, options.lng);
        const map = new window.kakao.maps.Map(containerRef.current, {
          center: position,
          level: 3,
          draggable: true
        });

        const marker = new window.kakao.maps.Marker({
          position
        });

        marker.setMap(map);

        const infoWindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding: 10px 12px; font-size: 12px; font-weight: 600; color: #6f5448;">${options.markerLabel}</div>`
        });

        infoWindow.open(map, marker);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [containerRef, options.lat, options.lng, options.markerLabel]);

  return status;
}
