
const botao = document.querySelector ('#botao');
gerarvalorAleatorio = () => {
    return Math.floor(Math.random() * 671);
  };
  pegarPersonagem1 = () => {
    let numeroAleatorio = gerarvalorAleatorio();
    const imagem = document.querySelector("#imagem1");
    const nomeDoPersonagem = document.querySelector("#nome1");
    const especie = document.querySelector("#especie1");
    const condicao = document.querySelector("#status1");

    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
      });
};
pegarPersonagem2 = () => {
    let numeroAleatorio = gerarvalorAleatorio();
    const imagem = document.querySelector("#imagem2");
    const nomeDoPersonagem = document.querySelector("#nome2");
    const especie = document.querySelector("#especie2");
    const condicao = document.querySelector("#status2");

    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
      });
};
pegarPersonagem3 = () => {
    let numeroAleatorio = gerarvalorAleatorio();
    const imagem = document.querySelector("#imagem3");
    const nomeDoPersonagem = document.querySelector("#nome3");
    const especie = document.querySelector("#especie3");
    const condicao = document.querySelector("#status3");

    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
      });
};


 mudarTodosPersonagens = () => {
  pegarPersonagem1();
  pegarPersonagem2();
  pegarPersonagem3();
}

botao.onclick = mudarTodosPersonagens;