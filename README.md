# HPtemplate-site

## このリポジトリについて

`HPtemplate-site`は、研究室HPテンプレート本体の紹介・配布導線と、初心者向け利用マニュアルを一体化した公式ガイドサイトです。

配布するテンプレート本体は、別リポジトリの[`togetogepman/HPtemplate`](https://github.com/togetogepman/HPtemplate)で管理します。このリポジトリへ本体側のExcel、`AGENTS.md`、セクションキーは実装しません。

正本の分担は次のとおりです。

- 利用者向けの紹介内容と操作手順：4つのHTMLページ
- UX・運用仕様：`SPEC.md`
- デザイン方針：`DESIGN.md`
- 第三者素材の出典：`THIRD_PARTY_NOTICES.md`

## ページ構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | テンプレートの紹介、完成サンプル・本体・マニュアルへの導線 |
| `setup.html` | アカウント、アプリ、自分用リポジトリ、cloneの準備 |
| `edit.html` | Excel入力、写真保存、ローカルCodexによる反映 |
| `publish.html` | 人による確認、GitHub Pages設定、公開URLでの再確認 |

初めて利用する場合は、`index.html`で内容と完成例を確認した後、`setup.html` → `edit.html` → `publish.html`の順に進みます。

## 標準ルート

1. 紹介ページで内容と完成例を確認する
2. GitHubと必要アプリを準備する
3. テンプレートから自分用リポジトリを作る
4. GitHub Desktopでcloneする
5. Excelへ入力し、写真をローカル保存する
6. ローカルCodexで初期カスタマイズする
7. 人が内容と表示を確認する
8. GitHub Pagesで公開し、公開URLで再確認する

専用GPT、通常のChatGPTによるExcel監査・Codex依頼文生成、ChatGPTとGitHubの接続、Codexクラウドは標準工程に含めません。通常のChatGPTは文章整理やエラー説明の任意補助手段です。

## ローカルで確認する

ビルド工程はありません。リポジトリのルートでローカルHTTPサーバーを起動します。

```powershell
python -m http.server 8000
```

`http://localhost:8000/index.html`から4ページを確認し、確認後はサーバーを停止します。

## 更新時の原則

- 詳細手順をREADMEとHTMLへ二重管理しない
- 紹介ページとマニュアルページの役割を混同しない
- 外部サービスの画面、料金、利用条件を推測せず、公式情報を確認する
- テンプレート本体、会社本体サイト、GitHub Pages設定をこのリポジトリから変更しない
- 既存の権利確認済み画像と`THIRD_PARTY_NOTICES.md`の出典情報を維持する
- 本番公開前に、人が事実、権利、連絡先、PC・スマートフォン表示を確認する

## 現在の状態

- 作業branchは`work/manual-site-rebuild`
- このbranchの変更は`main`へ統合していない
- この作業ではGitHub Pagesの公開設定変更と本番公開を行わない
