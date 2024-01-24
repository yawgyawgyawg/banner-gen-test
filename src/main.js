import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/download", component: DownloadPage },
];


import DownloadPage from "@/components/DownloadPage";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const firebaseConfig = {
    apiKey: "AIzaSyDNAh0lUG0UPFozdWF9TWDOdQWANuU48eg",
    authDomain: "banner-gen.firebaseapp.com",
    projectId: "banner-gen",
    storageBucket: "banner-gen.appspot.com",
    messagingSenderId: "502803306369",
    appId: "1:502803306369:web:f332ed34845d247af77a80"
};

const app = createApp(App);

initializeApp(firebaseConfig);
app.use(router);
app.mount("#app");
