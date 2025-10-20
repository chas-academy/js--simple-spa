import "./style.css";

// has to reference index.html because of the "?raw" suffix
import headerHTML from "./views/static/header/index.html?raw";
import homeHTML from "./views/static/home/index.html?raw";
import contactHTML from "./views/static/contact/index.html?raw";

// only has to reference the folder when it contains an index.js file
import about from "./views/about";
import footer from "./views/footer";
import { setRenderCallback } from "./store";

const getCurrentPage = () => {
  const currentPage = window.location.pathname;

  switch (currentPage) {
    case "/home":
      return homeHTML;
    case "/about":
      return about();
    case "/contact":
      return contactHTML;
    default:
      return (window.location.pathname = "/home");
  }
};

const app = document.querySelector("#app");

const renderApp = () => {
  const currentPage = getCurrentPage();

  if (typeof currentPage === "string") {
    return (app.innerHTML = `
      ${headerHTML}
      ${currentPage}
      ${footer()}
    `);
  }
  app.innerHTML = `
      ${headerHTML}
      ${footer()}
    `;
  return app.insertBefore(currentPage, app.querySelector("footer"));
};

// initial render
renderApp();

//rerender logic
window.addEventListener("popstate", renderApp);
setRenderCallback(renderApp);
