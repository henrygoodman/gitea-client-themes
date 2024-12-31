(function () {
  const inlineStyle = document.createElement("style");
  inlineStyle.textContent = `
    html {
      visibility: hidden;
    }
  `;

  document.documentElement.appendChild(inlineStyle);

  function injectTheme() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = browser.runtime.getURL("theme.css");
    link.onload = () => {
      document.documentElement.style.visibility = "visible";
    };
    document.head.appendChild(link);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectTheme);
  } else {
    injectTheme();
  }
})();
