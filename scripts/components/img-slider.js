let screenWidth = window.innerWidth;
let numberOfSlides;

const checkScreen = () => {
    if(screenWidth < 1024) {
        numberOfSlides = 2;
    } else {
        numberOfSlides = 6;
    }
}
checkScreen();

window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;
    checkScreen();
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: numberOfSlides,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

