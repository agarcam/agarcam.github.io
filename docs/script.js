"use strict";
document.addEventListener("DOMContentLoaded", () => {
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('activo');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    const slides = document.querySelectorAll('.project-slide');
    slides.forEach(slide => observer.observe(slide));
});
