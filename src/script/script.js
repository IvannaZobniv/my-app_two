// /* global $ */
// $(function() {
//
//     let header = $("#header"),
//         introH = $("#intro").innerHeight(),
//         scrollOffset = $(window).scrollTop();
//
//
//     /* Скролимо по всых іd сторынки */
//     $("[data-scroll]").on("click", function(event) {
//         event.preventDefault();
//
//         let $this = $(this),
//             blockId = $this.data('scroll'),
//             blockOffset = $(blockId).offset().top;
//
//         $("#nav a").removeClass("active");
//         $this.addClass("active");
//
//         $("html, body").animate({
//             scrollTop:  blockOffset
//         }, 500);
//     });
//
//
//     /* Відкриття та закриття меню */
//     $("[data-collapse]").on("click", function(event) {
//         event.preventDefault();
//
//         var $this = $(this),
//             blockId = $this.data('collapse');
//
//         $this.toggleClass("active");
//     });
//
//
//     /* Slider */
//     $("[data-slider]").slick({
//         infinite: true,
//         fade: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     });
//
// });
// ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    let header = document.getElementById("header"),
        intro = document.getElementById("intro"),
        introH = intro.offsetHeight,
        scrollOffset = window.pageYOffset;

    /* Скролінг до різних блоків */
    let scrollElements = document.querySelectorAll("[data-scroll]");
    scrollElements.forEach(function(elem) {
        elem.addEventListener("click", function(event) {
            event.preventDefault();

            let blockId = this.getAttribute('data-scroll'),
                blockOffset = document.querySelector(blockId).offsetTop;

            document.querySelectorAll("#nav a").forEach(function(link) {
                link.classList.remove("active");
            });
            this.classList.add("active");

            window.scrollTo({
                top: blockOffset,
                behavior: "smooth"
            });
        });
    });

    /* Відкриття та закриття меню */
    let collapseElements = document.querySelectorAll("[data-collapse]");
    collapseElements.forEach(function(elem) {
        elem.addEventListener("click", function(event) {
            event.preventDefault();
            this.classList.toggle("active");
        });
    });

    /* Slider */
    let slider = document.querySelector("[data-slider]");
    if (slider) {
        // ініціалізації слайдера
    }
});
