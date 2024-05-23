const contactBtn = document.querySelector("#contact-btn");
const goBack = document.querySelector("#go-back");
const formClipPath = document.querySelector(".form-wrapper");


contactBtn.addEventListener('click', () => {
    formClipPath.classList.replace("clip-path-animation", "clip-path-animation-reverse");
})

goBack.addEventListener('click', () => {
    formClipPath.classList.replace("clip-path-animation-reverse", "clip-path-animation");
})
