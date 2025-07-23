document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((select) => {
    const header = select.querySelector(".custom-select__header");

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
  });
});
