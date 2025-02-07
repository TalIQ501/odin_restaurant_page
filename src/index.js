import './styles.css'

import { homePage } from './home.js';
import { menuPage } from './menu.js'

const navHome = document.getElementById('nav-home');
const navMenu = document.getElementById('nav-menu');
const navAbout = document.getElementById('nav-about');

const contentDiv = document.getElementById('content');

const changePage = (pageFunction) => {
    contentDiv.innerHTML = '';
    pageFunction(contentDiv);
}

navHome.addEventListener('click', () => changePage(() => homePage(contentDiv)));
navMenu.addEventListener('click', () => changePage(() => menuPage(contentDiv)));

homePage(contentDiv);