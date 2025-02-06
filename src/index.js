import './styles.css'
import homeImgFile from './img/Lasagna by foodart.jpg';

const divContent = document.getElementById('home');

const homePage = () => {
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', 'home')

    const homeBg = document.createElement('div');
    homeBg.setAttribute('id', 'home-bg');
    homeBg.classList.add('img-container');

    const homeImg = document.createElement('img');
    homeImg.src = homeImgFile;

    homeBg.appendChild(homeImg);

    const homeText = document.createElement('div');
    homeText.setAttribute('id', 'home-text');
    homeText.classList.add('border-section');

    const headline = document.createElement('p');
    headline.classList.add('headline');
    headline.texthome = 'Savour the Flavour';

    const smallText = document.createElement('p');
    smallText.classList.add('small-text');
    smallText.texthome = 'Eat delicious food from across the globe, inside our cosy restaurant';

    homeText.appendChild(headline);
    homeText.appendChild(smallText);

    homeDiv.appendChild(homeBg);
    homeDiv.appendChild(homeText);

    divContent.appendChild(homeDiv)
}

