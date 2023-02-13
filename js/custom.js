$(".modal_item").on('click', function(event){
    refreshSlide(1000);
});


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