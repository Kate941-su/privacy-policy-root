# privacy-policy-root

モバイルアプリのプライバシーポリシー・利用規約・サポートページを Markdown で管理し、Vercel で公開する Next.js プロジェクト。

## 文書の追加

下表の場所に Markdown を追加して `main` に push するだけで公開される。

| ファイル | URL |
| --- | --- |
| `policies/{アプリ名}.md` | `/{アプリ名}`（プライバシーポリシー・日本語） |
| `policies/en/{アプリ名}.md` | `/{アプリ名}/en`（プライバシーポリシー・英語） |
| `terms/{アプリ名}.md` | `/{アプリ名}/terms`（利用規約・日本語） |
| `terms/en/{アプリ名}.md` | `/{アプリ名}/terms/en`（利用規約・英語） |
| `support/{アプリ名}.md` | `/{アプリ名}/support`（サポート・日本語） |
| `support/en/{アプリ名}.md` | `/{アプリ名}/support/en`（サポート・英語） |

- 同じアプリ名で両方あると、ページ上部に言語切り替えリンクが出る
- 片方だけでも OK（無い方の URL は 404）
- ファイル名は英数字・`-`・`_` のみ（URL になるため）
- front matter は任意

```md
---
title: My App プライバシーポリシー   # 省略時は本文の最初の h1、なければファイル名
updatedAt: 2026-10-29               # 「最終更新日」として表示
---

# My App プライバシーポリシー
...
```

## ローカル確認

```sh
npm install
npm run dev   # http://localhost:3000
```

## デプロイ (Vercel)

1. このリポジトリを GitHub に push
2. Vercel の "Add New Project" でリポジトリを Import（設定はデフォルトのまま）
3. 以降は `main` への push で自動デプロイ、PR ごとに Preview URL が発行される
