$(document).ready(function(){
    setInterval(function(){
      $('.carousel-container .image-container:first-child').animate({
        'opacity':0
      },1000).next('.image-container').animate({
        'opacity':1
      },1000).end().appendTo('.carousel-container');
    }, 5000);
  });
  