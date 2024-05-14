const aboutMe = document.querySelector("#about-me");
const goBack = document.querySelector("#go-back");
const headerClipPath = document.querySelector(".primary-header");

aboutMe.addEventListener('click', () => {
    headerClipPath.classList.replace("clip-path-animation-reverse", "clip-path-animation");
})

goBack.addEventListener('click', () => {
    headerClipPath.classList.replace("clip-path-animation", "clip-path-animation-reverse");
})