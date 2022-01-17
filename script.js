const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const status = document.querySelector('#status');


pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
}).then((response) => response.jason()).then((data)) => {
    imagem.src = data.image;
    imagem.alt= data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.specie;
    condicao.innerHTML = data.status;
});
}

botao.onclick = () => pegarPersonagem;