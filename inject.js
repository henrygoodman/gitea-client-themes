// Append the inline style to prevent FOUC immediately
(function () {
  const inlineStyle = document.createElement("style");
  inlineStyle.textContent = `
    html {
      visibility: hidden; /* Hide content until theme is applied */
    }
  `;

  // Append the style to the document's <html> or <head> before rendering
  document.documentElement.appendChild(inlineStyle);

  // Function to inject the custom theme
  function injectTheme() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = browser.runtime.getURL("theme.css"); // Path to your custom CSS
    link.onload = () => {
      document.documentElement.style.visibility = "visible"; // Show content after theme is applied
    };
    document.head.appendChild(link);
  }

  // Ensure theme injection happens as soon as possible
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectTheme);
  } else {
    injectTheme();
  }
})();
