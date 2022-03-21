# gas_spreadsheet2strings
Convert spreadsheet to strings file using GAS.

---
GASを使用してスプレッドシートをstringsファイルに変換します。

## スプレッドシート入力ルール
![Image from Gyazo](https://i.gyazo.com/117210086c7904f2a2711db7126d981b.png)

+ B1セルに接頭辞を指定
    + 接頭辞はシートごとに指定
+ 2行目のB列以降に言語名を指定
+ 3行目以降に翻訳テキストを入力

出力されるローカライズキーは`接頭辞-翻訳キー`になります。
+ ※例:接頭辞"U",Key:1Month
    + →"U-1Month"


## 使い方
srcフォルダ内にあるGASコードをApps Scriptプロジェクトに追加。
次のどちらかを実行またはデプロイ(第二引数は言語名)
```js
function doGet(){
  return convertByActiveSpreadsheet("ja");
}
```
```js
function doGet(){
  return convertById("file id","ja");
}
```
