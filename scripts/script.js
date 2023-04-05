const swiper1 = new Swiper("#swiperfeedback", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  a11y: true,
  keyboardControl: true,
  grabCursor: true,
  spaceBetween: 30,
  // pagination
  pagination: ".swiper-pagination",
  paginationClickable: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperAbout = new Swiper("#swiperabout", {
  slidesPerView: 3,
  spaceBetween: 30,
  keyboardControl: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const swiperProjects = new Swiper("#swiperprojects", {
  slidesPerView: 2,
  spaceBetween: 30,
  keyboardControl: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
  },
});
const swiperServices = new Swiper("#swiperservices", {
  slidesPerView: 3,
  spaceBetween: 30,
  keyboardControl: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    740: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
});

(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navSide = document.querySelector(".nav-side");
  var navToggleArea = document.querySelector(".nav-toggle-area");
  var sidebarIsOpen = () => navSide.classList.contains("expanded");
  var openSidebar = () => {
    navSide.classList.add("expanded");
    navToggle.classList.add("expanded");
  };
  var closeSidebar = () => {
    navToggle.classList.remove("expanded");
    navSide.classList.remove("expanded");
  };
  navToggleArea.addEventListener("click", function () {
    sidebarIsOpen() ? closeSidebar() : openSidebar();
  });
  document.addEventListener("click", function (e) {
    if (e.target && sidebarIsOpen() && e.target != navToggleArea) {
      closeSidebar();
    }
  });
})();
//drag n adrop

const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

dropZone?.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone?.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
});

dropZone?.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  fileName.textContent = file.name;
});

fileInput?.addEventListener("change", () => {
  fileName.textContent = fileInput.files[0].name;
});

//vue

import { createApp } from "./petite-vue.es.js";
createApp({
  tech_list: [
    {
      title: "1C-Битрикс",
      icon: "1c",
    },
    {
      title: "WordPress",
      icon: "wp",
    },
    {
      title: "React",
      icon: "react",
    },
    {
      title: "Vue",
      icon: "vue",
    },
    {
      title: "Python",
      icon: "pt",
    },
    {
      title: "Django",
      icon: "dj",
    },
    {
      title: "Flask",
      icon: "flask",
    },
    {
      title: "Go",
      icon: "go",
    },
    {
      title: "Symphony",
      icon: "sf",
    },
    {
      title: "Laravel",
      icon: "lv",
    },
    {
      title: "NodeJs",
      icon: "nd",
    },
    {
      title: "Docker",
      icon: "dc",
    },
    {
      title: "Docker swarm",
      icon: "sw",
    },
    {
      title: "Docker compose",
      icon: "com",
    },
    {
      title: "Nginx",
      icon: "ng",
    },
    {
      title: "Jenkins",
      icon: "jen",
    },
    {
      title: "Kubernetes",
      icon: "kube",
    },
  ],
  way_list: [
    {
      icon: "shop",
      title: "E-commerce",
      text: "Интернет-магазины и сервисы для брендов и федеральных сетей",
      link: "",
    },
    {
      icon: "case",
      title: "В2В-системы",
      text: "Разрабатываем В2В направленные интернет-магазины, торговые площадки, личные кабинеты и сервисы",
      link: "",
    },
    {
      icon: "dev",
      title: "Разработка сервисов",
      text: "Digital workspace, комплексные системы управления ресурсами предприятия и HRM-системы",
      link: "",
    },
    {
      icon: "rock",
      title: "MVP разработка",
      text: "MVP – это стадия развития стартапа или IT-продукта, когда он решает как минимум одну очень важную задачу пользователей (клиентов) и таким образом демонстрирует свою “жизнеспособность”.",
      link: "",
    },
    {
      icon: "set",
      title: "Поддержка продукта",
      text: "Работа над проектом в формате выделенной команды с глубоким погружением в отраслевую специфику",
      link: "",
    },
  ],
  vacancy_list: [
    {
      title: "UI/UX Designer",
      text: "Мы ищем талантливого UI/ UX - дизайнера, который заинтересован в успехе и росте продукта над которым работает.",
      link: "",
      tags: [
        "Удаленная работа",
        "Полная занятость",
        "Полная занятость",
        "Полная занятость",
      ],
      category: 1,
    },
    {
      title: "Middle Frontend developer",
      text: "Нашему заказчику, IT-аутсорсинговой компании по созданию решений для цифровой трансформации бизнеса требуется, в связи с ростом команды требуется Middle Frontend developer  (системная интеграция, информационная безопасность, дата центр и облачные услуги).",
      link: "",
      tags: ["Работа в офисе", "Полная занятость"],
      category: 1,
    },
    {
      title: "Разработчик JavaScript",
      text: "Мы ищем талантливых, прогрессивных, энергичных людей, заинтересованных в развитии вместе с нашей компанией.",
      link: "",
      tags: ["Удаленная работа", "Полная занятость"],
      category: 2,
    },
    {
      title: "UI/UX Designer",
      text: "Мы ищем талантливого UI/ UX - дизайнера, который заинтересован в успехе и росте продукта над которым работает.",
      link: "",
      tags: ["Удаленная работа", "Полная занятость"],
      category: 3,
    },
    {
      title: "Middle Frontend developer",
      text: "Нашему заказчику, IT-аутсорсинговой компании по созданию решений для цифровой трансформации бизнеса требуется, в связи с ростом команды требуется Middle Frontend developer  (системная интеграция, информационная безопасность, дата центр и облачные услуги).",
      link: "",
      tags: ["Работа в офисе", "Полная занятость"],
      category: 4,
    },
    {
      title: "Разработчик JavaScript",
      text: "Мы ищем талантливых, прогрессивных, энергичных людей, заинтересованных в развитии вместе с нашей компанией.",
      link: "",
      tags: ["Удаленная работа", "Полная занятость"],
      category: 4,
    },
  ],
  vacancy_tags: [
    "Смотреть все",
    "Разработка",
    "Дизайн",
    "Маркетинг",
    "Менеджмент",
  ],

  current_vacancy: 0,
  get filterVacancy() {
    if (this.current_vacancy == 0) return this.vacancy_list;
    return this.vacancy_list.filter(
      (el) => el.category == this.current_vacancy
    );
  },
  current_project: 0,
  project_tags: [
    "Все",
    "E-commerce",
    "В2В-системы",
    "Разработка сервисов",
    "MVP разработка",
  ],
  project_list: [
    {
      img: "design",
      title: "E-commerce",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 1,
    },

    {
      img: "code",
      title: "В2В-системы",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 2,
    },
    {
      img: "design",
      title: "Разработка сервисов",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 3,
    },
    {
      img: "code",
      title: "MVP разработка",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 4,
    },
    {
      img: "design",
      title: "В2В-системы",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 2,
    },
    {
      img: "design",
      title: "Разработка сервисов",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 3,
    },
    {
      img: "design",
      title: "MVP разработка",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 4,
    },
    {
      img: "code",
      title: "MVP разработка",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 4,
    },
    {
      img: "code",
      title: "MVP разработка",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 4,
    },
    {
      img: "code",
      title: "MVP разработка",
      text: "Мы создаем привлекательные и высокооптимизированные веб-сайты, которые передают историю и ценности вашего бизнеса вашей целевой аудитории, а также предоставляют возможности для маркетинга.",
      link: "",
      category: 4,
    },
  ],
  get filterProject() {
    if (this.current_project == 0) return this.project_list;
    const arr = this.project_list.filter(
      (el) => el.category == this.current_project
    );
    return arr;
  },
  feed_tags: [
    "Сайт",
    "Приложение",
    "Сайт",
    "Приложение",
    "Сайт",
    "Приложение",
    "Сайт",
    "Приложение",
  ],
  current_feed: 0,
}).mount();
