+++
title = "Lume をデプロイする"
date = 2023-07-16
draft = false

[taxonomies]
tags = ["Lume", "deploy"]

[extra]
comment = true
+++

このブログはDeno/Lumeで作成して，Deno Deploy にデプロイしているのですが，成功するまでにかなり手間取ったので，手順をメモしておきます．

### 前提条件

* GitHub リポジトリにブログのコードがある
* ブログは Deno + Lume で書かれている
* ローカルでは正しくプレビューできている状態
* （あまり関係ないかもしれませんが）TypeScriptで開発している

### GitHub 側の準備

GitHub Action を使うときによくやる準備として，リポジトリの `settings` > `Actions` > `General` から Workflow permissions を `Read and write permissions` に変更しておきます．

忘れがちなので注意．

### Deno Deploy 側の準備

GitHub 連携などで [deno deploy](https://deno.com/deploy) にログインして，新規プロジェクトを作成します．

プロジェクト名をつけることができるので，好きな名前をつけてください．

### エントリーポイントの準備

プロジェクトのルートに，以下の内容で `serve.ts` ファイルを用意してください．

```ts
import Server from "lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server.start();

console.log("Listening on http://localhost:8000");
```

### ワークフローの設定

下記の内容を `.github/workflows` ディレクトリに `deploy.yml` という名前で保存します．`deploy.yml` という名前である必要はありませんが，分かりやすい名前が良いと思います．

```yml
name: Publish on Deno Deploy

on:
  push:
    branches: main
  pull_request:
    branches: main

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    permissions:
      id-token: write # Needed for auth with Deno Deploy
      contents: read # Needed to clone the repository

    steps:
      - name: Clone repository
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: lts/*

      - name: Setup Deno environment
        uses: denoland/setup-deno@v1
        with:
          deno-version: v1.x

      - name: Build site
        run: deno task build

      - name: Upload to Deno Deploy
        uses: denoland/deployctl@v1
        with:
          project: "seasawher-blog"
          entrypoint: "serve.ts"
          root: "."
```

以下のことに注意してください．

* なぜなのかは私にはわかりませんが，NodeJS が要るようです．
* `actions/checkout@v3` などのアクションが古いせいで動かないことがあります．最新のものに差し替えると動いたりします．
* `project` と書いてあるところは，Deno deploy で設定したプロジェクト名が入ります．
