(function(){
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrouselX = document.querySelector('.carrousel__x');
    let carrouselFigure = document.querySelector('.carrousel__figure');
    let galerie = document.querySelector('.galerie');
    let galerieImage = galerie.querySelectorAll('img');
    
    for(const elm of galerieImage){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        
        carrouselFigure.appendChild(carrousel__img);
    }

    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir');
    });

    carrouselX.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir');
    });
})()