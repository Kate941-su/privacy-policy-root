# privacy-policy-root

自作モバイルアプリ（data-holder / dopadatsu / piano-tap / stack-lens / タビポケ など）のプライバシーポリシー・利用規約・サポートページを Markdown で管理し、Vercel で公開する Next.js サイト。読者はアプリの利用者とストア審査。

## コマンド

- `npm ci` / `npm run dev` / `npm run build`（型チェックも build で行われる）
- lint・テストはまだ無い

## 構成

- `policies/` `terms/` `support/`（英語版は各 `en/`）: 文書の Markdown。ファイル名がそのまま URL になる（対応表は README）
- `app/[app]/`: 動的ルート（`generateStaticParams` で全文書を静的生成）
- `lib/documents.ts`: Markdown の読み込みと HTML 変換（unified / remark / rehype）
- `components/DocumentView.tsx`: 文書の表示

## 方針

- アプリの通信・保存データ・権限・課金・外部 SDK を変えたら、同じリリースで該当アプリの文書（日英）を更新する
- `main` へ直接 push しない（ブランチ → PR → マージはユーザー）

## 未整備

- CI（`npm ci` → `npm run build`）と Dependabot が未導入
- Node のバージョン固定（`engines` / `.nvmrc`）が未設定
