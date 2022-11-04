(() => {
  let components = document.querySelectorAll("[data-include]");
  const loadComponent = async (component) => {
    const { include } = component?.dataset;
    let filePath = "../components/" + include + ".html";
    const response = await fetch(filePath);
    const html = await response.text();
    component.innerHTML = html;
  };

  [...components].forEach(loadComponent);
})();

// NAVBAR FUNCTIONALITY
window.addEventListener(`load`, (e) => {
  console.log(e);
  const linkContainerEl = document.querySelector(
    `.nav-bar__link-container__links`
  );
  const allLinks = document.querySelectorAll(".nav-bar__link-container__link");
  const mobileNavEl = document.querySelector(`.nav-bar__mobile-nav-btn`);
  const navEl = document.querySelector(`nav`);

  linkContainerEl.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`nav-bar__link-container__link`)) {
      allLinks.forEach((link, index) => {
        link.classList.remove(`active-link`);
        link.nextElementSibling.classList.remove(`active-dot`);
      });
      e.target.classList.add(`active-link`);
      e.target.nextElementSibling.classList.add(`active-dot`);
    }
  });
  mobileNavEl.addEventListener(`click`, (e) => {
    navEl.classList.toggle(`nav-open`);
  });
});
