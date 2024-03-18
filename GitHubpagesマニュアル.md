# GitHub Pagesを使ったWebページ公開マニュアル

GitHub Pagesとは、GitHubが提供している静的Webページのためのホスティングサービスです。  
特徴としては

- サーバ、ドメインなど、初期費用、維持費用ゼロで利用できる  
- github.ioのドメインが使える  
- 独自ドメインを利用することも可能  
- ソースコードが公開される  
といったことが挙げられます。  

本マニュアルでは、GitHubアカウントの作成、GitHub Desktopを使用したローカル環境での作業環境構築、サンプルページの公開までの手順を解説します。  

## ステップ1: GitHubアカウントの作成

GitHub Pagesを利用するにあたってまずGitHubのアカウントを作成する必要があります。  

1. **GitHubのWebサイトにアクセス**
    - [GitHubのWebサイト](https://github.com/)にアクセスします。

2. **サインアップ**
    - 「Sign up」ボタンをクリックします。
    - 必要な情報（ユーザ名、メールアドレス、パスワード）を入力し、GitHubアカウントを作成します。　　
    ※ここで設定するユーザ名が公開するWebページのURLに反映されます。  
    例）ユーザ名を *academeia* にした場合  
    「https:// *academeia* .github.io/index.html/」  

> [!WARNING]  
> *academeia* の部分を変更したい場合にはGitHubアカウントを新しく作り直す必要があります。

## ステップ2: GitHub Desktopのインストール

GitHub自体はブラウザで利用できますが、日々の更新やデータの管理を行うのは大変なので、手元のPCで作業できるようにするために **GitHub Desktop** をインストールします。  

1. **GitHub Desktopのダウンロード**
    - [GitHub Desktopのダウンロードページ](https://desktop.github.com/)にアクセスします。
    - OS（WindowsまたはMac）に適したバージョンをダウンロードします。

2. **インストール**
    - ダウンロードしたファイルを実行し、指示に従ってインストールを完了させます。

3. **ログイン**
    - GitHub Desktopを開き、「Sign in to GitHub.com」をクリックしてGitHubアカウントでログインします。

## ステップ3: リポジトリの作成

GitHub PagesでWebページを公開するためには、データの保管場所である **リポジトリ** を作成する必要があります。

1. **新規リポジトリの作成**
    - 初めてGitHub Desktopを使う場合は「+ Create New Repository on your Hard Drive」をクリックします
    - チュートリアルが表示されない場合には「File」メニューから「New repository」を選択します。
2. **リポジトリ情報の入力**
    - 「name」は **ユーザ名.github.io** にしてください  
    ※ユーザ名はGitHubアカウント作成時に設定したものです  
    - 「Description」は省略可能です
    - 「Local path」（保存先）を設定します。  
    デフォルトではドキュメントの中に *GitHub* フォルダが作成され、その中にある *ユーザ名.github.io* にリポジトリが保存されます。  
    - 「Create repository」をクリックします。

## ステップ4: Webページの作成

テンプレートのデータをリポジトリに移動させ、GitHubにプッシュします。  

1. **ローカルリポジトリにファイルを追加**
    - 作成したリポジトリのディレクトリ（デフォルトの場合、ドキュメント>GitHub>ユーザ名.github.io）に、テンプレートのデータをコピーします。

> [!WARNING]
> このフォルダに入れたデータはGitHubを通じて **全世界に公開されます** 。後にデータを消しても **ログはずっと残ってしまう** のでデータの扱いにはくれぐれも注意してください。

2. **変更のコミット**
    - GitHub Desktopで「Changes」を確認し、「Summary」に入力後（適当で構いません）「Commit to main」をクリックします。
3. **プッシュ**
    - GitHub Desktopで「Repository」メニューから「Push」を選択し、ローカルの変更をGitHubにプッシュします。

## ステップ5: GitHub Pagesで公開

GitHubでは、リポジトリを公開する　**Public** と非公開にする **Private** の2つのモードがあります。GitHub Pagesを公開するには **Public** に設定を変更する必要があります。

1. **GitHubでリポジトリにアクセス**
    - GitHub Desktopにある「View on Github」ボタン、もしくは「Repository」メニューの「View on Github」を選択し、ブラウザでリポジトリを開きます。

2. **GitHub Pagesの設定**
    - ブラウザで開いたGitHubの上段右「⚙Settings」タブを開き、「Pages」をクリックします。
    - Your site is live atが **https://ユーザ名.github.io/** になっていることを確認します。
    - Branchの箇所が「main」と「/(root)」になっていることを確認します。なっていない場合は上記に変更して「Save」をクリックします。
    - 最下段の **Danger Zone** にある「Change repository visibility」の「Change visibility」を押す
    - 「Change to public」に変更する  

これで、GitHub Pagesを通じてWebページが公開されます。変更が反映されるまで数分かかりますが、しばらくするとGitHubから提供されるURLでWebページにアクセスできるようになります。
