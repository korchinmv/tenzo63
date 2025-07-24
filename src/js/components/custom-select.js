document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((select) => {
    const header = select.querySelector(".custom-select__header");
    const options = select.querySelectorAll(".custom-select__list-item");
    const selectBtn = select.querySelector(".custom-select__current");
    const resetBtn = select.querySelector(".custom-select__reset");

    // Открытие/закрытие dropdown
    function toggleDropdown() {
      select.classList.toggle("custom-select--active");

      // Закрытие других открытых селектов
      document.querySelectorAll(".custom-select").forEach((otherSelect) => {
        if (
          otherSelect !== select &&
          otherSelect.classList.contains("custom-select--active")
        ) {
          otherSelect.classList.remove("custom-select--active");
        }
      });
    }

    // Обработчики событий
    header.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown();
    });

    document.addEventListener("click", function (e) {
      if (!select.contains(e.target)) {
        select.classList.remove("custom-select--active");
      }
    });

    if (options) {
      options.forEach((option) => {
        option.addEventListener("click", () => {
          selectBtn.innerText = option.innerText;
          select.classList.remove("custom-select--active");

          if (option.classList.contains("custom-select__list-item--active")) {
            option.classList.remove("custom-select__list-item--active");
            resetBtn.style.display = "none";
          } else {
            options.forEach((item) => {
              item.classList.remove("custom-select__list-item--active");
            });
            option.classList.add("custom-select__list-item--active");
            resetBtn.style.display = "flex";
          }
        });
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        options.forEach((item) => {
          item.classList.remove("custom-select__list-item--active");
        });
        selectBtn.innerText = "Выберите значение";
        resetBtn.style.display = "none";
      });
    }
  });
});
