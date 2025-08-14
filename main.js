var typed = new Typed(".text", {
  strings: ["Web Developer", "AI & ML Enthusiast", "Cybersecurity Learner"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});



let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});




















































