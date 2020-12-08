function toggleMenu(visible){
    document.querySelector('.menu').classList.toggle('show', visible)
};

document.querySelector('.hamburger').addEventListener('click', function(e){
    e.preventDefault();
    toggleMenu();
});

function closeModal(){
    document.getElementById('overlay').classList.remove('show')
}

/* Zamkniecie modala przez przycisk "x" */
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn){
    btn.addEventListener('click', function(e){
    e.preventDefault();
    closeModal();
    })
})
/* Zamkniecie modala przez nacisniecie na tło */
    document.querySelector('#overlay').addEventListener('click', function(e){
        if(e.target === this){
            closeModal();
        }
    })
/* Zamkniecie modala przez przycisk "ESC" */
    document.addEventListener('keyup', function(e){
        if(e.kayCode === 27){
            closeModal();
        }
    })

/* Otwieranie Modala (zamkniecie wszystkich, owarcie wskazanego przez overlay) */

function openModal(modal){
    document.querySelectorAll('#overlay > *').forEach(function(modal){
        modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
}



