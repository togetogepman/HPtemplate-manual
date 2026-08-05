# Third-Party Notices

## HPtemplateから複製した紹介ページ用資産

`index.html`を配布対象の実テンプレートで構築するため、兄弟リポジトリ`togetogepman/HPtemplate`から必要な資産だけを`assets/template/`へ複製しています。

- コピー元リポジトリ: `togetogepman/HPtemplate`
- コピー元commit SHA: `ff8031293bb66abac26b7ee1e4635f3ebf92de83`
- 配置先: `assets/template/`
- 用途: `index.html`のテンプレート構造、ナビゲーション、レスポンシブ表示、「もっと見る」、画像、ロゴ

主な複製資産は次のとおりです。

| 種類 | ファイル・配置 | 条件 |
| --- | --- | --- |
| destyle.css 1.0.14 | `assets/template/css/destyle.css` | MIT License。ファイル内表示を維持 |
| Swiper 11.0.5 | `assets/template/css/swiper-bundle.min.css`、`assets/template/js/library.js` | MIT License。ファイル内表示を維持 |
| HPtemplate固有CSS・JavaScript | `assets/template/css/theme.css`、`style.css`、`assets/template/js/script.js` | HPtemplate本体の利用条件に従う |
| 画像・SVG・ロゴ | `assets/template/images/` | HPtemplate本体の利用条件と権利確認方針に従う |

無償利用時に必要な`Created with`、アカデメイアのロゴ、解説ページへのリンクは`index.html`のフッターに維持しています。紹介サイト固有の調整は`assets/template/css/site.css`と複製後の`assets/template/js/script.js`内で行い、コピー元リポジトリは変更していません。

## GitHub Docs 操作画像

このマニュアルで使用しているGitHubおよびGitHub Desktopの操作画像は、GitHub Docsの`github/docs`リポジトリから取得しています。

- 取得元リポジトリ: `github/docs`
- 取得時点のcommit SHA: `ace2fe2c3c2c3a83d5c423db38a669651c50bd87`
- ライセンス: [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- 加工: なし（トリミング、縮小、内容変更なし）

| GitHub Docsの記事名 | `github/docs`内の画像パス | 使用箇所 | 加工 |
| --- | --- | --- | --- |
| [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) | `assets/images/help/repository/use-this-template-button.png` | `setup.html`：Use this template | なし |
| [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) | `assets/images/help/repository/create-repository-name.png` | `setup.html`：所有者・リポジトリ名の確認 | なし |
| [Cloning a repository from GitHub to GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop) | `assets/images/help/desktop/clone-choose-button-url-mac.png` | `setup.html`：Clone時のLocal Path | なし |
| [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) | `assets/images/help/pages/publishing-source-drop-down.png` | `publish.html`：公開元branchの選択 | なし |
| [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) | `assets/images/help/pages/publishing-source-folder-drop-down.png` | `publish.html`：公開元folderの選択 | なし |
