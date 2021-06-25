function createMenu(){
    let container = document.createElement('div');
    container.id = 'menu';

    let menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    let food1 = createFood('Margherita', '10$', './images/menu/margherita.jpg');
    let food2 = createFood('Pepperoni', '11$', './images/menu/pepperoni.jpg');
    let food3 = createFood('Chicken', '12$', './images/menu/chicken.jpg');

    menuContainer.appendChild(food1);
    menuContainer.appendChild(food2);
    menuContainer.appendChild(food3);


    container.appendChild(menuContainer);

    return container;
}

function createFood(name, cost, imageLink){
    let food = document.createElement('div');
    let image = document.createElement('img');
    image.src = imageLink;

    let imageCaption = document.createElement('div');
    imageCaption.textContent = `${name} \n ${cost}`;
    food.appendChild(image);
    food.appendChild(imageCaption);

    food.classList.add('menu-items')

    return food;
}

export default createMenu;