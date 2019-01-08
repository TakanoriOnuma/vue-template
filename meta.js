module.exports = {
  prompts: {
    name: {
      type: 'string',
      message: 'Project Name'
    },
    description: {
      type: 'string',
      message: 'Description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    licence: {
      type: 'string',
      message: 'licence',
      default: 'MIT'
    },
    devServerPort: {
      type: 'string',
      message: 'dev server port',
      default: '4000'
    }
  },
  // 条件にマッチする時だけコピーする
  filters: {
    'src/javascripts/store/**/*': 'isUseStore'
  },
  // vue initで展開させないファイルを指定する
  skipInterpolation: ['node_modules/**'],
  complete: (data) => {
    console.log('\nTo get started:');
    // 別ディレクトリに生成する場合は出力先のディレクトリに移動するメッセージを出す
    if (!data.inPlace) {
      console.log(`  cd ${data.destDirName}`);
    }
    console.log('  yarn install');
    console.log('  yarn start');
  }
};
