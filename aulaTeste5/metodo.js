
    lista = [
        {
            nome:"the nevers",
            link:"gs-ODufnJ8Y",
            img1:"https://i.ytimg.com/vi/gs-ODufnJ8Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5etnjz0CVJNglqO7YEldcE0jz9g",
            img2:"https://i.ytimg.com/an_webp/gs-ODufnJ8Y/mqdefault_6s.webp?du=3000&sqp=COjp9YIG&rs=AOn4CLBbnzAHJNE3Y_D55mXIQtj0pW7Fkw"
        },{
            nome:"spider man 3",
            link:"wPosLpgMtTY",
            img1:"https://i.ytimg.com/vi/zjdtiQx7RIw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe5-nc04D94dh6vqOd1cG87_6GXQ",
            img2:"https://i.ytimg.com/an_webp/wPosLpgMtTY/mqdefault_6s.webp?du=3000&sqp=CN7X9YIG&rs=AOn4CLAB5CEM2U5sMad6byD4XOkl0mt36Q"
        },{
            nome:"a menina que matou os pais",
            link:"qcX6qhojGdI",
            img1:"https://i.ytimg.com/vi/qcX6qhojGdI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2AA6vI8iM8IA_MZZX_GUg6WjcCA",
            img2:"https://i.ytimg.com/an_webp/qcX6qhojGdI/mqdefault_6s.webp?du=3000&sqp=CNjJ9YIG&rs=AOn4CLCpm0Yh_33p6saMPqwPA17dpzaOWg"
        },{
            nome:"Stowaway",
            link:"A_apvQkWsVY",
            img1:"https://i.ytimg.com/vi/A_apvQkWsVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlLYXJ9uv8M3r090wSk9I33BDTkA",
            img2:"https://i.ytimg.com/an_webp/A_apvQkWsVY/mqdefault_6s.webp?du=3000&sqp=CILy9YIG&rs=AOn4CLCI_cLacoiLE7BrcKk0sMCj4jxBfg"
        }
    ]

    for(i of lista){
        div = document.createElement('div')
        div.classList.add("card")
        div.innerHTML = `<img src='${i.img1}'><img src='${i.img2}'>`
        div.i = i
        div.onclick=function(){
            ifr.src = ""
            ifr.src = `https://www.youtube.com/embed/${this.i.link}`
            caixa.checked=true
        }
        conteudo.appendChild(div)
    }