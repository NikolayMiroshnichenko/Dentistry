// slider-technology
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

// stories-slider
const prevStories = document.querySelector('.stories-btn__prev');
const nextStories = document.querySelector('.stories-btn__next');

const storiesSlider = new Siema({
    selector: '.js-stories-slider',
    duration: 400,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    // threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});

prevStories.addEventListener('click', () => {
    storiesSlider.prev()
});
nextStories.addEventListener('click', () => {
    storiesSlider.next();
});