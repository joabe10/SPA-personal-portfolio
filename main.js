var icone = document.getElementById('icone');

icone.onclick = ()=> {
    document.body.classList.toggle('dark__theme');

    if (document.body.classList.contains('dark__theme')) {
        icone.src = "/SPA-personal-portfolio/assets/sun.png";
    } else {
        icone.src = "/SPA-personal-portfolio/assets/moon.png";
    }
}