let listSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".lista_Slide");
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".lista_Slide");
  listSlide = (listSlide + 1) % slides.length;
  showSlide(listSlide);
}

showSlide(listSlide);

setInterval(nextSlide, 3000);
