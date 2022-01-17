const imagem0 = document.querySelector('#imagem0');
const nomeDoPersonagem0 = document.querySelector('#nome0');
const especie0 = document.querySelector('#especie0');
const condicao0 = document.querySelector('#condicao0');

const imagem1 = document.querySelector('#imagem1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#condicao1');

const imagem2 = document.querySelector('#imagem2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#condicao2');

const botao = document.querySelector('#botao'); 

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}
pegarPersonagem = (imagem, nomeDoPersonagem, especie, condicao) => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src= data.image;
        imagem.alt= data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });    
}

botao.onclick = () => {pegarPersonagem(imagem0, nomeDoPersonagem0, especie0, condicao0);
                       pegarPersonagem(imagem1, nomeDoPersonagem1, especie1, condicao1);
                       pegarPersonagem(imagem2, nomeDoPersonagem2, especie2, condicao2)};