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
        if(indexRadio == 0){
            carrousel__img.classList.add('image--active');
        }
        carrouselFigure.appendChild(carrousel__img);

        let carrousel__radio = document.createElement('input');
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'carrousel__radio';
        carrousel__radio.classList.add('carrousel__radio');
        if(indexRadio == 0){
            carrousel__radio.checked = true;
        }
        carrousel__radio.dataset.index = indexRadio;
        indexRadio++;
        carrousel__radio.addEventListener('change', function(){

            let index = this.dataset.index;
            let carrousel__img = carrousel.querySelectorAll('.carrousel__img');
            for(const elm of carrousel__img){
                elm.classList.remove('image--active');
            }
            carrousel__img[index].classList.add('image--active');
        });
        carrouselForm.appendChild(carrousel__radio);

    }

    carrouselForm.addEventListener('change', function(){
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