import { cEl } from "../utils/helpers";

export default function createHero(bodyEl) {
  const hero = cEl("section");
  hero.classList.add("hero");
  const heroInner = cEl("div");
  heroInner.classList.add("heroInner");
  const heroItem = cEl("div");
  heroItem.classList.add("heroItem");
  const heroItem_2 = cEl("div");
  heroItem_2.classList.add("heroItem");
  const heroItem_3 = cEl("div");
  heroItem_3.classList.add("heroItem");
  const navControls = cEl("div");
  navControls.classList.add("navControls");
  const control = cEl("span");
  control.classList.add("active");
  control.classList.add("control");
  control.classList.add("c_1");
  const control_2 = cEl("span");
  control_2.classList.add("control");
  control_2.classList.add("c_2");
  const control_3 = cEl("span");
  control_3.classList.add("control");
  control_3.classList.add("c_3");

  navControls.addEventListener("click", (e) => {
    const controls = [...document.querySelectorAll(".control")];

    if (e.target.classList.contains("control")) {
      controls.map(
        (item) =>
          item.classList.contains("active") && item.classList.remove("active")
      );
    }

    console.log(window.innerWidth);
    if (e.target.classList.contains("c_2")) {
      e.target.classList.add("active");
      heroInner.style.transform = "translateX(-93vw)";
      if (window.innerWidth <= 1080) {
        heroInner.style.transform = "translateX(-100vw)";
      }
    } else if (e.target.classList.contains("c_3")) {
      e.target.classList.add("active");
      heroInner.style.transform = "translateX(-186vw)";
      if (window.innerWidth <= 1080) {
        heroInner.style.transform = "translateX(-200vw)";
      }
    } else if (e.target.classList.contains("c_1")) {
      e.target.classList.add("active");
      heroInner.style.transform = "translateX(0)";
    }
  });

  window.addEventListener("resize", () => {
    const controls = [...document.querySelectorAll(".control")];

    if (window.innerWidth <= 1080) {
      heroInner.style.transform = "translateX(0)";
      controls.map(
        (item) =>
          item.classList.contains("active") && item.classList.remove("active")
      );
      controls[0].classList.add("active");
    }
  });

  const heroImg = cEl("img");
  heroImg.classList.add("heroImg");
  const heroImg_2 = cEl("img");
  heroImg_2.classList.add("heroImg");
  const heroImg_3 = cEl("img");
  heroImg_3.classList.add("heroImg");

  heroImg_3.src =
    "https://images.unsplash.com/photo-1563286094-6e420626b6f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3275&q=80";

  heroImg_2.src =
    "https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3295&q=80";

  heroImg.src =
    "https://images.unsplash.com/photo-1540200049848-d9813ea0e120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80";

  bodyEl.appendChild(hero);
  hero.appendChild(heroInner);
  hero.appendChild(navControls);
  navControls.appendChild(control);
  navControls.appendChild(control_2);
  navControls.appendChild(control_3);
  heroInner.appendChild(heroItem);
  heroInner.appendChild(heroItem_2);
  heroInner.appendChild(heroItem_3);
  heroItem.appendChild(heroImg);
  heroItem_2.appendChild(heroImg_2);
  heroItem_3.appendChild(heroImg_3);
}
