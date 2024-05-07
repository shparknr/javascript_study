document.addEventListener("scroll", function () {
  const scrollAmount = window.scrollY;
  const textTop = document.getElementById("textTop");
  const textBottom = document.getElementById("textBottom");

  textTop.style.transform = `translateX(${scrollAmount * 0.5}px)`;
  textBottom.style.transform = `translateX(-${scrollAmount * 0.5}px)`;
});
