$(".modal_item").on('click', function(event){
    refreshSlide(1000);
});

lightbox.option({
    'alwaysShowNavOnTouchDevices':true,
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel':false
})


function refreshSlide (timeout){
    setTimeout(() => {
        var swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 5000,
            },
            loop: true,
        });
    }, timeout);
}