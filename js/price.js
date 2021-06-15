const data = [
  ["Консультация стоматолога-терапевта", "Бесплатно"],
  ["Лечение кариеса (в зависимости от глубины поражения)", "500/700/900 грн"],
  ["Анестезия", "100 грн"],
  ["Художественная реставрация", "от 800 грн до 1100 грн"],
  ["Лечение корневых каналов (эндомотор)", "400 грн./ 1 канал"],
];

const blockWrapper = document.querySelector(".js-price-list");

const creatMurkup = (description, price) => {
  const murkup = `<li><div class="price-list__title">${description}</div><div class="price-list__price">${price}</div></li>`;

  blockWrapper.insertAdjacentHTML("beforeend", murkup)
};

data.forEach((item) => creatMurkup(item[0], item[1]));
