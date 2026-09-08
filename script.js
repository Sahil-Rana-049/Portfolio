const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const scrollProgress = document.querySelector(".scroll-progress");
const navigationLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuButton.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;
    scrollProgress.style.width = progress + "%";
});

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 250) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

const revealElements = document.querySelectorAll(
    ".about-grid, " +
    ".skill-box, " +
    ".project, " +
    ".timeline-item, " +
    ".certificate-card, " +
    ".contact-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const buttons = document.querySelectorAll(
    ".main-button, .outline-button, .project-link"
);

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transition = "transform 0.25s ease";
    });
});

const profileContainer = document.querySelector(".profile-container");

document.addEventListener("mousemove", event => {
    if (window.innerWidth < 900) return;

    const x = (window.innerWidth / 2 - event.clientX) / 60;
    const y = (window.innerHeight / 2 - event.clientY) / 60;

    profileContainer.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("mouseleave", () => {
    profileContainer.style.transform = "translate(0, 0)";
});
