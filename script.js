/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.8s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2500);

});


/* ==========================
   TYPING EFFECT
========================== */

const typingElement = document.getElementById("typing");

const words = [
    "Software Developer",
    "Web Developer",
    "Python Developer",
    "Computer Engineering Student",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


/* ==========================
   CURSOR GLOW
========================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
    ".glass-card, .featured-card, .project-card, .contact-card"
);

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

});

function revealOnScroll() {

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (top < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";
        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================
   ACTIVE NAVBAR LINK
========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 200;

        if (
            window.scrollY >= sectionTop
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active-link");
        }

    });

});


/* ==========================
   PROJECT CARD HOVER
========================== */

const cards =
    document.querySelectorAll(
        ".project-card"
    );

cards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.boxShadow =
                "0 20px 40px rgba(255,255,255,0.08)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.boxShadow =
                "none";
        }
    );

});


/* ==========================
   HERO PARALLAX
========================== */

const hero =
    document.getElementById("hero");

window.addEventListener("scroll", () => {

    const scrollY =
        window.scrollY;

    hero.style.backgroundPositionY =
        scrollY * 0.4 + "px";

});


/* ==========================
   BUTTON HOVER EFFECT
========================== */

const buttons =
    document.querySelectorAll(
        ".btn-primary, .btn-secondary"
    );

buttons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-3px)";
        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0)";
        }
    );

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(`
=================================

ARJUN T V PORTFOLIO

Modern Black Edition

=================================
`);
/* ==========================
   HIDE NAVBAR ON SCROLL
========================== */

let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // Always show navbar near the top
    if(currentScroll < 50){
        navbar.classList.remove("hide-nav");
        lastScroll = currentScroll;
        return;
    }

    // Scrolling down
    if(currentScroll > lastScroll){
        navbar.classList.add("hide-nav");
    }

    // Scrolling up
    else{
        navbar.classList.remove("hide-nav");
    }

    lastScroll = currentScroll;

});