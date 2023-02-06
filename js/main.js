$('.header-burger').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
});


document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.header-menu') & e.target !== document.querySelector('.hedaer-top') & e.target !== document.querySelector('.header-burger')) {
        document.querySelector('.header-menu').classList.remove('active')
        document.querySelector('.header-burger').classList.remove('active')
        document.querySelector('body').classList.remove('lock')
    }
})