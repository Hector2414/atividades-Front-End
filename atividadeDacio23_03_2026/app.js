"use strict"
const img = document.getElementById("main");
const btn = document.getElementById("btn");

const estados = {
    normal: "img/BichinSemFundoQA.png",
    comendo:"img/bichinComendoSemFundoQA.png",
    feliz:"img/BichinSemFundoQA.png",
    fome: "img/BichinBravoQA.png"
};

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;

function initCont(){
    if(intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => { 
    contador++;

    console.log("Tempo", contador);

    if(contador == 30){
        img.src = estados.fome30
    }
    if(contador == 60){
        img.src = estados.fome60
    }

    }, 1000)};