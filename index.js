document.querySelector(".menu-icon")
        .addEventListener('click', openMenu);
function openMenu() {
    document.querySelector(".open-menu").style.display = 'block';
    document.querySelector("body").classList.add("nav-overlay");
}

document.querySelector(".close-menu")
        .addEventListener('click', closeMenu);
function closeMenu() {
    document.querySelector(".open-menu").style.display = 'none';
    document.querySelector("body").classList.remove('nav-overlay');
}

document.querySelector("summary")
        .addEventListener('click', switchArrow);
function switchArrow() {
    document.querySelector(".arrow-down").style.display = 'none';
    document.querySelector(".arrow-up").style.display = 'block';
}
