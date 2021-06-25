function createContact(){
    let container = document.createElement('div');
    container.id = 'contact';

    let contactItem = document.createElement('div');
    contactItem.id = 'contact-item';
    let phone = document.createElement('div');
    phone.textContent = 'Phone: 123 456 789';

    let address = document.createElement('div');
    address.textContent = 'Address: xyz street, california, USA';


    let anchor = document.createElement('a');
    anchor.href = 'https://www.instagram.com/kevinktv___/';
    anchor.target = "_blank" 
    anchor.rel = "noopener noreferrer";

    let instagram = document.createElement('img');
    instagram.id = 'instagram';
    instagram.src = './images/instagram.png';
    instagram.style.width = '250px';

    anchor.appendChild(instagram);

    contactItem.appendChild(phone);
    contactItem.appendChild(document.createElement('br'));
    contactItem.appendChild(address);
    contactItem.appendChild(document.createElement('br'));
    contactItem.appendChild(anchor);

    container.appendChild(contactItem);

    return container;
}

export default createContact;