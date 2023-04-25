import { createApp } from 'vue'
import App from './App.vue'

//will register bootstrap globally
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//will import my custom sass
import './sass/app.scss';
//import 'bootstrap/scss/bootstrap.scss'

createApp(App).mount('#app')
