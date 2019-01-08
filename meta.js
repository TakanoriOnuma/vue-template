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
  completeMessage: '{{#inPlace}}To get started:\n  yarn install\n  yarn start{{else}}To get started:\n  cd {{destDirName}}\n  yarn install\n  yarn start{{/inPlace}}'
};
