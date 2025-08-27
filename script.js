// Highlight active navbar link
function setActive(element) {
  let links = document.querySelectorAll(".nav-link");
  links.forEach(link => link.classList.remove("active"));
  element.classList.add("active");
}
