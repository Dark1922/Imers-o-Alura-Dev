function adicionarFilme(){
  var campoFilme = document.querySelector('#filme') 
  var filmeFavorito = campoFilme.value;
  verificaFilme(filmeFavorito);
  campoFilme = "";
}

function verificaFilme(filme) {
   if (filme.endsWith('.jpg') || filme.endsWhith('.png')){
    listarFilmesNaTela(filme);
  }else{
    alert("imagem invalida");
  }
}

function adicionarTrailer(){
  var campoTrailer = document.querySelector('#trailer') 
  var linkTrailer = campoTrailer.value;
  //var trailer = linkTrailer.slice(17);
  verificaLinkTrailer(linkTrailer);
  //listarTrailerNaTela(trailer);
  campoFilme = "";
}

function verificaLinkTrailer(linkTrailer){
  if (linkTrailer.slice(0, 19) == "https://www.youtube") {
    var trailer = linkTrailer.slice(32);
    console.log(trailer);
    listarTrailerNaTela(trailer);
  }else if(linkTrailer.slice(0, 16) == "https://youtu.be"){
    var trailer = linkTrailer.slice(17);
    console.log(trailer);
    listarTrailerNaTela(trailer);
  }else{
    console.log("invalido");
  }
  trailer.value = "";
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img id='imgFilme'src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

function listarTrailerNaTela(trailer){
  var listaTrailer = document.querySelector('#listaTrailer');
  var elementoTrailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + trailer + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ;
  listaTrailer.innerHTML = listaTrailer.innerHTML + elementoTrailer;
}
