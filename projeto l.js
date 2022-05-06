const lamp = document.getElementById('lamp')
const on = document.getElementById('On')
const off = document.getElementById('Off')

 function LampON() {
    lamp.src = './ligada.jpg.png'
}

function LampOff() {
    lamp.src = './desligada.jpg.png'
}

function broken(){
    lamp.src = './quebrada.jpg.png'
}

on.addEventListener('click',LampON)
off.addEventListener('click',LampOff)
lamp.addEventListener('dblclick',broken)
lamp.addEventListener('mouseenter', LampON)
lamp.addEventListener('mouseout', LampOff)
