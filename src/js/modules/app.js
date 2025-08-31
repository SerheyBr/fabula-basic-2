const trigger = document.querySelector(".footer");
const btnFixed = document.querySelector(".button-sticy");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      btnFixed.classList.add("active");
    } else {
      btnFixed.classList.remove("active");
    }
  });
});

observer.observe(trigger);

// accardeon action
const triggerAccordeonItem = document.querySelectorAll(
  ".accordion-item__trigger"
);
const accardeonItems = document.querySelectorAll(".accordion-item");

triggerAccordeonItem.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.currentTarget.parentElement.classList.contains("active")) {
      e.currentTarget.parentElement.classList.remove("active");
      return;
    }
    accardeonItems.forEach((el) => {
      el.classList.remove("active");
    });

    e.currentTarget.parentElement.classList.add("active");
  });
});
