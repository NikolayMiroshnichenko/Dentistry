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
    onInit: () => {},
    onChange: () => {},
});


setInterval(() => mySiema.next(), 2500);