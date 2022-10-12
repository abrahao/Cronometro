"use strict";

let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let cronometro;

document.form_cronometro.iniciar.onclick = () => iniciar();
document.form_cronometro.pausar.onclick = () => pausar();
document.form_cronometro.resetar.onclick = () => resetar();

function iniciar() {
pausar();
cronometro = setInterval(() => { temporizadorr(); }, 10);
}

function pausar() {
clearInterval(cronometro);
}

function resetar() {
hora = 0;
minuto = 0;
segundo = 0;
milisegundo = 0;
document.getElementById('hora').innerText = '00';
document.getElementById('minuto').innerText = '00';
document.getElementById('segundo').innerText = '00';
document.getElementById('milisegundo').innerText = '000';
}
function temporizadorr() {
if ((milisegundo += 10) == 1000) {
milisegundo = 0;
segundo++;
}
if (segundo == 60) {
segundo = 0;
minuto++;
}
if (minuto == 60) {
minuto = 0;
hora++;
}
document.getElementById('hora').innerText = returnData(hora);
document.getElementById('minuto').innerText = returnData(minuto);
document.getElementById('segundo').innerText = returnData(segundo);
document.getElementById('milisegundo').innerText = returnData(milisegundo);
}

function returnData(input) {
return input > 10 ? input : `0${input}`
}