document.addEventListener("DOMContentLoaded", (event) => {
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".navbar__mobile-list");

  mobile_btn.addEventListener("click", () => {
    let menu_open = document.querySelector(".menu_open");

    if (!menu_open) {
      mobile_menu.style.display = "block";
      mobile_menu.classList.add("menu_open");
    } else {
      mobile_menu.style.display = "none";
      mobile_menu.classList.remove("menu_open");
    }
  });

  const submenus = (boton, submenu, className) => {
    boton.addEventListener("click", () => {
      let dropdown = document.querySelector("." + className);

      if (!dropdown) {
        submenu.style.display = "block";
        submenu.classList.add(className);
      } else {
        submenu.style.display = "none";
        submenu.classList.remove(className);
      }
    });
  };

  let dropdown1_btn = document.querySelector("#icon1");
  let dropdown1 = document.querySelector("#submenu1");

  let dropdown2_btn = document.querySelector("#icon2");
  let dropdown2 = document.querySelector("#submenu2");

  submenus(dropdown1_btn, dropdown1, "submenu_open");
  submenus(dropdown2_btn, dropdown2, "submenu_open");

  // Close menu when click outside
  document.addEventListener("click", (event) => {
    let isClickInside = mobile_btn.contains(event.target);
    let isClickInside2 = dropdown1_btn.contains(event.target);
    let isClickInside3 = dropdown2_btn.contains(event.target);
    let isClickInside4 = mobile_menu.contains(event.target);
    let isClickInside5 = dropdown1.contains(event.target);
    let isClickInside6 = dropdown2.contains(event.target);

    if (
      !isClickInside &&
      !isClickInside2 &&
      !isClickInside3 &&
      !isClickInside4 &&
      !isClickInside5 &&
      !isClickInside6
    ) {
      mobile_menu.style.display = "none";
      mobile_menu.classList.remove("menu_open");
      dropdown1.style.display = "none";
      dropdown1.classList.remove("submenu_open");
      dropdown2.style.display = "none";
      dropdown2.classList.remove("submenu_open");
    }
  });

  //   close menu when screen is bigger than 1024px
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      mobile_menu.style.display = "none";
      mobile_menu.classList.remove("menu_open");
      dropdown1.style.display = "none";
      dropdown1.classList.remove("submenu_open");
      dropdown2.style.display = "none";
      dropdown2.classList.remove("submenu_open");
    }
  });
});
