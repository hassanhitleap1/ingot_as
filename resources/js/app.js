require('./bootstrap');
window.Vue = require('vue');
import router from "./router";
import App from "./App.vue";

const app = new Vue({
    router,

    render: (h) => h(App),
}).$mount("#app");



