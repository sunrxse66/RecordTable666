'use strict';

let name_inp = document.querySelector('#name')
let start = document.querySelector('#start')
let click = document.querySelector('#click')
let timep = document.querySelector('#time')

let timerId;

name_inp.addEventListener('blur', disable)
start.addEventListener('click', time)

function disable() {
    if (name_inp.value.length <= 0) {
        start.disabled = true
    } else if (name_inp.value.length !== 0) {
        start.disabled = false
    }
}


function time() {
    timep.textContent = 0;
    timerId = setInterval(function() {
        timep.textContent++
    }, 1000);
}
