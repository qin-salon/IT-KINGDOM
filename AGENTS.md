# AGENTS.md - IT KINGDOM プロジェクトガイド

このドキュメントは、AI エージェントがこのプロジェクトを理解し、修正・アップデートを行うための情報をまとめたものです。

## プロジェクト概要

**IT KINGDOM** は、プログラミング YouTuber「しまぶー」が運営するオンラインサロンのランディングページです。

- **URL**: https://it-kingdom.com
- **作成時期**: 2020-2022 年頃
- **目的**: オンラインサロンの紹介・入会促進

## 技術スタック

### コア技術

| パッケージ | 現在のバージョン | 備考              |
| ---------- | ---------------- | ----------------- |
| Next.js    | 12.1.4           | Pages Router 使用 |
| React      | 18.0.0           |                   |
| TypeScript | 4.6.3            |                   |
| Sass       | 1.49.10          | CSS Modules 使用  |

### 開発ツール

| パッケージ      | 現在のバージョン | 備考                    |
| --------------- | ---------------- | ----------------------- |
| ESLint          | 8.12.0           | eslint-config-next 使用 |
| Prettier        | 2.6.1            | printWidth: 120         |
| Jest            | 27.5.1           | スナップショットテスト  |
| Testing Library | 13.0.0           | @testing-library/react  |

### 依存ライブラリ

| パッケージ    | 用途                 |
| ------------- | -------------------- |
| clsx          | 条件付きクラス名結合 |
| next-head-seo | SEO メタタグ管理     |
| ress          | CSS リセット         |

## ディレクトリ構造

```
IT-KINGDOM/
├── public/                    # 静的アセット
│   ├── favicon_io/           # ファビコン関連
│   ├── img/                  # 画像ファイル
│   │   ├── hero/            # ヒーローセクション（レスポンシブ画像）
│   │   ├── contents/        # コンテンツセクション
│   │   ├── members/         # メンバー写真
│   │   └── vision/          # ビジョンセクション
│   └── itk.mp4              # コンセプト動画
├── src/
│   ├── components/          # UIコンポーネント
│   ├── constants/           # 定数定義
│   ├── layouts/             # レイアウトコンポーネント
│   ├── pages/               # Next.js Pages Router
│   ├── styles/              # グローバルスタイル
│   └── types/               # TypeScript型定義
├── test/                     # テストファイル
├── package.json
├── tsconfig.json
├── next.config.js
└── jest.config.js
```

## コンポーネント一覧

### レイアウト (`src/layouts/`)

| コンポーネント | ファイル            | 責務                                            |
| -------------- | ------------------- | ----------------------------------------------- |
| MainLayout     | `main/index.tsx`    | メインページ用レイアウト（Header, Footer, SEO） |
| SupportLayout  | `support/index.tsx` | サポートページ用レイアウト（noindex 設定）      |

### ページコンポーネント (`src/components/`)

| コンポーネント    | ファイル                                | 責務                                       |
| ----------------- | --------------------------------------- | ------------------------------------------ |
| FirstView         | `first-view/index.tsx`                  | ヒーローセクション、チャンネル登録者数表示 |
| ConceptVideo      | `concept-video/index.tsx`               | コンセプト動画セクション                   |
| Vision            | `vision/index.tsx`                      | ビジョン説明セクション                     |
| Contents          | `contents/index.tsx`                    | サロンコンテンツ紹介                       |
| StepUp            | `step/index.tsx`                        | ステップアップ説明                         |
| Members           | `members/index.tsx`                     | 運営メンバー紹介                           |
| MessagePriceEntry | `message-price-entry/index.tsx`         | メッセージ・料金・入会方法の複合セクション |
| Message           | `message/index.tsx`                     | 国王のメッセージ                           |
| Price             | `price/index.tsx`                       | 料金表示                                   |
| Entry             | `entry/index.tsx`                       | 入国方法説明                               |
| Faq               | `faq/index.tsx`                         | よくある質問                               |
| Header            | `header/index.tsx`                      | サイトヘッダー                             |
| Footer            | `footer/index.tsx`                      | サイトフッター                             |
| Headline          | `headline/index.tsx`                    | セクション見出し（再利用可能）             |
| VideoClickToPlay  | `concept-video/video-click-to-play.tsx` | クリックで再生する動画プレイヤー           |

## ページ構成

| パス                      | ファイル                           | 説明                             |
| ------------------------- | ---------------------------------- | -------------------------------- |
| `/`                       | `pages/index.tsx`                  | トップページ（SSG + ISR 1 時間） |
| `/faq`                    | `pages/faq.tsx`                    | よくある質問                     |
| `/support/terms`          | `pages/support/terms.tsx`          | 利用規約                         |
| `/support/privacy-policy` | `pages/support/privacy-policy.tsx` | プライバシーポリシー             |
| `/support/commerce`       | `pages/support/commerce.tsx`       | 特定商取引法に基づく表記         |

## データフロー

### YouTube API 連携

トップページで YouTube チャンネルの登録者数を取得し表示しています。

```typescript
// src/pages/index.tsx
export const getStaticProps: GetStaticProps<Props> = async () => {
  const URL = "https://www.googleapis.com/youtube/v3";
  const CHANNEL = "UCti6dG0zSAetLGGYcgNML4Q";
  const res = await fetch(`${URL}/channels?id=${CHANNEL}&part=statistics&key=${process.env.YOUTUBE_API_KEY}`);
  // ISR: 1時間ごとに再生成
  return { props: { subscriberCount: parseInt(count) }, revalidate: 60 * 60 };
};
```

## 環境変数

| 変数名            | 用途                            | 必須 |
| ----------------- | ------------------------------- | ---- |
| `YOUTUBE_API_KEY` | YouTube Data API v3 の API キー | はい |

型定義: `src/types/index.d.ts`

## スタイリング規約

### CSS Modules + SCSS

- 各コンポーネントに `index.module.scss` を配置
- グローバルスタイルは `src/styles/global.scss`
- フォント: 游明朝系（Noto Serif JP フォールバック）
- 背景色: 黒 (#000000)

### クラス命名

- CSS Modules の自動生成クラス名を使用
- グローバルクラス: `.sansSerif`（ゴシック体）

### レスポンシブ対応

- ブレークポイント: 768px, 1024px, 1200px
- `clamp()`, `min()`, `max()` でサイズ調整
- `picture` + `srcSet` でレスポンシブ画像

## 開発コマンド

```bash
# 依存関係インストール
bun install

# 開発サーバー起動
bun dev

# 本番ビルド
bun run build

# 本番サーバー起動
bun start

# リント実行
bun run lint

# リント自動修正
bun run fix

# テスト実行（リント + ユニットテスト）
bun run test

# ユニットテストのみ
bun run unit
```

## 既知の技術的負債

### 高優先度

1. **Next.js Image API の非推奨プロパティ**
   - `layout="responsive"` → `style` または `fill` に移行必要
   - 影響ファイル: `first-view`, `vision`, `contents`, `members` など

2. **Link コンポーネントの非推奨パターン**
   - `<Link><a>...</a></Link>` → `<Link>...</Link>` に移行
   - 影響ファイル: `header/index.tsx`, `footer/index.tsx`, `support/terms.tsx`

3. **@types/react バージョン不一致**
   - React 18 使用中に `@types/react@17` を使用
   - `JSX.Element` 型の問題が発生する可能性

### 中優先度

4. **next-head-seo の移行検討**
   - Next.js 13+ の Metadata API への移行を推奨
   - App Router 移行時に対応

5. **TypeScript 設定の更新**
   - `target: "es5"` は古い（`es2017` 以上推奨）
   - `module`, `moduleResolution` の更新検討

6. **ESLint 設定の整理**
   - 設定ファイルが package.json 内になく、eslint-config-next のみ使用
   - flat config への移行検討

### 低優先度

7. **テストの `any` 使用**
   - `test/test-utils.ts` で `as any` を使用
   - 型安全性の改善検討

## アップデート時の注意点

### Next.js 13+ への移行

1. Pages Router は引き続きサポートされるため、段階的移行が可能
2. `next/image` の新しい API に移行必須
3. `next/link` から `<a>` タグを削除
4. App Router 移行時は `next-head-seo` を Metadata API に置換

### パッケージ更新時

1. `bun.lock` を削除してから `bun install` で再インストール推奨
2. スナップショットテストは `bun run unit -u` で更新
3. ESLint エラーは `bun run fix` で自動修正を試行

## 外部リンク

| サービス     | URL                      | 用途       |
| ------------ | ------------------------ | ---------- |
| 入会ページ   | https://qin.salon/signup | 入国手続き |
| お問い合わせ | Google Forms             | サポート   |

定数定義: `src/constants/index.ts`

## コーディング規約

### TypeScript

- 関数コンポーネントを使用
- Props は型エイリアスで定義
- 戻り値は `JSX.Element` を明示

### インポート順序

1. 外部ライブラリ
2. `next/*` 関連
3. `src/*` のローカルモジュール（絶対パス）
4. スタイル

### コンポーネント構造

```typescript
// インポート
import clsx from "clsx";
import Image from "next/image";
import styles from "src/components/xxx/index.module.scss";

// 定数（必要に応じて）
const ITEMS = [...];

// Props型（必要に応じて）
type Props = { ... };

// コンポーネント
export function ComponentName({ prop }: Props): JSX.Element {
  return (
    <section className={styles.container}>
      ...
    </section>
  );
}
```

## ファイル命名規則

- コンポーネント: `kebab-case` ディレクトリ + `index.tsx`
- スタイル: `index.module.scss` または `feature-name.module.scss`
- テスト: `*.test.tsx`

---

_最終更新: 2025 年 12 月_
