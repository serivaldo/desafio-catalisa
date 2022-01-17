const imagem0 = document.querySelector('#imgem0');
const botao = document.querySelector('button');
const nomeDoPersonagem0 = document.querySelector('#nome0');
const especie0 = document.querySelector('#especie0');
const condicao0 = document.querySelector('#status0');

const imagem1 = document.querySelector('imagem1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

const imagem2 = document.querySelector('#imagem2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao = document.querySelector('#status2');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
}).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    imagem.alt= data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.species;
    condicao.innerHTML = data.status;
});
}

botao.onclick = () => pegarPersonagem;