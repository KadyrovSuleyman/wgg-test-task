import { createApp } from 'vue';
import App from './app.vue';

const css = document.createElement('link');
css.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
css.rel = 'stylesheet';
css.integrity = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';
css.crossOrigin = 'anonymous';

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
script.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
script.crossOrigin = 'anonymous';

document.head.appendChild(css);
document.head.appendChild(script);

createApp(App).mount('#app');
