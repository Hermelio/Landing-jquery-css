var mudar = {
  coxinha : {
    "img":"img/coxinhas.jpg",
    "coxinha":"Coxinha",
    "primeiro":"Frango",
    "segundo":"Queijo",
    "terceiro":"Frango Catupiry"   
  },
  enrrolado : {
    "img":"img/div2.png",
    "enrrolado":"Enrrolado",
    "tr":"Frango",
    "es":"Queijo",
    "rs":"Frango Catupiry"
  },
  esfirra :{
    "img":"img/div3.png",
    "esfirra": "Esfirra",
    "primeiro" :"Frango",
    "segundo" : "Queijo",
    "terceiro" : "Frango Catupiry" 
  }
}
// $.getJSON("js/mudando.json", funciton(data){
//   data.coxinha.img;
 // metodo para chamar o Json na pagina usando pagina externa
// }); 

var slick =  function(){
    $('.slick').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
}
var meio = function(){ 
  $('.content').slick({
     dots: true,
     infinite: false,
     speed: 300,
     autoplay:true,
     autoplayTimeout:3000,
     autoplayHoverPause:true,
     slidesToShow: 1,
     slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
   });
}
var content = function(){ 
    $('.nav-meio').slick({
      dots: true,
      infinite: false,
      speed: 300,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      slidesToShow: 1,
      slidesToScroll: 1,
       responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
}
var scroll = function(){ $('.nav__container a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
      
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 500);
});
}
var scroll2 = function(){$('.footer__title a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 500);
});
}
var popup = function (){$('.nav-meio__wrap--button').click(function(e) {
  e.preventDefault();
  $('.teste').fadeIn(); 
});
}
var close = function(){$('.teste__estilo-img').click(function(e) {
  $('.teste').fadeOut();
});
}

$(document).ready(function(){
  slick();
  scroll();
  scroll2();
  popup();
  close();

  $('.clicar1').click(function(){
      $('#img').attr('src', mudar.coxinha.img);
      $('#coxinha').html(mudar.coxinha.coxinha);
      $('#primeiro').html(mudar.coxinha.primeiro);
      $('#segundo').html(mudar.coxinha.segundo);
      $('#terceiro').html(mudar.coxinha.terceiro);      
  });
    $('.clicar2').click(function(){
      $('#img').attr('src', mudar.enrrolado.img);
      $('#coxinha').html(mudar.enrrolado.enrrolado);
      $('#primeiro').html(mudar.enrrolado.tr);
      $('#segundo').html(mudar.enrrolado.es);
      $('#terceiro').html(mudar.enrrolado.rs);      
  });
    $('.clicar3').click(function(){
      $('#img').attr('src', mudar.esfirra.img);
      $('#coxinha').html(mudar.esfirra.esfirra);
      $('#primeiro').html(mudar.esfirra.primeiro);
      $('#segundo').html(mudar.esfirra.segundo);
      $('#terceiro').html(mudar.esfirra.terceiro);      
  });
  if($(window).width() <= 320 ){
    meio();
    content();
  }
});   
