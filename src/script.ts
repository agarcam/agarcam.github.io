declare const Swiper: any;

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar cada slider de forma independiente
    document.querySelectorAll(".mySwiper").forEach((slider) => {
        new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,

            pagination: {
                el: slider.querySelector(".swiper-pagination"),
                clickable: true,
            },

            navigation: {
                nextEl: slider.querySelector(".swiper-button-next"),
                prevEl: slider.querySelector(".swiper-button-prev"),
            },
        });
    });
});