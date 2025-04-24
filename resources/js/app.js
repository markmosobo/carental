// app.js
import './bootstrap';

import {createApp} from 'vue'
import router from './router'; // Import the router

import "@/assets/lib/animate/animate.min.css";
import "@/assets/lib/owlcarousel/assets/owl.carousel.min.css";


import "@/assets/css/bootstrap.min.css";

import "@/assets/css/style.css";
//leaflet
import 'leaflet/dist/leaflet.css';

import App from './App.vue'

createApp(App).use(router).mount('#app');
