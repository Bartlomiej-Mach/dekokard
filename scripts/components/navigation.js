const sectionGetter = document.querySelectorAll('.nav-anim');
const hambugerMenu = document.querySelector('.hambruger');
const listLink = document.querySelectorAll('.nav-list-link');
const navList = document.querySelector('.primary-nav-list');


const navigationPrimary = () => {
    sectionGetter.forEach(element => {
        element.classList.toggle('nav-list--active');
    });
    
    navList.classList.toggle('nav-list--active');
    hambugerMenu.classList.toggle('hambruger--active');
}

hambugerMenu.addEventListener('click', navigationPrimary);

listLink.forEach(element => {
    element.addEventListener('click', navigationPrimary);
});