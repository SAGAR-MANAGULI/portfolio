const textElement = document.querySelector(".text");

const words = [
    "Full Stack Developer  ,Problem Solver , DSA Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[wordIndex];

    if (!isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, 100);
}

typeEffect();

const resumeBtn = document.querySelector(".btn");

resumeBtn.addEventListener("click", () => {
    resumeBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
        resumeBtn.style.transform = "scale(1)";
    }, 150);
});

