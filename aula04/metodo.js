// Array com os filmes a serem exibidos.
let filmes = [
    {
        "nome": "Attack on Titan",
        "cover": "https://i.imgur.com/NqLkiRr.png",
        "id": 1,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/8OkpRK2_gVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "Jujutsu Kaisen",
        "cover": "https://i.imgur.com/DEePWfz.png",
        "id": 2,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/GwaRztMaoY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "Steins;Gate",
        "cover": "https://i.imgur.com/DAr61MB.png",
        "id": 3,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/dd7BILZcYAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "My Hero Academia",
        "cover": "https://i.imgur.com/4OfUyxO.png",
        "id": 4,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/-77UEct0cZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "Your Name",
        "cover": "https://i.imgur.com/JsS9KzU.png",
        "id": 5,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/lFsg_sDwlak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "Your Lie in April",
        "cover": "https://i.imgur.com/7kRxDtq.png",
        "id": 6,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/hImYRzNxtZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "Naruto Shippuden",
        "cover": "https://i.imgur.com/q3MtVEA.png",
        "id": 7,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/vxvP9zSOL7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "Erased",
        "cover": "https://i.imgur.com/U8Lnqdp.png",
        "id": 8,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/fodAJ-1dN3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "I want to eat your pancreas",
        "cover": "https://i.imgur.com/ckc2h2k.png",
        "id": 9,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/DA_LZFaksSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        "nome": "Dr. Stone",
        "cover": "https://i.imgur.com/xbJsU6N.png",
        "id": 10,
        "embed": '<iframe width="560" height="315" src="https://www.youtube.com/embed/tF4faMbs5oQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
]

// Mostrar os animes na tela
setTimeout(function() {
    // Definir a div de destino dos filmes
    var div = document.querySelector('.movies');

    // Adicionar os filmes no Array definido anteriormente
    for (var i = 0 ; i < filmes.length ; i++) {
        div.innerHTML += `<div class="movie"><img src="${filmes[i].cover}" title="${filmes[i].nome}" onclick="ativarPopup(${filmes[i].id})"></a></div>`;
    }
}, 1);

function ativarPopup(i) {
    var number = i - 1;
    var popupDiv = document.querySelector('.popups');
    popupDiv.innerHTML += `<div class="popup" id="${filmes[number].id}"><div class="overlay"></div><div class="content"><div class="close-btn" onclick="desativarPopup(${filmes[number].id})">&times;</div>${filmes[number].embed}</div></div>`;
    document.getElementById(filmes[number].id).classList.add("active");
}

function desativarPopup(i) {
    var popupDiv = document.querySelector('.popups');
    document.getElementById(`${i}`).remove();
}