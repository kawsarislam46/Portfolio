$(document).ready(function(){

  // slick js code start
  
$('.recommendations').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 5,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// wow js code start

new WOW().init();

});

const sections = document.querySelectorAll('.rightbar_item > div');

      sections.forEach(section => {
          const img = section.querySelector('img');

          img.addEventListener('click', () => {
              // Remove active class from all sections
              sections.forEach(sec => sec.classList.remove('active'));

              // Add active class to the clicked section
              section.classList.add('active');
          });
      });

