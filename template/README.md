# {{ name }}
{{ description }}

## 環境
+ node: 10.15.0
+ npm: 6.2.0

## インストール
`$ npm install`

## タスク一覧
### 開発サーバーの立ち上げ
`$ npm start`  
[http://localhost:{{ devServerPort }}](http://localhost:{{ devServerPort }})にアクセスしてフロントエンドの開発をする。  

### フロントエンドのコードのビルド
`$ npm run build`  
dist以下に生成物を配置する。
