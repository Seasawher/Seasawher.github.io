+++
title = "GitHubリポジトリの言語内訳表示を修正したい"
date = 2023-09-21
draft = false

[taxonomies]
tags = ["development", "github", "git", "linguist"]

[extra]
+++

GitHub リポジトリには Langages という項目があって，そのリポジトリで使用されている言語の内訳表示が出ます．便利ですが，ライブラリとして読み込んでいるだけの巨大なファイルがカウントされてしまって，本来関係がないはずの言語がメインとして表示されてしまうことがあります．その解決方法を調べました．

調べたところ, リポジトリのルートに `.gitattributes` というファイルを置いて適切に設定をすることで解決できるようです．[^qooga]

たとえば `highlight.js` というファイルを言語統計から除外したければ，

```gitattributes
highlight.js linguist-documentation=true
```

という内容の `.gitattributes` ファイルを作成して配置すれば良いです．`linguist-documentation` はドキュメント扱いにするという意味で，単に統計から除外されます．

[^qooga] <https://qooga.jb-jk.net/wp/how-to-specify-language-on-github/>
