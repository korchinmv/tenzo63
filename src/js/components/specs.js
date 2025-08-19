document.addEventListener("DOMContentLoaded", function () {
  // Находим все кнопки "Показать ещё" на странице
  const showMoreButtons = document.querySelectorAll(".specs-show-more");

  // Для каждой кнопки добавляем обработчик клика
  showMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Находим родительский элемент .specs
      const specsContainer = this.closest(".specs");

      // Сразу скрываем кнопку
      this.style.display = "none";

      // Находим все скрытые элементы внутри текущего контейнера
      const hiddenItems = specsContainer.querySelectorAll(
        ".specs__item--hidden-mobile"
      );

      // Показываем элементы с анимацией
      hiddenItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("specs__item--visible");
        }, index * 80);
      });
    });
  });
});
