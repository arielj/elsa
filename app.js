document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const linkToAnchor = e.target.closest('[href*="#"]');
    if (linkToAnchor) {
      const id = linkToAnchor.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        let url = linkToAnchor.href;
        if (id === "top") {
          url = url.replace(linkToAnchor.hash, "");
        }
        history.pushState({}, "", url);
      }
    }
  });
});
