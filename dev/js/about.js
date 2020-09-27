const prev = document.getElementById('prev')
const next = document.getElementById('next')

/* Transformo el HTMLCollection en arrays para despues poder manipularlos mejor */
const images = Array.from(document.querySelectorAll('.about__img'))
const texts = Array.from(document.querySelectorAll('.about__text'))

let cont = 0

/*if (prev) {
    prev.addEventListener('click', () => {
        // elimino todas las clases de los elementos que me permiten visualizarlos 
        images.map(image => image.classList.remove('show'))
        texts.map(text => text.classList.remove('show'))

        // si estoy posicionado en mi primera imagen, entonces quiero que aparezca la ultima 
        if (cont === 0) cont = images.length - 1
        // si no es mi primera imagen, quiero que vata una para atras  
        else cont--

        images[cont].classList.add('show')
        texts[cont].classList.add('show')
    })
}

if (next) {
    next.addEventListener('click', () => {
        images.map(image => image.classList.remove('show'))
        texts.map(text => text.classList.remove('show'))

        if (cont === images.length - 1) cont = 0
        else cont++

        images[cont].classList.add('show')
        texts[cont].classList.add('show')
    })
}
*/

prev && prev.addEventListener('click', () => setClass('prev'))
next && next.addEventListener('click', () => setClass('next'))

const setClass = (direction) => {
    /* elimino todas las clases de los elementos que me permiten visualizarlos */
    images.map(image => image.classList.remove('show'))
    texts.map(text => text.classList.remove('show'))

    setCont(direction)
    
    images[cont].classList.add('show')
    texts[cont].classList.add('show')
}

const setCont = (direction) => {
    if (direction == "prev") {
        /* si estoy posicionado en mi primera imagen, entonces quiero que aparezca la ultima */
        if (cont === 0) cont = images.length - 1
        /* si no es mi primera imagen, quiero que vata una para atras  */
        else cont--
    } else {
        if (cont === images.length - 1) cont = 0
        else cont++
    }
}