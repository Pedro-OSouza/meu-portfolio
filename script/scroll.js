document.addEventListener("DOMContentLoaded", function (e) {
    const buttonWithLink = document.querySelector(".cta-scroll");
    const buttonHref = buttonWithLink.getAttribute("href");

    buttonWithLink.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToTarget(buttonHref);
    });

    document.querySelectorAll(".cta-scroll").forEach(function (ctaButton) {
        const ctaHref = ctaButton.getAttribute("href");
      ctaButton.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToTarget(ctaHref);
      });
    });

    document.querySelectorAll(".menu-nav a").forEach(function (menuLink) {
        menuLink.addEventListener("click", function (e) {
          e.preventDefault();
          const id = this.getAttribute("href");
          scrollToTarget(id);         
        });
      });;

    function scrollToTarget(id) {
      const target = document.querySelector(id);
      const headerHeight = document.querySelector("header").offsetHeight;
      const startPosition = window.pageYOffset;
      const targetPosition = target.offsetTop - headerHeight;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duração de 1 segundo
      const startTime = performance.now();

      function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        const position = easeInOutQuad(elapsedTime, startPosition, distance, duration);
        window.scrollTo(0, position);
        if (elapsedTime < duration) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  });