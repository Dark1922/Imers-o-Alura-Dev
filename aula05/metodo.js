function adicionarFilme() {
   
    var campoFilmeFavorito = document.querySelector('#filme')
   
    var filmeFavorito = campoFilmeFavorito.value
    
    if (filmeFavorito.endsWith('.jpg')){
        
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem Inválida")
  }
    campoFilmeFavorito.value= ""
    }
 
    function listarFilmesNaTela(filme) {
   
        var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }