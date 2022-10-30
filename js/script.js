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
