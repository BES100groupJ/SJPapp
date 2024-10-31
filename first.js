first.js

document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach((el) => {
        el.style.opacity = 1;
    });
});