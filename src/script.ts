declare const Swiper: any;

document.addEventListener("DOMContentLoaded", () => {
    var swiper : object = new Swiper(".mySwiper", {
        slidesPerView:1,
        spaceBetween: 30,
        loop:true,
        pagination:{
            el:".swiper-pagination",
            clickable:true,
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const observer : IntersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('activo'); // Activa el efecto CSS
                observer.unobserve(entry.target);    // Hace que solo ocurra la primera vez
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando asoma un 10% del contenedor en la pantalla
    });

    // Busca todas tus diapositivas de proyecto y las pone bajo vigilancia
    const slides = document.querySelectorAll('.project-slide');
    slides.forEach(slide => observer.observe(slide));
});