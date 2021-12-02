//EventListener

//una manera de hacerlo es la siguiente

//const btnAumentar = document.querySelector('.btn-info')
//const btndisminuir = document.querySelector('.btn-danger')
//const span = document.getElementById('miSpan')
//let contador = 0
//
//btnAumentar.addEventListener('click', () => {
//    contador++
//    span.textContent = contador 
//})
//
//btndisminuir.addEventListener('click', ()=>{
//    contador--
//    span.textContent = contador
//})

//Event delegation
//La idea es que si tenemos una gran cantidad de elementos manejados de una manera similar, 
// entonces en lugar de asignar un controlador a cada uno de ellos - ponemos un solo controlador en su ancestro común.
//En el controlador llegamos a ver dónde ocurrió realmente el evento y controlarlo.event.target
//Veamos un ejemplo:

const container = document.querySelector('.container')
const span = document.getElementById('miSpan')
let contador = 0

container.addEventListener('click', (e)=>{
    if (e.target.classList.contains('btn-info')) {
        contador++
        span.textContent = contador
    }
    if (e.target.classList.contains('btn-danger')) {
        contador--
        span.textContent = contador
    }
    e.stopPropagation()
})

//stopPropagation()  
//detiene la propagación de un evento, con el objetivo de q no se realice 
//otra ejecución u otro listener lo escuche a través del DOM