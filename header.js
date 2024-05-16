const menuBtn = document.getElementById("menu-btn"); /* menu button */
const menu = document.querySelector("nav ul"); /* menu */

menuBtn.addEventListener("click", toggleMenu);

/* toggle menu */
function toggleMenu() {
    menu.classList.toggle(
        "menu-open"
    ); /* switch the postion of the menu (refer to nabar.css l.71) */

    menuBtn.classList.toggle("icon-x");
}
