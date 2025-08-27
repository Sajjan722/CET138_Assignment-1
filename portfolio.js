// Navbar active link toggle
function setActive(link) {
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  link.classList.add('active');
}

// Highlight nav when scrolling
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll("section, header");
  let navLinks = document.querySelectorAll(".nav-link");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});
