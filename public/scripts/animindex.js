$(function(){

  scin();

  function scin(){
        var wt = $(window).scrollTop();
          wt = wt + $(window).innerHeight();
    if($(window).innerWidth() > 700){
      if(wt > 1400){
        //$('.inbox').css('background', '#696969');
      }else{
       //$('.inbox').css('background', '#fff');
      }
    }else{
     if(wt > 690){
        //$('#inb1').css('background', '#696969');
      }else{
       //$('#inb1').css('background', '#fff');
      }
      if(wt > 930){
        //$('#inb2').css('background', '#696969');
      }else{
       //$('#inb2').css('background', '#fff');
      }
}
  }

  $(window).scroll(function(){
      scin();
    });


  var anintimer = false;


  $(window).resize(function() {

    if (anintimer !== false) {

        clearTimeout(anintimer);

    }


    anintimer = setTimeout(function() {

      scin();        
    }, 200);
  });








});