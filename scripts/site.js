let listSlide = 0;

function showSlide(index) {
  const listeSlide = document.querySelectorAll(".slide");
  listeSlide.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function proxSlide() {
  const slides = document.querySelectorAll(".slide");
  listSlide = (listSlide + 1) % slides.length;
  showSlide(listSlide);
}

showSlide(listSlide);
