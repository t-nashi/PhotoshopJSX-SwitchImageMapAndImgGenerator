# PhotoshopJSX-SwitchImageMapAndImgGenerator

このプログラムは [Adobe Photoshop](http://www.adobe.com/jp/products/photoshop.html) で動作する JavaScript(JSX) です。
特定のルールに基づいて作成されたドキュメントを開いた状態で本JSXファイルを実行すると、プログラムと同階層に実行日時のフォルダが作成され、中にプロトタイピング用のhtmlファイル一式と画像が生成されます。

▽動作確認済み
* Adobe Photoshop CC 2015 （Windows10）
* Adobe Photoshop CC 2017 （Windows10、OSX El Capitan(v10.11.6)）


## 解説サイト（※制作中）

[Photoshopを使って手軽にPC向けプロトタイピングをするツールを作った | これを読めば思い出す](http://www.koreyome.com/web/photoshop-jsx-switchimagemapandimggenerator/)


## 注意 （cautionn）

* 本プログラムご使用は自己責任でお願いいたします


## インストール （Installation）

1. このページの `Clone or download` ボタンよりリポジトリのクローンもしくはZIPダウンロードをします。
2. ZIPダウンロードの場合は解凍をします。
3. 解凍して出来たフォルダの中に「`SwitchImageMapAndImgGenerator.jsx`」があれば完了です。


## 使用法 （Usage）

* 「`SwitchImageMapAndImgGenerator.jsx`」をダブルクリックか Photoshop 内へドラッグ＆ドロップして実行

JSXファイルと同階層に「sampleA.psd」と「sampleB.psd」を用意しています。
それぞれ、特定のルールに基づいて作成されたpsdですので、どちらかをPhotoshopで開き、JSXファイルを実行すると実行日時のフォルダが作成され、中にプロトタイピング用のhtmlファイル一式と画像が生成されます。
生成されたindex.htmlをお好きなブラウザで開いて結果を確認できれば成功です。


## 仕様 (specification)

* `SwitchImageMapAndImgGenerator.jsx` がメインの実行ファイル
* JSX処理の対象となるドキュメントはPhotoshop上でJSX実行時にアクティブになっているドキュメントである
* ※A が画像として書き出される （デフォルトでは特定の値は「@@@」、画像形式はjpg - png、gifにも切り替え可）
* ※A は名前に関係なくレイヤーパネル内の上から順に 「1、2、3、4、5、、、」 と処理的に番号付けされる （なので「@@@1、@@@2、、、」と名前を付けると分かりやすい）
* ※B はリンクを設置したいレイヤーセット内に作成する （矩形が望ましい）
* ※B の名前は画像として書き出される ※A の順番と紐付けると、jsx処理後に生成されるhtml上でその画像に対してのリンクとなる
* 基本となるhtml等は「_template」からコピーされる
* 画像のリンクはhtmlのイメージマップ、画像の切り替えはJavaScriptで行っている
* Photoshopから生成される画像やリンクの情報は「include.js」に記載されている

上記使用略称： ※A … 第一階層にある特定の値を持つレイヤーセット  
上記使用略称： ※B … 第一階層内、第二階層にあるシェイプ


## コピーライト （Copyright）
Copyright © 2017+ Tsutomu Takanashi. See LICENSE for details.
