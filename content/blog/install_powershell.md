+++
title = "PowerShell Coreをインストールしてターミナルをカスタマイズする"
date = 2023-07-25
draft = false

[taxonomies]
tags = ["PowerShell", "WindowsTerminal", "StarShip", "setup"]

[extra]
+++

パソコンを買い替えるたびに PowerShell Core のインストールが必要なので，手順をまとめておきます．

### PowerShell Core のインストール

Microsoft Store から PowerShell Core をインストールします．最初から入っている Windows PowerShell とは別物であることに注意が必要です．

GitHub からインストーラを落としてくることもできます．

### Windows Terminal のインストール

GitBash や PowerShell Core などの複数のシェルを１箇所にまとめておくと便利なので，Windowsターミナルもインストールします．

これも Microsoft Store から可能です．

### StarShip の導入

初期状態だとみづらいので，みやすくカスタマイズするために StarShip を導入します．

1. Nerd Font をインストールします．

1. StarShip をインストールします．

1. PowerShell のプロファイルに StarShip 導入コードを追加します．

1. Windows Terminal から，既定のフォントに Nerd Font を選択します．

以上です．

ところで，上記の手順を自動化できると便利ですね．インストーラをシェルスクリプト等で自作すればよさそうですが，テストが面倒そうに思えます．
