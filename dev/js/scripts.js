const toggleMenu = document.getElementById('toggle-menu')
const mainMenu = document.getElementById('main-menu')

toggleMenu.addEventListener('click', (e) => {
    if (e.target.id === "toggle-menu" || e.target.parentElement.id === "toggle-menu") {
        mainMenu.classList.toggle('show')    /* Si tiene esta clase la elimina, y si no la tiene la agrega */
    }
})