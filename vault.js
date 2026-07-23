/* ==========================
   PROJECT VAULT
   Arjun T V Portfolio
========================== */


/* ==========================
   PAGE LOAD
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================
   PROJECT CARD REVEAL
========================== */

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition =
        "opacity .7s ease, transform .7s ease";

    card.style.transitionDelay =
        `${index * 0.12}s`;

    observer.observe(card);

});


/* ==========================
   FILTER BUTTONS
========================== */

const filters = document.querySelectorAll(".filters span");

filters.forEach((filter) => {

    filter.addEventListener("click", () => {

        filters.forEach((item) => {

            item.classList.remove("active");

        });

        filter.classList.add("active");

    });

});


/* ==========================
   PROJECT CARD HOVER
========================== */

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 25px 50px rgba(255,255,255,.08)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


/* ==========================
   BUTTON HOVER
========================== */

const buttons =
    document.querySelectorAll(".project-card a");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-2px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px)";

    });

});


/* ==========================
   SMOOTH SCROLL TO TOP
========================== */

window.history.scrollRestoration = "manual";

window.scrollTo({

    top: 0,

    behavior: "smooth"

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(`

======================================

      PROJECT VAULT

      Arjun T V Portfolio

======================================

`);