import 'modernizr';
import Vue from 'vue';
import VueI18nManager from 'vue-i18n-manager';
import { sync } from 'vuex-router-sync';

import 'axios';
import 'popper.js';
import 'bootstrap';
import 'chart.js';

import './asset/js/app';

import './asset/style/style.scss';

import './settings';
import directive from './directive';
import component from './component';
import getRouter from './router';
import getStore from './store';
import startUp from './control/startUp';
import getLocaleConfig from './config/localeConfig';
import setupInjects from './util/setupInjects';
import localeLoader from './util/localeLoader';
import App from './App';
import filter from './filter';

const $ = require('jquery');

$('.tag').click(() => console.log('clicked'));

// register filters globally
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));

// register directives globally
Object.keys(directive).forEach(key => Vue.directive(key, directive[key]));

// register components globally
Object.keys(component).forEach(key => Vue.component(key, component[key]));

setupInjects();

if (window.webpackPublicPath) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.webpackPublicPath;
}

const router = getRouter();
const store = getStore();
const localeConfig = getLocaleConfig();

if (localeConfig.localeEnabled) {
  Vue.use(VueI18nManager, {
    store,
    router: localeConfig.localeRoutingEnabled ? router : null,
    config: localeConfig.config,
    proxy: localeLoader,
  });

  Vue.initI18nManager();
}

// sync router data to store
sync(store, router);

// Init new vue app
const app = new Vue({
  router,
  store,
  render: createElement => createElement(App),
});

// Mount the app after startUp
startUp(store).then(() => app.$mount('#app'));
