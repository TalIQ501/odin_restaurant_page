import './styles.css'
import contentImgFile from './img/Lasagna by foodart.jpg';

const divContent = document.getElementById('content');

const homePage = () => {
    const contentBg = document.createElement('div');
    contentBg.setAttribute('id', 'content-bg');
    contentBg.classList.add('img-container');

    const contentImg = document.createElement('img');
    contentImg.src = contentImgFile;

    contentBg.appendChild(contentImg);

    const contentText = document.createElement('div');
    contentText.setAttribute('id', 'content-text');
    contentText.classList.add('border-section');

    const headline = document.createElement('p');
    headline.classList.add('headline');
    headline.textContent = 'Savour the Flavour';

    const smallText = document.createElement('p');
    smallText.classList.add('small-text');
    smallText.textContent = 'Eat delicious food from across the globe, inside our cosy restaurant';

    contentText.appendChild(headline);
    contentText.appendChild(smallText);

    divContent.appendChild(contentBg);
    divContent.appendChild(contentText);
}

homePage();