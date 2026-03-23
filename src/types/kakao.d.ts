export {};

declare global {
  interface KakaoLatLng {}

  interface KakaoMap {}

  interface KakaoMarker {
    setMap(map: KakaoMap | null): void;
  }

  interface KakaoInfoWindow {
    open(map: KakaoMap, marker: KakaoMarker): void;
    close(): void;
  }

  interface Window {
    kakao?: {
      maps: {
        load(callback: () => void): void;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        Map: new (
          container: HTMLElement,
          options: {
            center: KakaoLatLng;
            level: number;
            draggable?: boolean;
          }
        ) => KakaoMap;
        Marker: new (options: { position: KakaoLatLng }) => KakaoMarker;
        InfoWindow: new (options: { content: string }) => KakaoInfoWindow;
      };
    };
  }
}

