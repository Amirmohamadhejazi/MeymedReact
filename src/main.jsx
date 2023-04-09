import React from 'react'
import ReactDOM from 'react-dom/client'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './assets/global.scss';
import './../tsconfig.json';
import './index.css'
import App from "./App.jsx";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
        <App/>
)