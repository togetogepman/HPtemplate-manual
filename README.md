# 研究室HPテンプレート マニュアル

## このリポジトリについて

初心者が研究室HPテンプレートを準備し、ChatGPTとCodexで編集し、GitHub Pagesで公開するためのマニュアルサイトです。

利用者向け手順の正本は、このREADMEではなくHTMLページです。

## マニュアルの流れ

1. 準備
2. 編集
3. 公開

初めて利用する場合は`index.html`から順番に進みます。

## ページ構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | マニュアルの入口 |
| `setup.html` | アプリ、アカウント、リポジトリの準備 |
| `edit.html` | ChatGPTによる資料整理とCodexによる編集 |
| `publish.html` | GitHub Pagesでの公開と更新 |
| `DESIGN.md` | マニュアルサイトのデザイン方針 |
| `THIRD_PARTY_NOTICES.md` | 使用画像の出典とライセンス |

## ChatGPTとCodexの役割

- ChatGPTは、GitHub上の自分用リポジトリを参照し、研究室資料をテンプレート項目へ整理して、Codexへ渡す依頼文を作ります。
- Codexは、パソコン上のclone済みリポジトリを変更し、表示確認、テスト、Commit、Pushを行います。

## ローカルで確認する

ビルド工程はありません。リポジトリのルートでローカルHTTPサーバーを起動し、`index.html`から確認します。

```powershell
python -m http.server 8000
```

ブラウザで`http://localhost:8000/index.html`を開きます。確認後はサーバーを停止します。

## 更新時の原則

- 利用者向け手順の正本は4つのHTMLページです。
- READMEには詳細手順を重複記載しません。
- GitHub、ChatGPT、Codexの画面変更時は公式情報を確認します。
- 画像は初心者が迷いやすい操作だけに限定します。
- GitHub Docs由来画像の出典を維持します。
- 旧Markdownマニュアルの内容を根拠に、現行手順を戻しません。

## ライセンスと出典

第三者画像の出典とライセンスは`THIRD_PARTY_NOTICES.md`を参照してください。

## 現在の状態

- 作業branchは`work/manual-site-rebuild`です。
- このbranchの変更は`main`へ統合していません。
- GitHub Pagesの公開状態と利用者受入テストは、このリポジトリ内では未確認です。
