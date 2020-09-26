const topbar = document.getElementById('topbar')

const loginModal = document.getElementById('login-modal')
const registerModal = document.getElementById('register-modal')

const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')


/* Si damos click dentro de topbar en un elemento que tenga como padre un data, entonces se va a abrir una ventana modal, dependiendo si es login o register */
if (topbar) {
    topbar.addEventListener('click', (e) => {
        if (e.target.parentElement.dataset.type != undefined) {
            if (e.target.parentElement.dataset.type === "login") loginModal.classList.add('lightbox--show')

            else if (e.target.parentElement.dataset.type === "register") registerModal.classList.add('lightbox--show')
        }
    })
}

/* Si damos click fuera del formulario, nos sacara nuesta ventana modal */
if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox')) {
            loginModal.classList.remove('lightbox--show')
        }
    })
}

if (registerModal) {
    registerModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox')) {
            registerModal.classList.remove('lightbox--show')
        }
    })
}

/* Para evitar que el formulario se envie cuando le demos al boton de submit */
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}

if (registerForm) {   
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}