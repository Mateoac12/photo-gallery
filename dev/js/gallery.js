/* Estos simbolos indican que si ese elemento es true (existe) entonces que haga algo */
document.getElementById('gallery') &&
    new Macy({
        container: '#gallery',      //especifica el contenedor de las imagenes
        trueOrder: false,           // para que no se ordenen segun la altura de los elementos
        waitForImages: false,       //para que se ejecuten las imagenes una por una y que no tengan que esperar a que se cargen todas
        useOwnImageLoader: false,   //porque no estamos usando una libreria de imagenes distinta
        debug: true,                //para que nos avise en caso de algun error
        mobileFirst: true,
        columns: 1,
        margin: {
            y: 15,
            x: 15
        },
        breakAt: {
            1200:5,
            940:4,
            520:2
        }

    })

