document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".d-none");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      sections.forEach(section => section.classList.add("d-none"));

      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("d-none");
      }
    });
  });
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
