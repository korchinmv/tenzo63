document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion__item");

  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      // const btn = self.querySelector(".accordion__btn");
      const content = self.querySelector(".accordion__content");
      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
