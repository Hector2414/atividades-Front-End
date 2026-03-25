"use strict"
const cria = document.getElementById("main");
const btn = document.getElementById("btn");

const estados = {
    normal: "img/BichinSemFundoQA.png",
    comendo:"img/bichinComendoSemFundoQA.png",
    feliz:"img/BichinSemFundoQA.png",
    fome: "img/BichinBravoQA.png",
    morto:"img/BichinMortoQA.png"
};

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 30){
                cria.src = estados.fome;
            }

            if(contador == 60){
                cria.src = estados.morto;
            }
        }, 1000);
}

// function initCont(){
//     if(intervalo) clearInterval(intervalo)

//     intervalo = setInterval(() => { 
//     contador++;

//     console.log("Tempo", contador);

//     if(contador == 30){
//         cria.src = estados.fome;
//     }
//     if(contador == 60){
//         cria.src = estados.morto;
//     }

//     }, 1000);
// }


    function alimentar(){
        cria.src = estados.comendo;
        contador = 0;
        console.log("Comendo ");

        if(timeClick) clearInterval(timeClick)

            timeClick = setTimeout(() =>{
                cria.src = estados.normal;
                timeOut = setTimeout(() => {
                    cria.src = estados.normal;
                },2000);
            },1000);
        

    }

    controlador();