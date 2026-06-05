export interface ExperienceItem {
  step: number;
  title: string;
  description: string;
}

export interface DesignPrinciple {
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  rowStagger: string;
  columnStagger: string;
  dactyl: string;
  pag3b: string;
}

export interface HistoryItem {
  version: string;
  period: string;
  summary: string;
  isCurrent?: boolean;
  image?: { src: string; alt: string };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TechSpec {
  label: string;
  value: string;
  details?: string[];
  image?: { src: string; alt: string };
  references?: { text: string; href: string }[];
}

export interface AcronymEntry {
  letter: string;
  english: string;
  japanese: string;
}

export const projectMeta = {
  name: "PAG3B",
  fullName: "Personalized Automatic Generative 3D Backward-tilting Keyboard",
  tagline: "Trace down, tone up, touch in",
  acronym: [
    { letter: "P", english: "Personalized", japanese: "個人最適化" },
    { letter: "A", english: "Automatic", japanese: "自動生成" },
    { letter: "G", english: "Generative", japanese: "計測からモデルを生成" },
    { letter: "3D", english: "3 Dimensional", japanese: "立体配置" },
    { letter: "B", english: "Backward-tilting", japanese: "後傾角" },
  ] as AcronymEntry[],
};

export const experienceItems: ExperienceItem[] = [
  {
    step: 1,
    title: "カメラで手を撮影",
    description:
      "会場のカメラとブラウザで動く計測アプリが指の長さを自動で読み取ります。専用機器は不要で、一般的なカメラがあれば動きます。",
  },
  {
    step: 2,
    title: "あなた専用のキーボードモデルを確認",
    description: "計測値から生成された3Dモデルを見せてもらえます。",
  },
  {
    step: 3,
    title: "v4プロトタイプを実際に触る",
    description: "現在動作する実機を体感できます。",
  },
];

export const designPhilosophyPrinciples: DesignPrinciple[] = [
  {
    title: "運動記憶の最小化",
    description:
      "不要な関節運動を排除することで習得コストと腱鞘炎リスクを同時に下げる",
  },
  {
    title: "選択コストの最小化",
    description: "最適パラメータを「探す」のではなく、手の測定から「決定」する",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "指の動きに合わせた縦方向の配置",
    rowStagger: "✗",
    columnStagger: "✓",
    dactyl: "✓",
    pag3b: "✓",
  },
  {
    feature: "指の長さに合わせたキー位置",
    rowStagger: "✗",
    columnStagger: "固定パラメータ",
    dactyl: "固定パラメータ",
    pag3b: "個人計測値",
  },
  {
    feature: "3D配置",
    rowStagger: "✗",
    columnStagger: "✗",
    dactyl: "✓",
    pag3b: "✓",
  },
  {
    feature: "キーピッチの個人最適化",
    rowStagger: "✗",
    columnStagger: "✗",
    dactyl: "✗",
    pag3b: "✓",
  },
  {
    feature: "腱鞘炎防止設計（手根関節角度考慮）",
    rowStagger: "✗",
    columnStagger: "✗",
    dactyl: "△",
    pag3b: "✓",
  },
  {
    feature: "自動生成（誰でも作れる）",
    rowStagger: "—",
    columnStagger: "—",
    dactyl: "✗",
    pag3b: "✓",
  },
];

export const techSpecs: TechSpec[] = [
  {
    label: "コントローラー",
    value: "Raspberry Pi Pico (W) + RMK v0.8（Vial対応）",
  },
  {
    label: "手計測アプリ",
    value: "React 19 + TypeScript + MediaPipe Tasks Vision + OpenCV.js",
  },
  {
    label: "CAD生成",
    value: "Deno + TypeScript + Onshape CAD API",
  },
  {
    label: "スイッチ配置",
    value: "ジグザグ方式",
    image: {
      src: "/zigzag-switch-arrangement.jpg",
      alt: "スイッチがジグザグに上下配置され、キーキャップの足の長さで打鍵面を水平に揃えている断面",
    },
    details: [
      "奇数行（1・3行目）：低い位置",
      "偶数行（2・4行目）：高い位置",
      "高低差は固定定数（現在9mm）",
      "キーキャップの足の長さで打鍵面を水平に揃える",
    ],
  },
  {
    label: "親指キー",
    value:
      "巨大なスペースバーを廃止し、親指の自然な可動範囲に合わせた複数の親指キーを配置",
  },
  {
    label: "配線方式",
    value: "PCBレス（より線にスイッチとダイオードを直接刺す）",
    image: {
      src: "/pcbless-wiring.jpg",
      alt: "より線にスイッチとダイオードを直接刺したPCBレス配線の様子",
    },
    details: [
      "PCB・フレキ製造コストがゼロ",
      "基板製造の待ち時間なしに即プロトタイプできる",
      "筐体の3D形状に対して自由度の高い配線が可能",
    ],
    references: [
      {
        text: "AndyChiu/hotswap_pcb_generator",
        href: "https://github.com/AndyChiu/hotswap_pcb_generator",
      },
      {
        text: "50an6xy06r6n/hotswap_pcb_generator",
        href: "https://github.com/50an6xy06r6n/hotswap_pcb_generator",
      },
    ],
  },
];

export const historyItems: HistoryItem[] = [
  {
    version: "v1",
    period: "2025年3月",
    summary:
      "初プロトタイプ。手配線・5サイズのモックを展示。設計上の方向性を確立",
  },
  {
    version: "v2",
    period: "—",
    summary: "スイッチ自作路線を試みるも精度の限界で断念",
  },
  {
    version: "v3",
    period: "2026年2月",
    summary:
      "マイクロスイッチ採用・PCB自動生成・手計測→モデル生成フロー確立。天下一KB会・卒業展示会に出展",
  },
  {
    version: "v4",
    period: "2026年6月",
    summary: "ジグザグ配置・PCBレス・初動作モデル完成",
    isCurrent: true,
    image: { src: "/v4-prototype.jpg", alt: "PAG3B v4プロトタイプ" },
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "測定アプリはどこで使えますか？",
    answer:
      "現在は展示ブースのみで体験できます。測定アプリ自体は10円玉とスマートフォンのカメラがあれば動作するため、専用の機器は必要ありません。ただし現時点では生成されるモデルのクオリティがまだ実用に達していないため、一般公開はしていません。モデルの完成度が上がり次第、Webアプリとして公開する予定です。",
  },
  {
    question: "自分の手でも体験できますか？",
    answer:
      "手の測定と、そこから生成される3Dモデルの確認は体験できます。実機の試打もできますが、展示している実機は開発者の手のサイズで制作したものです。あなたの計測値から作られた実機を試打できるわけではありません。",
  },
  {
    question: "QWERTY以外の論理配列と組み合わせられますか？",
    answer:
      "ファームウェアにRMKを使用しており、論理配列は自由に設定できます。物理配列はColumn stagger系（縦列が揃っている）なので、多くの配列と相性が良いです。なお、このプロジェクトの考えでは論理配列にこだわる前にまず物理配列を自分の手に合わせることが先決だと考えています。PAG3Bの物理配列がある程度完成した暁には、論理配列の設計にも取り組む予定です。",
  },
  {
    question: "どんな手のサイズに対応していますか？",
    answer:
      "スイッチの物理的なサイズが最小ピッチの下限となるため、すべてのサイズに対応できるわけではありません。目標としてAIST人体寸法データベースに記録された日本人の最小値まで対応することを目指しています。",
  },
];
