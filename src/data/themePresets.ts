export interface ThemePresetColors {
  ivory: string;
  sand: string;
  rosewood: string;
  clay: string;
  sage: string;
  ink: string;
  surface: string;
  "surface-soft": string;
  "surface-tint": string;
  line: string;
  "line-strong": string;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  colors: ThemePresetColors;
}
export const defaultThemePresetId = "grand-budapest";
export const themePresets: ThemePreset[] = [
  {
    id: "grand-budapest",
    name: "Grand Budapest",
    description: "웨스 앤더슨 대표적인 핑크 & 레드 빈티지 톤",
    colors: {
      ivory: "255 244 246",
      sand: "245 215 220",
      rosewood: "167 64 86",
      clay: "220 120 140",
      sage: "162 180 150",
      ink: "60 35 45",
      surface: "255 255 255",
      "surface-soft": "255 250 252",
      "surface-tint": "255 235 240",
      line: "240 200 210",
      "line-strong": "220 160 175"
    }
  },
  {
    id: "moonrise-kingdom",
    name: "Moonrise Kingdom",
    description: "머스타드와 블루가 섞인 빈티지 캠프 톤",
    colors: {
      ivory: "250 248 235",
      sand: "235 220 180",
      rosewood: "120 85 60",
      clay: "210 170 90",
      sage: "140 160 130",
      ink: "50 45 40",
      surface: "255 255 255",
      "surface-soft": "255 253 245",
      "surface-tint": "250 240 210",
      line: "230 210 170",
      "line-strong": "210 185 140"
    }
  },
  {
    id: "royal-tenenbaums",
    name: "Royal Tenenbaums",
    description: "레드와 네이비 중심의 클래식 빈티지",
    colors: {
      ivory: "252 248 240",
      sand: "240 220 200",
      rosewood: "140 45 45",
      clay: "200 100 90",
      sage: "120 130 110",
      ink: "30 40 55",
      surface: "255 255 255",
      "surface-soft": "255 252 248",
      "surface-tint": "250 240 230",
      line: "230 210 200",
      "line-strong": "210 180 170"
    }
  },
  {
    id: "pastel-film",
    name: "Pastel Film",
    description: "부드러운 파스텔과 필름톤 기반 기본 프리셋",
    colors: {
      ivory: "248 244 240",
      sand: "230 220 210",
      rosewood: "130 90 80",
      clay: "190 150 130",
      sage: "150 170 150",
      ink: "55 50 45",
      surface: "255 255 255",
      "surface-soft": "252 250 248",
      "surface-tint": "245 240 235",
      line: "225 215 205",
      "line-strong": "200 185 170"
    }
  }
];

// export const defaultThemePresetId = "warm-ivory";

// export const themePresets: ThemePreset[] = [
//   {
//     id: "warm-ivory",
//     name: "Warm Ivory",
//     description: "현재 기본 톤과 가장 가까운 따뜻한 베이지",
//     colors: {
//       ivory: "251 245 239",
//       sand: "242 230 219",
//       rosewood: "125 91 82",
//       clay: "180 138 120",
//       sage: "127 140 121",
//       ink: "53 38 32",
//       surface: "255 255 255",
//       "surface-soft": "255 253 251",
//       "surface-tint": "255 248 243",
//       line: "241 226 217",
//       "line-strong": "228 205 194"
//     }
//   },
//   {
//     id: "blush-bloom",
//     name: "Blush Bloom",
//     description: "조금 더 화사한 로즈 핑크 중심 프리셋",
//     colors: {
//       ivory: "255 248 248",
//       sand: "247 231 234",
//       rosewood: "146 95 107",
//       clay: "201 140 154",
//       sage: "149 163 143",
//       ink: "57 38 43",
//       surface: "255 255 255",
//       "surface-soft": "255 252 252",
//       "surface-tint": "255 245 246",
//       line: "242 223 227",
//       "line-strong": "228 199 207"
//     }
//   },
//   {
//     id: "sage-ceremony",
//     name: "Sage Ceremony",
//     description: "차분한 그린과 아이보리를 섞은 내추럴 톤",
//     colors: {
//       ivory: "247 248 244",
//       sand: "232 237 228",
//       rosewood: "94 102 88",
//       clay: "136 154 124",
//       sage: "113 135 107",
//       ink: "44 49 41",
//       surface: "255 255 255",
//       "surface-soft": "251 252 249",
//       "surface-tint": "244 247 241",
//       line: "220 227 214",
//       "line-strong": "196 209 188"
//     }
//   },
//   {
//     id: "mist-blue",
//     name: "Mist Blue",
//     description: "조금 더 맑고 세련된 블루 그레이 프리셋",
//     colors: {
//       ivory: "248 249 251",
//       sand: "231 237 243",
//       rosewood: "91 113 130",
//       clay: "128 158 182",
//       sage: "133 150 141",
//       ink: "38 47 56",
//       surface: "255 255 255",
//       "surface-soft": "252 253 255",
//       "surface-tint": "243 247 251",
//       line: "217 226 234",
//       "line-strong": "192 206 219"
//     }
//   }
// ];

export function getThemePresetById(id: string | null | undefined) {
  return (
    themePresets.find((preset) => preset.id === id) ??
    themePresets.find((preset) => preset.id === defaultThemePresetId) ??
    themePresets[0]
  );
}

