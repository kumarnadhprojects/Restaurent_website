// Javascript file

// On scroll navbar color change
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $('.navbar').addClass('bg-color');
  }

  else{
    $('.navbar').removeClass('bg-color'); 	
  }
})