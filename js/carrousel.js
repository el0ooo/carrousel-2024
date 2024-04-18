(function(){
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrouselX = document.querySelector('.carrousel__x');
    let carrouselFigure = document.querySelector('.carrousel__figure');
    let carrouselForm = document.querySelector('.carrousel__form');
    let galerie = document.querySelector('.galerie');
    let galerieImage = galerie.querySelectorAll('img');
    
    let indexRadio = 0;

    for(const elm of galerieImage){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        
        carrouselFigure.appendChild(carrousel__img);

        let carrousel__radio = document.createElement('input');
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'carrousel__radio';
        carrousel__radio.classList.add('carrousel__radio');
        carrousel__radio.dataset.index = indexRadio;
        indexRadio++;

        carrouselForm.appendChild(carrousel__radio);

    }
    
    carrouselForm.addEventListener('change', function(carrousel__radio){
        if(carrousel__radio.checked == true){
            carrousel__img.classList.add('image--active');
        }else {
            carrousel__img.classList.remove('image--active');
        }
    });


    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir');
    });

    carrouselX.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir');
    });
})()