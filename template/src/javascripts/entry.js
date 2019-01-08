import '../css/base.scss';

import Vue from 'vue';
import App from './App.vue';
{{#isUseStore}}
import store from './store/';
{{/isUseStore}}

new Vue({
  el: '#app',
  {{#isUseStore}}
  store,
  {{/isUseStore}}
  components: { App },
  template: '<app />'
});
