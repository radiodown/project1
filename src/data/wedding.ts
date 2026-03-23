export interface CoupleInfo {
  groomName: string;
  brideName: string;
  subtitle: string;
}

export interface HeroInfo {
  coverImage: string;
  coverAlt: string;
  invitation: string;
  badges: string[];
}

export interface GreetingInfo {
  title: string;
  body: string[];
  closing: string;
}

export interface EventInfo {
  datetime: string;
  venueName: string;
  hallName: string;
  address: string;
  roadAddress: string;
}

export interface VenueLink {
  label: string;
  url: string;
}

export interface DirectionInfo {
  label: string;
  description: string;
}

export interface VenueInfo {
  lat: number;
  lng: number;
  markerLabel: string;
  transportation: DirectionInfo[];
  parking: string;
  links: VenueLink[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
}

export interface GalleryInfo {
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface VideoItem {
  title: string;
  youtubeId: string;
  description: string;
}

export interface VideoInfo {
  title: string;
  description: string;
  items: VideoItem[];
}

export interface ContactPerson {
  role: string;
  name: string;
  phone: string;
}

export interface AccountInfo {
  label: string;
  bank: string;
  holder: string;
  number: string;
}

export interface ContactInfo {
  title: string;
  description: string;
  people: ContactPerson[];
  accounts: AccountInfo[];
  shareUrl: string;
  shareMessage: string;
}

export interface FooterInfo {
  note: string;
}

export interface WeddingSiteData {
  couple: CoupleInfo;
  hero: HeroInfo;
  greeting: GreetingInfo;
  event: EventInfo;
  venue: VenueInfo;
  gallery: GalleryInfo;
  videos: VideoInfo;
  contacts: ContactInfo;
  footer: FooterInfo;
}

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const weddingData: WeddingSiteData = {
  couple: {
    groomName: "김민준",
    brideName: "이서연",
    subtitle: "두 사람이 같은 계절을 바라보며 한 걸음을 함께 내딛습니다."
  },
  hero: {
    coverImage: asset("images/hero-cover.svg"),
    coverAlt: "웨딩 커버 이미지 플레이스홀더",
    invitation:
      "소중한 분들을 모시고 저희의 새로운 시작을 정중히 전하고자 합니다. 따뜻한 축복으로 자리를 빛내 주세요.",
    badges: ["Wedding Invitation", "May 16, 2026", "Seoul"]
  },
  greeting: {
    title: "초대합니다",
    body: [
      "서로의 하루를 가장 먼저 떠올리는 사람이 되어, 계절이 바뀌는 순간까지 함께 걷기로 했습니다.",
      "아껴 주신 마음을 오래 기억하며, 두 사람이 한 가족이 되는 자리에 소중한 걸음을 부탁드립니다."
    ],
    closing: "함께해 주시는 모든 마음을 오래도록 간직하겠습니다."
  },
  event: {
    datetime: "2026-05-16T14:30:00+09:00",
    venueName: "라포레 웨딩",
    hallName: "2층 그레이스홀",
    address: "서울특별시 강남구 테헤란로 123",
    roadAddress: "서울특별시 강남구 테헤란로 123 라포레 웨딩 2층"
  },
  venue: {
    lat: 37.5035963,
    lng: 127.0441125,
    markerLabel: "라포레 웨딩",
    transportation: [
      {
        label: "지하철",
        description: "2호선 선릉역 3번 출구에서 도보 4분"
      },
      {
        label: "버스",
        description: "테헤란로 선릉역 정류장 하차 후 도보 2분"
      },
      {
        label: "자가용",
        description: "내비게이션에 '라포레 웨딩' 또는 도로명 주소를 입력해 주세요"
      }
    ],
    parking:
      "건물 지하 2층부터 5층까지 주차 가능하며, 예식 당일 2시간 무료 주차가 제공됩니다.",
    links: [
      {
        label: "카카오맵 길찾기",
        url: "https://map.kakao.com/link/to/%EB%9D%BC%ED%8F%AC%EB%A0%88%20%EC%9B%A8%EB%94%A9,37.5035963,127.0441125"
      },
      {
        label: "네이버지도 길찾기",
        url: "https://map.naver.com/p/search/%EB%9D%BC%ED%8F%AC%EB%A0%88%20%EC%9B%A8%EB%94%A9"
      },
      {
        label: "티맵 열기",
        url: "https://www.tmap.co.kr/"
      }
    ]
  },
  gallery: {
    title: "우리의 장면들",
    description:
      "긴 설명보다도 먼저 전하고 싶은 마음을 사진에 담았습니다. 눌러서 더 크게 볼 수 있습니다.",
    images: [
      {
        src: asset("images/gallery-01.svg"),
        alt: "웨딩 갤러리 이미지 1",
        orientation: "portrait"
      },
      {
        src: asset("images/gallery-02.svg"),
        alt: "웨딩 갤러리 이미지 2",
        orientation: "landscape"
      },
      {
        src: asset("images/gallery-03.svg"),
        alt: "웨딩 갤러리 이미지 3",
        orientation: "portrait"
      },
      {
        src: asset("images/gallery-04.svg"),
        alt: "웨딩 갤러리 이미지 4",
        orientation: "landscape"
      },
      {
        src: asset("images/gallery-05.svg"),
        alt: "웨딩 갤러리 이미지 5",
        orientation: "portrait"
      },
      {
        src: asset("images/gallery-06.svg"),
        alt: "웨딩 갤러리 이미지 6",
        orientation: "landscape"
      }
    ]
  },
  videos: {
    title: "영상으로 전하는 마음",
    description:
      "예식 전에 함께 보면 더 반가운 순간들을 담았습니다. 실제 영상으로 바로 교체할 수 있도록 YouTube ID만 분리해 두었습니다.",
    items: [
      {
        title: "웨딩 필름 예시",
        youtubeId: "ysz5S6PUM-U",
        description: "식전 분위기를 가볍게 보여 주는 샘플 영상입니다."
      },
      {
        title: "프러포즈 스토리 예시",
        youtubeId: "ScMzIvxBSi4",
        description: "추억 영상을 넣고 싶을 때 교체하기 쉬운 두 번째 슬롯입니다."
      }
    ]
  },
  contacts: {
    title: "연락 및 공유",
    description:
      "궁금한 점이 있거나 빠르게 연락이 필요하시면 아래 번호를 이용해 주세요. 계좌번호 복사와 링크 공유도 한 번에 할 수 있습니다.",
    people: [
      {
        role: "신랑",
        name: "김민준",
        phone: "010-1234-5678"
      },
      {
        role: "신부",
        name: "이서연",
        phone: "010-9876-5432"
      },
      {
        role: "신랑측 혼주",
        name: "김도윤",
        phone: "010-2222-3333"
      },
      {
        role: "신부측 혼주",
        name: "이정민",
        phone: "010-4444-5555"
      }
    ],
    accounts: [
      {
        label: "신랑측 마음 전하실 곳",
        bank: "국민은행",
        holder: "김민준",
        number: "123456-78-901234"
      },
      {
        label: "신부측 마음 전하실 곳",
        bank: "신한은행",
        holder: "이서연",
        number: "110-543-210987"
      }
    ],
    shareUrl: siteUrl,
    shareMessage: "민준 & 서연의 모바일 청첩장을 보내드립니다. 소중한 마음으로 함께해 주세요."
  },
  footer: {
    note: "귀한 시간을 내어 축하해 주시는 모든 분들께 진심으로 감사드립니다."
  }
};
