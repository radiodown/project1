# 모바일 청첩장 템플릿

React, Vite, TypeScript, Tailwind CSS로 구성한 모바일 퍼스트 청첩장 템플릿입니다. 카카오 지도, 갤러리 확대 보기, YouTube 임베드, 연락 및 공유 기능을 포함합니다.


## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 환경 변수

`.env.example`를 복사해 `.env`를 만든 뒤 값을 채우면 됩니다.

```bash
VITE_KAKAO_JAVASCRIPT_KEY=YOUR_KAKAO_BROWSER_KEY
VITE_SITE_URL=https://your-domain.example
```

`VITE_KAKAO_JAVASCRIPT_KEY`가 없으면 지도 영역은 안내 카드로 대체되고, 외부 길찾기 링크는 계속 동작합니다.

## 데이터 수정

대부분의 문구와 정보는 [src/data/wedding.ts](/C:/Users/axgatge/Desktop/project1/src/data/wedding.ts) 한 파일에서 수정할 수 있습니다.

수정 가능한 대표 항목:

- 신랑/신부 이름
- 예식 날짜와 장소
- 교통 및 주차 안내
- 갤러리 이미지 목록
- 유튜브 영상 ID
- 연락처와 계좌 정보
- 공유용 메시지와 기본 URL

## 배포

GitHub Actions 기반 GitHub Pages 워크플로를 포함했습니다. 저장소를 GitHub에 올린 뒤 Pages를 `GitHub Actions` 소스로 설정하면 자동 배포할 수 있습니다.

