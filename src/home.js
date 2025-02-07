import homeImgFile from './img/Lasagna by foodart.jpg';

export const homePage = (targetDiv) => {
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
    headline.textContent = 'Savour the Flavour';

    const smallText = document.createElement('p');
    smallText.classList.add('small-text');
    smallText.textContent = 'Eat delicious food from across the globe, inside our cosy restaurant';

    homeText.appendChild(headline);
    homeText.appendChild(smallText);

    homeDiv.appendChild(homeBg);
    homeDiv.appendChild(homeText);

    targetDiv.appendChild(homeDiv)
}