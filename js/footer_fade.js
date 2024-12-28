document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    const footerBottom = document.querySelector(".footer-bottom");
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("slide-up");
          footerBottom.classList.add("fade-in");
        } else {
          footer.classList.remove("slide-up");
          footerBottom.classList.remove("fade-in");
        }
      },
      {
        threshold: 0.2,
      }
    );
  
    observer.observe(footer);
  });
  