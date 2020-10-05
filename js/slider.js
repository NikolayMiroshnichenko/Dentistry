const prev = document.querySelector('.slider-btn__prev');
const next = document.querySelector('.slider-btn__next');


const mySiema = new Siema({
    selector: '.js-siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 3,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    perPage: {
        100: 1,
        760: 2
    },
    onInit: () => {},
    onChange: () => {},
});

const autoPlay = setInterval(() => mySiema.next(), 3000);

prev.addEventListener('click', () => {
    clearInterval(autoPlay);
    mySiema.prev()
});
next.addEventListener('click', () => {
    clearInterval(autoPlay);
    mySiema.next();
});