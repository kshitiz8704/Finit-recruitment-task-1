document.addEventListener("DOMContentLoaded", function() {
    let splash = document.querySelector(".splash");
    setTimeout(() => {
        splash.classList.add('hidden');
    }, 1500);
  });

const about = document.querySelector(".about");
const home = document.querySelector(".home");

about.addEventListener("click", (event) => {
    home.classList.add('hidden-home');
});

onclick = (event) => {};

const homeTag = document.querySelector("#home");

homeTag.addEventListener("click", (event) => {
    home.classList.remove('hidden-home');
});

