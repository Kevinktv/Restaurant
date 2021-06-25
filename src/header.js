function createHeader(){
    let header = document.createElement('header');
    let heading = document.createElement('h1');
    let subheading = document.createElement('h3');

    subheading.textContent = 'The best mouth watering pizza in all of Europe!'
    heading.textContent = 'Loly\'s pizzeria';

    header.appendChild(heading);
    header.appendChild(subheading);

    let navbar = document.createElement('div');
    navbar.id = 'navbar';

    let list = document.createElement('ul');
    let item1 = document.createElement('li');
    item1.id = 'home-nav';

    let item2 = document.createElement('li');
    item2.id = 'menu-nav';

    let item3 = document.createElement('li');
    item3.id = 'contact-nav';

    item1.textContent = 'Home';
    item2.textContent = 'Menu';
    item3.textContent = 'Contact';

    item1.classList.add('active');

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);

    navbar.appendChild(list);


    header.appendChild(navbar);
    return header;
}

export default createHeader;