(function(){
    let carrousel = document.querySelector('.carrousel');
    let carrouselX = document.querySelector('.carrousel__x');
    let carrouselFigure = document.querySelector('.carrousel__figure');
    let carrouselForm = document.querySelector('.carrousel__form');
    let galerie = document.querySelector('.galerie');
    let galerieImage = galerie.querySelectorAll('img');
    let indexRadio = 0;

    for(const elm of galerieImage){
        elm.dataset.index = indexRadio;
        creer_img_carrousel(elm, indexRadio);
        creer_radio_carrousl(indexRadio);
    }

    function creer_img_carrousel(elm, index){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;

        elm.addEventListener('click', function(){
            carrousel.classList.add('carrousel--ouvrir');
            if(elm.dataset.index == index){
                carrousel__img.classList.add('image--active');
                let boutons_carrousel__radio = carrousel.querySelectorAll('.carrousel__radio');
                for(const bouton of boutons_carrousel__radio){
                    bouton.checked = false;
                    if(bouton.dataset.index == elm.dataset.index){
                        bouton.checked = true;
                    }
                }
            }
        });
        carrouselFigure.appendChild(carrousel__img);

        carrouselForm.addEventListener('change', function(){
            if(carrousel__radio.checked == true){
                carrousel__img.classList.add('image--active');
            }else {
                carrousel__img.classList.remove('image--active');
            }
        });
    }

    function creer_radio_carrousl(index){
        let carrousel__radio = document.createElement('input');
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'carrousel__radio';
        carrousel__radio.classList.add('carrousel__radio');
        if(indexRadio == 0){
            carrousel__radio.checked = true;
        }
        carrousel__radio.dataset.index = index;
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

    carrouselX.addEventListener('mousedown', function(){
        let carrousel__img = carrousel.querySelectorAll('.carrousel__img');
        for(const elm of carrousel__img){
            elm.classList.remove('image--active');
        }
        carrousel.classList.remove('carrousel--ouvrir');
    });

    // Arrow navigation for the carousel
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carrouselImages = document.querySelectorAll('.carrousel__img');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carrouselImages.length - 1;
        }
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carrouselImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showImage(currentIndex);
    });

    function showImage(index) {
        carrouselImages.forEach(img => img.classList.remove('image--active'));
        carrouselImages[index].classList.add('image--active');
        currentIndex = index;

        // Update the active radio button
        let boutons_carrousel__radio = carrousel.querySelectorAll('.carrousel__radio');
        for(const bouton of boutons_carrousel__radio){
            bouton.checked = false;
            if(bouton.dataset.index == index){
                bouton.checked = true;
            }
        }
    }
})();
