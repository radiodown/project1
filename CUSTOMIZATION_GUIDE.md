# 청첩장 수정 설명서

웹 개발을 잘 몰라도 이 파일만 보면 주요 내용을 바꿀 수 있게 정리했습니다.

## 1. 가장 먼저 알아둘 것

이 프로젝트에서 대부분의 내용은 아래 3곳만 알면 수정할 수 있습니다.

1. [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts)
2. [public/images/](/C:/Users/axgatge/Desktop/project1/public/images)
3. [tailwind.config.cjs](/C:/Users/axgatge/Desktop/project1/tailwind.config.cjs)

간단히 말하면:

- 문구, 날짜, 장소, 연락처, 영상 주소 변경: `src/data/wedding.ts`
- 사진 파일 교체: `public/images/`
- 전체 색감 변경: `tailwind.config.cjs`

## 2. 미리보기 실행 방법

PowerShell에서 프로젝트 폴더로 들어간 뒤 실행합니다.

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm.cmd install
npm.cmd run dev
```

브라우저에서 보통 `http://localhost:5173` 로 접속하면 됩니다.

## 3. 문구와 날짜를 바꾸는 곳

파일: [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts)

이 파일은 청첩장 내용 전체를 모아 둔 파일입니다.

### 자주 바꾸는 항목

`couple`

- 신랑 이름: `groomName`
- 신부 이름: `brideName`
- 메인 소개 문구: `subtitle`

`hero`

- 첫 화면 대표 이미지: `coverImage`
- 첫 화면 초대 문구: `invitation`
- 첫 화면 작은 배지 문구: `badges`

`greeting`

- 인사말 제목: `title`
- 인사말 본문: `body`
- 마지막 문구: `closing`

`event`

- 예식 날짜와 시간: `datetime`
- 예식장 이름: `venueName`
- 홀 이름: `hallName`
- 주소: `address`
- 도로명 주소: `roadAddress`

`venue`

- 지도 좌표: `lat`, `lng`
- 지도 마커 이름: `markerLabel`
- 지하철/버스/자가용 안내: `transportation`
- 주차 안내: `parking`
- 외부 지도 링크: `links`

`gallery`

- 갤러리 제목: `title`
- 설명 문구: `description`
- 사진 목록: `images`

`videos`

- 영상 섹션 제목/설명
- 유튜브 영상 ID: `youtubeId`

`contacts`

- 연락처 목록: `people`
- 계좌번호 목록: `accounts`
- 공유 링크 주소: `shareUrl`
- 공유 문구: `shareMessage`

## 4. 날짜와 시간 바꾸는 예시

파일: [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts)

현재 예시는 이렇게 들어 있습니다.

```ts
datetime: "2026-05-16T14:30:00+09:00"
```

뜻:

- `2026-05-16`: 2026년 5월 16일
- `14:30:00`: 오후 2시 30분
- `+09:00`: 한국 시간

예를 들어 2026년 10월 3일 오전 11시로 바꾸려면:

```ts
datetime: "2026-10-03T11:00:00+09:00"
```

## 5. 사진 바꾸는 방법

사진은 두 단계로 바꾸면 됩니다.

### 첫 화면 대표 이미지 바꾸기

1. 원하는 이미지를 [public/images/](/C:/Users/axgatge/Desktop/project1/public/images) 안에 넣습니다.
2. [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts) 에서 `hero.coverImage` 값을 바꿉니다.

현재:

```ts
coverImage: asset("images/hero-cover.svg")
```

예를 들어 `my-cover.jpg` 파일을 넣었다면:

```ts
coverImage: asset("images/my-cover.jpg")
```

### 갤러리 사진 바꾸기

1. 원하는 사진을 [public/images/](/C:/Users/axgatge/Desktop/project1/public/images) 안에 넣습니다.
2. [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts) 의 `gallery.images` 배열을 수정합니다.

예시:

```ts
images: [
  {
    src: asset("images/photo-01.jpg"),
    alt: "웨딩 사진 1",
    orientation: "portrait"
  },
  {
    src: asset("images/photo-02.jpg"),
    alt: "웨딩 사진 2",
    orientation: "landscape"
  }
]
```

### `orientation` 뜻

- `portrait`: 세로 사진
- `landscape`: 가로 사진

사진이 세로인지 가로인지 맞게 적어 주면 레이아웃이 더 자연스럽습니다.

## 6. 이미지 파일을 넣을 때 주의할 점

- 파일명은 가능하면 영어와 숫자로만 만드세요.
- 예: `photo-01.jpg`, `gallery-main.webp`
- 너무 큰 사진은 느려질 수 있으니 미리 줄이는 것이 좋습니다.
- 권장 형식: `jpg`, `png`, `webp`

처음에는 원본 사진을 넣어도 되지만, 나중에는 `webp`로 바꾸면 더 가볍습니다.

## 7. 전체 색감 바꾸는 곳

파일: [tailwind.config.cjs](/C:/Users/axgatge/Desktop/project1/tailwind.config.cjs)

여기에서 프로젝트의 기본 색 이름을 정해 두었습니다.

현재 색상:

```js
colors: {
  ivory: "#fbf5ef",
  sand: "#f2e6db",
  rosewood: "#7d5b52",
  clay: "#b48a78",
  sage: "#7f8c79",
  ink: "#352620"
}
```

### 각 색의 역할

- `ivory`: 전체 배경
- `sand`: 밝은 보조 배경
- `rosewood`: 포인트 색, 버튼/문구
- `clay`: 강조 색
- `sage`: 보조 포인트 색
- `ink`: 기본 글자색

### 색상 바꾸는 가장 쉬운 방법

예를 들어 전체를 조금 더 핑크톤으로 바꾸고 싶으면:

```js
colors: {
  ivory: "#fff8f8",
  sand: "#f7e7ea",
  rosewood: "#925f6b",
  clay: "#c98c9a",
  sage: "#8d9a8a",
  ink: "#33252a"
}
```

저장 후 화면을 새로고침하면 바로 반영됩니다.

## 8. 미리 만들어 둔 컬러 프리셋 비교하기

파일: [src/data/themePresets.ts](/C:/Users/axgatge/Desktop/project1/src/data/themePresets.ts)

여기에는 비교용 컬러 프리셋이 여러 개 들어 있습니다.

- `Warm Ivory`
- `Blush Bloom`
- `Sage Ceremony`
- `Mist Blue`

### 로컬 개발 중 비교하는 방법

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm.cmd run dev
```

개발 서버로 열면 화면 오른쪽 아래에 `컬러 프리셋` 패널이 보입니다.

버튼을 누를 때마다 바로 테마가 바뀝니다.

### 배포된 사이트에서 비교하는 방법

주소 뒤에 아래처럼 붙이면 됩니다.

```text
?theme-tester=1
```

예:

```text
https://내사이트주소/?theme-tester=1
```

특정 프리셋으로 바로 열고 싶으면:

```text
https://내사이트주소/?theme-tester=1&theme=blush-bloom
```

가능한 `theme` 값:

- `warm-ivory`
- `blush-bloom`
- `sage-ceremony`
- `mist-blue`

### 프리셋 자체 색을 바꾸는 방법

[src/data/themePresets.ts](/C:/Users/axgatge/Desktop/project1/src/data/themePresets.ts) 에서 각 프리셋의 색 숫자를 바꾸면 됩니다.

예:

```ts
colors: {
  ivory: "255 248 248",
  sand: "247 231 234",
  rosewood: "146 95 107",
  clay: "201 140 154",
  ...
}
```

숫자는 `R G B` 형식입니다.

예를 들어:

- `255 248 248` = 아주 밝은 분홍빛 흰색
- `146 95 107` = 탁한 로즈 계열

## 9. 일부 화면 색만 바꾸고 싶을 때

조금 더 세부적으로 바꾸려면 아래 파일도 보면 됩니다.

파일: [src/styles.css](/C:/Users/axgatge/Desktop/project1/src/styles.css)

여기에는 공통 카드 모양, 버튼 스타일, 배경 효과가 들어 있습니다.

예를 들어:

- 카드 느낌 수정: `.soft-card`
- 섹션 박스 수정: `.section-shell`
- 버튼 공통 스타일 수정: `.action-button`

처음에는 이 파일은 건드리지 말고, 먼저 `tailwind.config.cjs` 색상만 바꾸는 것을 추천합니다.

## 10. 영상 바꾸는 방법

파일: [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts)

현재는 `youtubeId`만 넣도록 되어 있습니다.

예:

```ts
{
  title: "웨딩 필름",
  youtubeId: "ysz5S6PUM-U",
  description: "식전 영상"
}
```

유튜브 주소가

```text
https://www.youtube.com/watch?v=abc123XYZ
```

라면 넣어야 하는 값은 전체 주소가 아니라 마지막의 `abc123XYZ` 입니다.

## 11. 지도 위치 바꾸는 방법

파일: [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts)

수정할 값:

- `venueName`
- `hallName`
- `address`
- `roadAddress`
- `lat`
- `lng`

### 좌표를 모를 때

카카오맵이나 네이버지도에서 장소를 찾은 뒤 좌표를 확인해야 합니다.

만약 좌표를 아직 모르겠다면:

- 주소만 먼저 바꿔 두고
- `lat`, `lng`는 나중에 수정해도 됩니다

단, 정확한 지도 표시를 위해서는 최종적으로 좌표가 필요합니다.

## 12. 연락처와 계좌번호 바꾸는 방법

파일: [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts)

연락처는 `contacts.people`에서 수정합니다.

```ts
people: [
  {
    role: "신랑",
    name: "김민준",
    phone: "010-1234-5678"
  }
]
```

계좌번호는 `contacts.accounts`에서 수정합니다.

```ts
accounts: [
  {
    label: "신랑측 마음 전하실 곳",
    bank: "국민은행",
    holder: "김민준",
    number: "123456-78-901234"
  }
]
```

## 13. 사이트 주소와 공유 링크 바꾸기

파일: [.env.example](/C:/Users/axgatge/Desktop/project1/.env.example)

실제로 배포할 때는 프로젝트 루트에 `.env` 파일을 만들고 아래처럼 넣으면 됩니다.

```env
VITE_KAKAO_JAVASCRIPT_KEY=여기에_카카오_자바스크립트_키
VITE_SITE_URL=https://내-사이트-주소
```

`VITE_SITE_URL`을 넣으면 공유 버튼이 그 주소를 복사합니다.

## 14. 초보자에게 추천하는 수정 순서

1. [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts) 에서 이름, 날짜, 장소, 연락처부터 바꾸기
2. [public/images/](/C:/Users/axgatge/Desktop/project1/public/images) 에 사진 넣기
3. `hero.coverImage` 와 `gallery.images` 경로 바꾸기
4. [tailwind.config.cjs](/C:/Users/axgatge/Desktop/project1/tailwind.config.cjs) 에서 색감 바꾸기
5. `npm.cmd run dev` 로 확인하기

## 15. 수정하다가 문제가 생기면 먼저 볼 곳

- 사진이 안 보이면: 파일명이 맞는지 확인
- 날짜가 이상하면: `datetime` 형식 확인
- 지도가 안 뜨면: `.env`에 `VITE_KAKAO_JAVASCRIPT_KEY` 확인
- 색이 마음에 안 들면: `tailwind.config.cjs` 또는 `src/data/themePresets.ts` 수정

## 16. 정말 최소한만 기억하면

- 내용 바꾸기: [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts)
- 사진 바꾸기: [public/images/](/C:/Users/axgatge/Desktop/project1/public/images)
- 색 바꾸기: [tailwind.config.cjs](/C:/Users/axgatge/Desktop/project1/tailwind.config.cjs)
