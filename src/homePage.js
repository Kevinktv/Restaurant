function homePage(){

    let container = document.createElement('div');
    container.id = 'home-page';
    
    let imageContainer = document.createElement('div');
    imageContainer.id = 'image-container';

    let image = document.createElement('img');
    image.src = './images/small-chef.jpg';

    let caption = document.createElement('div');
    caption.id = 'image-caption';
    caption.textContent = "Loly's pizzeria - The best, cheapest pizzeria in all of Italy. Established in 1950, Loly's pizzeria brings handcrafted traditional italian pizzas at your doorstep.";

    imageContainer.appendChild(image);
    imageContainer.appendChild(caption);
    
    container.appendChild(imageContainer);

    return container;
}


export default homePage;