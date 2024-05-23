const contactBtn = document.querySelector("#contact-btn");
const goBack = document.querySelector("#go-back");
const formClipPath = document.querySelector(".form-wrapper");

const rootElement = document.documentElement;
const darkToggle = document.querySelector("#dark");
const lightToggle = document.querySelector("#light");



if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkToggle.checked = true;
    lightToggle.checked = false;
    rootElement.setAttribute("data-color-theme", "dark");
} else {
    lightToggle.checked = true;
    darkToggle.checked = false;
    rootElement.setAttribute("data-color-theme", "light");
}


darkToggle.addEventListener('click', () => {
    rootElement.setAttribute("data-color-theme", "dark");
    darkToggle.checked = true;
})

lightToggle.addEventListener('click', () => {
    rootElement.setAttribute("data-color-theme", "light");
    lightToggle.checked = true;
})




// toggle for clip path animation
contactBtn.addEventListener('click', () => {
    formClipPath.classList.replace("clip-path-animation", "clip-path-animation-reverse");
})

goBack.addEventListener('click', () => {
    formClipPath.classList.replace("clip-path-animation-reverse", "clip-path-animation");
})
