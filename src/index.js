import homePage from "./homePage";
import createHeader from "./header";
import createMenu from "./menu";
import createContact from "./contact";

const init = function(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(homePage());
    let currentDom = document.getElementById('home-page');
    let currentNav = document.getElementById('home-nav');
    // content.appendChild(createMenu());
    // content.appendChild(createContact());

    // Event listeners
    let home = document.getElementById('home-nav');
    let menu = document.getElementById('menu-nav');
    let contact = document.getElementById('contact-nav');

    home.onclick = function(e){
        if (!(currentDom == document.getElementById('home-page'))){
            document.getElementById('home-nav').classList.add('active');
            currentNav.classList.remove('active');
            content.removeChild(currentDom);
            content.appendChild(homePage());
            currentDom = document.getElementById('home-page');
            currentNav = document.getElementById('home-nav');
        }
    };

    menu.onclick = function(e){
        if (!(currentDom == document.getElementById('menu'))){
            document.getElementById('menu-nav').classList.add('active');
            currentNav.classList.remove('active');
            content.removeChild(currentDom);
            content.appendChild(createMenu());
            currentDom = document.getElementById('menu');
            currentNav = document.getElementById('menu-nav');
        }
    };
    contact.onclick = function(e){
        if (!(currentDom == document.getElementById('contact'))){
            document.getElementById('contact-nav').classList.add('active');
            currentNav.classList.remove('active');
            content.removeChild(currentDom);
            content.appendChild(createContact());
            currentDom = document.getElementById('contact');
            currentNav = document.getElementById('contact-nav');
        }
    };;

}();
