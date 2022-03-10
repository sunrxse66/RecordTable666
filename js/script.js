'use strict';

let name_inp = document.querySelector('#name')
let start = document.querySelector('#start')
let click = document.querySelector('#click')
let timep = document.querySelector('#time')
let playername = document.querySelector('#player_name')

let timerId;

name_inp.addEventListener('blur', disable)
start.addEventListener('click', startbut)

function disable() {
    if (name_inp.value.length <= 0) {
        start.disabled = true
    } else if (name_inp.value.length !== 0) {
        start.disabled = false
    }
}


function startbut() {
    timep.textContent = 0;
    timerId = setInterval(function() {
        timep.textContent++
    }, 1000);
    name_inp.value = '';

}
