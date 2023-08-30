var darkToggle = document.querySelector(".dark-toggle");
var darkToggleImage = document.querySelector("#toggle-img");
var darkToggleMobile = document.querySelector(".dark-toggle-mobile");
var darkToggleImageMobile = document.querySelector("#toggle-img-mobile");

darkToggleImage.src = "images/dark.svg";

function toggleDarkMode() {
    var body = document.querySelector('body')
    if (body.classList.contains("dark-mode")) {
        darkToggleImage.src = "images/dark.svg"
        darkToggleImageMobile.src = "images/dark.svg"
    } else {
        darkToggleImage.src = "images/light.svg"
        darkToggleImageMobile.src = "images/light.svg"
    }
    body.classList.toggle("dark-mode");
}

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

if (useDark.matches) {
    toggleDarkMode()
}

useDark.addEventListener("change", toggleDarkMode)

darkToggle.addEventListener("click", () => {
    toggleDarkMode()
});




darkToggleImageMobile.src = "images/dark.svg";

darkToggleMobile.addEventListener("click", () => {
    toggleDarkMode()
});


var openNavButton = document.querySelector("#open-nav")
var closeNavButton = document.querySelector("#close-nav")
var nav = document.getElementById("mobile-nav")

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= 0.2;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.1;
    }, 10);
}

openNavButton.addEventListener("click", () => {
    nav.style.opacity = "0%"
    nav.style.display = "block"
    fadeIn(nav)
})


closeNavButton.addEventListener("click", () => {
    nav.style.opacity = "100%"
    fadeOut(nav)
})

document.querySelectorAll(".mobile.menu-item").forEach(element => {
    element.addEventListener("click", () => {
        nav.style.display = "none"
    })
})

var revCycleButton = document.getElementById("rev-cycle-button")
var healthcareButton = document.getElementById("healthcare-button")
var staffAugButton = document.getElementById("staff-aug-button")
var acoStepsButton = document.getElementById("aco-steps-button")

var servicesMenu = [revCycleButton, healthcareButton, staffAugButton, acoStepsButton]

servicesMenu.forEach(item => {
    item.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
            var showSectionId = item.id.slice(0,-7) + "-section"
            document.querySelectorAll(".steps").forEach(section => {
                section.style.display = "none"
            })
            document.getElementById(showSectionId).style.display = "flex"
        }
        servicesMenu.forEach(item => {item.classList.remove("active")})
        item.classList.add("active")
    })
})

var selector = document.getElementById("steps-selector")

selector.addEventListener("change", () => {
    var showSection = selector.value
    document.querySelectorAll(".steps").forEach(section => {
        section.style.display = "none"
    })
    document.getElementById(showSection).style.display = "flex"
})