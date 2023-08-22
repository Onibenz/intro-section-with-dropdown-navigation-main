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

let feature = document.querySelector(".feature");
let featureMenu = document.querySelector(".feature-menu");
feature.addEventListener("click", featureArrow);
function featureArrow() {featureMenu.classList.toggle("open");
    if(featureMenu.classList.contains("open")) {
    document.querySelector(".arrow-down").style.display = 'none';
    document.querySelector(".arrow-up").style.display = 'block';
}
else {
    document.querySelector(".arrow-down").style.display = 'block';
     document.querySelector(".arrow-up").style.display = 'none';
}}

let company = document.querySelector(".company");
let companyMenu = document.querySelector(".company-menu");
company.addEventListener("click", companyArrow);
function companyArrow() {
    companyMenu.classList.toggle("open");
    if(companyMenu.classList.contains("open")) {
    document.querySelector(".company-down").style.display = 'none';
    document.querySelector(".company-up").style.display = 'block';
}
else {
    document.querySelector(".company-down").style.display = 'block';
     document.querySelector(".company-up").style.display = 'none';
}
}
