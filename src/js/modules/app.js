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
