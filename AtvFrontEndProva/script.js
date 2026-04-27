const img = document.getElementById("imagem")

function mostrarImagem(){
    img.style.display = "block"
}

function esconderImagem(){
    img.style.display = "none"
}
function proximoGrupo(){

document.getElementById("grupos").innerHTML = `

<div class="card">
<h2>Grupo D</h2>

<ul>
<li>Estados Unidos</li>
<li>Paraguai</li>
<li>Austrália</li>
<li>Turquia</li>
</ul>

<details>
<summary>Saiba Mais</summary>
<p>
Os EUA jogam em casa.
Austrália enfrenta com frequência seleções sul-americanas.
</p>
</details>

</div>


<div class="card">
<h2>Grupo E</h2>

<ul>
<li>Alemanha</li>
<li>Equador</li>
<li>Costa do Marfim</li>
<li>Curaçao</li>
</ul>

<details>
<summary>Saiba Mais</summary>
<p>
Alemanha costuma dominar fases de grupos.
Equador e Costa do Marfim têm estilo físico semelhante.
</p>
</details>

</div>


<div class="card">
<h2>Grupo F</h2>

<ul>
<li>Holanda</li>
<li>Japão</li>
<li>Tunísia</li>
<li>Suécia</li>
</ul>

<details>
<summary>Saiba Mais</summary>
<p>
Brasil, Marrocos e Escócia dividiram grupo em 1998.
Brasil nunca perdeu para a Escócia em Copas.
</p>
</details>

</div>

`;

}