let toggle = document.getElementById('toggle')
let MobiMenu = document.querySelector('.MobiMenu')
let close = document.querySelector('.close')
toggle.addEventListener('click', function() {
    MobiMenu.className = "MobiMenu2";
})
close.addEventListener('click', function() {
    MobiMenu.className = "MobiMenu";

})
let card = document.querySelector('.card')
card.addEventListener('mouseout', function() {
    card.classList.add('card-out');
})


/* slider */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});