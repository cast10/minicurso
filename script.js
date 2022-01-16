





gerarvalorAleatorio =() => {
    return Math.floor(Math.random() *671)

}


pegarPersonagem = () => {
    let numeroAleatorio = gerarvalorAleatorio();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        } 
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });


    
}

botao.onclick = pegarPersonagem;




