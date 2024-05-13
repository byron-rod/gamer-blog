document.addEventListener("DOMContentLoaded", (event) => {
  let marquee = (selector, speed) => {
    const container = document.querySelector(selector);
    const list = container.children[0];

    let i = 0;

    setInterval(() => {
      if (i >= list.offsetWidth) {
        i = 0;
      } else {
        i += speed;
      }

      list.style.transform = `translateX(-${i}px)`;
    }, 1000 / 60);
  };

  marquee(".marquee__container", 0.3);
});
