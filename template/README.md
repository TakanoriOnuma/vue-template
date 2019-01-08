# オンラインスキルアップのサンプルコード

オンラインスキルアップの課題のサンプルコード。  
[デプロイ先](https://online-skillup-example.herokuapp.com/)  

## 環境
+ node: 10.15.0
+ npm: 6.2.0

## インストール
`$ npm install`

## タスク一覧
### 開発サーバーの立ち上げ
`$ npm start`  
[http://localhost:3000](http://localhost:3000)にアクセスしてフロントエンドの開発をする。  

### websocketサーバーの立ち上げ
`$ npm run server`  
[http://localhost:4000](http://localhost:4000)にsocketサーバーが立ち上がる。  
開発中はここにアクセスしてもエラーになるが、フロントエンドのコードをビルドするとビルドされたファイルが表示される。  

### フロントエンドのコードのビルド
`$ npm run build`  
server/public以下に生成物を配置する。
