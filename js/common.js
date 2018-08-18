
//nav color while scrolled
var nav = document.getElementById("nav");
function navColorChanger() {
    if (pageYOffset != 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}
document.addEventListener('DOMContentLoaded', function () {navColorChanger()});

//nav scroll
$('nav .logo').click(function () {
    $('html,body').animate({scrollTop:$($(this).attr('data-scroll-to')).offset().top},1000)
});
$('nav li a').click(function () {
    $('html,body').animate({scrollTop:$($(this).attr('data-scroll-to')).offset().top},1000)
});

//fadeIn's at time
let weddingServ = document.getElementById('wedding-service');
let birthServ = document.getElementById('birth-service');
let corporativeServ = document.getElementById('corporative-service');
let addServ = document.getElementsByClassName('add-services')[0];
function getElementTopHeight(elem) {
    let box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}
function getElementBottomHeight(elem) {
    return getElementTopHeight(elem) + elem.offsetHeight;
}
function isInViewport(elem) {
    return pageYOffset+(document.documentElement.clientHeight*0.9) >= getElementTopHeight(elem);
}

function fadeInCurrent() {
    if(isInViewport(weddingServ)) {
        weddingServ.classList.add('in-left');
    }
    if (isInViewport(birthServ)) {
        birthServ.classList.add('in-right');
    }
    if (isInViewport(corporativeServ)) {
        corporativeServ.classList.add('in-left');
    }
    if (isInViewport(addServ)) {
        addServ.classList.add('in-bottom');
    }
}
fadeInCurrent();
window.onscroll = function () {navColorChanger(), fadeInCurrent()};



// //open service photo's
// let pic = document.getElementsByClassName('pic');
// let picBg = document.getElementsByClassName('pic-open-bg');



$(".services .pic").click(function () {
    $(".carousel").toggleClass('hidden')
});
$(".services .pic-open-bg").click(function () {
    $(".carousel").toggleClass('hidden')
});
// picBg.onclick = function () {
//     $(".carousel").toggleClass('hidden');
// };

//slick
$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        // autoplay: 2,
    });
});

$('.stats .card').click(function () {
   $(this).toggleClass('flipped');
});