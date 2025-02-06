export const menuPage = (targetDiv) => {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');

    const menuHeader = document.createElement('div');
    menuHeader.setAttribute('id', 'menu-header');

    const menuHeaderName = document.createElement('div');
    menuHeaderName.setAttribute('id', 'menu-header-name');
    menuHeaderName.textContent = 'Dish'

    const menuHeaderPrice = document.createElement('div');
    menuHeaderPrice.setAttribute('id', 'menu-header-price');
    menuHeaderPrice.textContent = 'Price'

    menuHeader.appendChild(menuHeaderName)
    menuHeader.appendChild(menuHeaderPrice)

    const appetizers = document.createElement('div');
    appetizers.setAttribute('id', 'menu-appetizers');
    appetizers.classList.add('menu-categories');

    const appetizersHead = document.createElement('h3');
    appetizersHead.textContent = 'Appetizers';

    const garlicBread = document.createElement('div')
    garlicBread.classList.add('menu-item');

    const garlicBreadName = document.createElement('p');
    garlicBreadName.classList.add('menu-name');
    garlicBreadName.textContent = 'Garlic Bread'

    const garlicBreadPrice = document.createElement('p');
    garlicBreadPrice.classList.add('menu-price');
    garlicBreadPrice.textContent = '2';

    garlicBread.appendChild(garlicBreadName);
    garlicBread.appendChild(garlicBreadPrice);

    const clubSandwich = document.createElement('div')
    clubSandwich.classList.add('menu-item');

    const clubSandwichName = document.createElement('p');
    clubSandwichName.classList.add('menu-name');
    clubSandwichName.textContent = 'Club Sandwich';

    const clubSandwichPrice = document.createElement('p');
    clubSandwichPrice.classList.add('menu-price');
    clubSandwichPrice.textContent = '1';

    clubSandwich.appendChild(clubSandwichName);
    clubSandwich.appendChild(clubSandwichPrice);

    const soup = document.createElement('div')
    soup.classList.add('menu-item');

    const soupName = document.createElement('p');
    soupName.classList.add('menu-name');
    soupName.textContent = 'Soup';

    const soupPrice = document.createElement('p');
    soupPrice.classList.add('menu-price');
    soupPrice.textContent = '1';

    soup.appendChild(soupName);
    soup.appendChild(soupPrice);

    appetizers.appendChild(appetizersHead);
    appetizers.appendChild(garlicBread);
    appetizers.appendChild(clubSandwich);
    appetizers.appendChild(soup);

    const mainDishes = document.createElement('div');
    mainDishes.setAttribute('id', 'menu-mainDishes');
    mainDishes.classList.add('menu-categories');

    const mainDishesHead = document.createElement('h3');
    mainDishesHead.textContent = 'Main Dishes';

    const spaghetti = document.createElement('div')
    spaghetti.classList.add('menu-item');

    const spaghettiName = document.createElement('p');
    spaghettiName.classList.add('menu-name');
    spaghettiName.textContent = 'Spaghetti';

    const spaghettiPrice = document.createElement('p');
    spaghettiPrice.classList.add('menu-price');
    spaghettiPrice.textContent = '5';

    spaghetti.appendChild(spaghettiName);
    spaghetti.appendChild(spaghettiPrice);

    const steak = document.createElement('div')
    steak.classList.add('menu-item');

    const steakName = document.createElement('p');
    steakName.classList.add('menu-name');
    steakName.textContent = 'Steak';

    const steakPrice = document.createElement('p');
    steakPrice.classList.add('menu-price');
    steakPrice.textContent = '10';

    steak.appendChild(steakName);
    steak.appendChild(steakPrice);

    const pizza = document.createElement('div')
    pizza.classList.add('menu-item');

    const pizzaName = document.createElement('p');
    pizzaName.classList.add('menu-name');
    pizzaName.textContent = 'Pizza';

    const pizzaPrice = document.createElement('p');
    pizzaPrice.classList.add('menu-price');
    pizzaPrice.textContent = '8';

    pizza.appendChild(pizzaName);
    pizza.appendChild(pizzaPrice);

    const friedFish = document.createElement('div')
    friedFish.classList.add('menu-item');

    const friedFishName = document.createElement('p');
    friedFishName.classList.add('menu-name');
    friedFishName.textContent = 'Fried Fish';

    const friedFishPrice = document.createElement('p');
    friedFishPrice.classList.add('menu-price');
    friedFishPrice.textContent = '10';

    friedFish.appendChild(friedFishName);
    friedFish.appendChild(friedFishPrice);

    const cheeseBurger = document.createElement('div')
    cheeseBurger.classList.add('menu-item');

    const cheeseBurgerName = document.createElement('p');
    cheeseBurgerName.classList.add('menu-name');
    cheeseBurgerName.textContent = 'Cheeseburger';

    const cheeseBurgerPrice = document.createElement('p');
    cheeseBurgerPrice.classList.add('menu-price');

    cheeseBurger.appendChild(cheeseBurgerName);
    cheeseBurger.appendChild(cheeseBurgerPrice);
    cheeseBurgerPrice.textContent = '8';

    mainDishes.appendChild(mainDishesHead);
    mainDishes.appendChild(spaghetti);
    mainDishes.appendChild(steak);
    mainDishes.appendChild(pizza);
    mainDishes.appendChild(friedFish);
    mainDishes.appendChild(cheeseBurger);

    const beverages = document.createElement('div');
    beverages.setAttribute('id', 'menu-beverages');
    beverages.classList.add('menu-categories');

    const beveragesHead = document.createElement('h3');
    beveragesHead.textContent = 'Appetizers';

    const softDrink = document.createElement('div')
    softDrink.classList.add('menu-item');

    const softDrinkName = document.createElement('p');
    softDrinkName.classList.add('menu-name');
    softDrinkName.textContent = 'Soft Drink';

    const softDrinkPrice = document.createElement('p');
    softDrinkPrice.classList.add('menu-price');
    softDrinkPrice.textContent = '3';

    softDrink.appendChild(softDrinkName);
    softDrink.appendChild(softDrinkPrice);

    const tea = document.createElement('div')
    tea.classList.add('menu-item');

    const teaName = document.createElement('p');
    teaName.classList.add('menu-name');
    teaName.textContent = 'Tea';

    const teaPrice = document.createElement('p');
    teaPrice.classList.add('menu-price');
    teaPrice.textContent = '1';

    tea.appendChild(teaName);
    tea.appendChild(teaPrice);

    const coffee = document.createElement('div')
    coffee.classList.add('menu-item');

    const coffeeName = document.createElement('p');
    coffeeName.classList.add('menu-name');
    coffeeName.textContent = 'Coffee';

    const coffeePrice = document.createElement('p');
    coffeePrice.classList.add('menu-price');
    coffeePrice.textContent = '2';

    coffee.appendChild(coffeeName);
    coffee.appendChild(coffeePrice);

    beverages.appendChild(beveragesHead);
    beverages.appendChild(softDrink);
    beverages.appendChild(tea);
    beverages.appendChild(coffee)

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(appetizers);
    menuDiv.appendChild(mainDishes);
    menuDiv.appendChild(beverages);

    targetDiv.appendChild(menuDiv);
}