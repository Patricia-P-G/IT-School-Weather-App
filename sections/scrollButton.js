const scrollToTopButton = document.querySelector(".scroll-to-top");

document.addEventListener("scroll", function() {
  const viewportHeight = window.innerHeight;

  if (window.scrollY > viewportHeight) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});

scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
 });