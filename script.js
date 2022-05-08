let toggle = document.getElementById('toggle')
let MobiMenu = document.querySelector('.MobiMenu')
let close = document.querySelector('.close')
toggle.addEventListener('click', function() {
    MobiMenu.className = "MobiMenu2";
})
close.addEventListener('click', function() {
    MobiMenu.className = "MobiMenu";

})