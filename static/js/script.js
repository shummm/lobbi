const shopButton = document.querySelector(".main-page__button--shop");
const adsButton = document.querySelector(".main-page__button--ads");
const shopSection = document.querySelector(".shop");
const adsSection = document.querySelector(".ads");

const openSection = function (sectionOpen, sectionClosed, buttonOpen, buttonClosed) {
    buttonOpen.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (sectionClosed.classList.contains("content__item--current")) {
            sectionClosed.classList.remove("content__item--current");
            sectionOpen.classList.add("content__item--current");
            buttonOpen.classList.add("main-page__button--current");
            buttonClosed.classList.remove("main-page__button--current");
        }
    });
};

openSection(adsSection, shopSection, adsButton, shopButton);
openSection(shopSection, adsSection, shopButton, adsButton);
