function titel(){
  $('header').addClass('fadeInDown show');
}

$(document).ready(function(){
  $('.background-image, .pattern, footer').addClass('no-opacity');
  setInterval(titel, 1500);
});
