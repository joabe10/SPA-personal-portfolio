var icone = document.getElementById('icone');
var logo = document.getElementById('logo)');

icone.onclick = ()=> {
    document.body.classList.toggle('dark__theme');

    if (document.body.classList.contains('dark__theme')) {
        icone.src = "/SPA-personal-portfolio/assets/sun.png";
        logo.src = "/SPA-personal-portfolio/assets/j(3).png"
    } else {
        icone.src = "/SPA-personal-portfolio/assets/moon.png";
    }
}


var loader = document.getElementById('preloader');

window.addEventListener('load', function(load) {
    window.removeEventListener('load', load, false);               
    setTimeout(function(){
        loader.style.display = 'none'
    },2000);
  
  },false);
