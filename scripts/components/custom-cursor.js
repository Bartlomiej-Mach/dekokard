const circleBox = document.querySelector('.circle-cursor');
const galeryPage = document.querySelector('.galery-section');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    circleBox.style.top = e.pageY + 'px';
    circleBox.style.left = e.pageX + 'px';
}

const onHover = () => {
    galeryPage.addEventListener('mouseover', () => {
        circleBox.classList.add('circle-cursor--active')
    });
    galeryPage.addEventListener('mouseleave', () => {
        circleBox.classList.remove('circle-cursor--active')
    });
};

onHover();

