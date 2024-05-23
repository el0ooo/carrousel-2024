(function(){
    let carrousel = document.querySelector('.carrousel');
    let carrouselX = document.querySelector('.carrousel__x');
    let carrouselFigure = document.querySelector('.carrousel__figure');
    let carrouselForm = document.querySelector('.carrousel__form');
    let galerie = document.querySelector('.galerie');
    let galerieImage = galerie.querySelectorAll('img');
    let currentIndex = 0;

    for(const elm of galerieImage){
        elm.dataset.index = currentIndex;
        creer_img_carrousel(elm, currentIndex);
        creer_radio_carrousl(currentIndex);
        currentIndex++;
    }

    function creer_img_carrousel(elm, index){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;

        elm.addEventListener('click', function(){
            carrousel.classList.add('carrousel--ouvrir');
            showImage(index);
        });
        carrouselFigure.appendChild(carrousel__img);
    }

    function creer_radio_carrousl(index){
        let carrousel__radio = document.createElement('input');
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'carrousel__radio';
        carrousel__radio.classList.add('carrousel__radio');
        carrousel__radio.dataset.index = index;
        if(index === 0){
            carrousel__radio.checked = true;
        }
        carrousel__radio.addEventListener('change', function(){
            showImage(index);
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

    // Section for previous and next buttons - aider de ChatGPT
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carrouselImages = document.querySelectorAll('.carrousel__img');
    const carrouselRadios = document.querySelectorAll('.carrousel__radio');
    
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carrouselImages.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carrouselImages.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    function showImage(index) {
        carrouselImages.forEach(img => img.classList.remove('image--active'));
        carrouselImages[index].classList.add('image--active');

        carrouselRadios.forEach(radio => radio.checked = false);
        carrouselRadios[index].checked = true;

        currentIndex = index;
    }
})();
