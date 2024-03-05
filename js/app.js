// reveal
const reveals = document.querySelectorAll(".kubok, .global-title, .announce-title, .announce-paragraph, .announce-image, .form");

reveals.forEach((el) => {
    el.classList.add("loading");
});

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

function observerCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("loaded");
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

reveals.forEach((el) => observer.observe(el));