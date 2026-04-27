function add(){

document.querySelector(".card-img-top").src = "img/Lucas_Paqueta.png";

document.getElementById("Nome").innerHTML = `
<span>Lucas Tolentino Coelho de Lima</span>
<span id="Rank" class="badge text-bg-secondary">8,8</span>
`;

document.getElementById("Data_Nas").innerHTML =
"<strong>Nascimento:</strong> 27/08/1997";

document.getElementById("Alutra").innerHTML =
"<strong>Altura:</strong> 1,80 m";

document.querySelector(".card-text span:last-child").innerHTML =
"<strong>Posição:</strong> Meio-campista";

}