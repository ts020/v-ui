import Vue from 'vue'
import VueRouter from 'vue-router'
const app = Vue.extend(require("./app.vue"));



Vue.use(VueRouter);
// create router
const router = new VueRouter({
    hashbang:true
});
router.map({
    '/' : {
        component: require("./pages/home-page.vue")
    },
    '/map' : {
        component: require("./pages/map-page.vue")
    },
    '/drawer' : {
        component: require("./pages/drawer-page.vue")
    },
    '/slider' : {
        component: require("./pages/slider-page.vue")
    },
    '/fit-image' : {
        component: require("./pages/fit-image-page.vue")
    },
    '/buttons': {
        component: require("./pages/buttons-page.vue")
    },
    '/typo': {
        component: require("./pages/typo-page.vue")
    },
    '/grid': {
        component: require("./pages/grid-page.vue")
    },
    '/tour-help': {
        component: require("./pages/tour-help-page.vue")
    }
});


router.start(app, "#app");
window.app = app;
