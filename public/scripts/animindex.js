$(function(){  
  var iani;
  var ianiflg = 0;
  var ianic = 0;
  scin();
  function scin(){
    var wt = $(window).scrollTop();
        wt = wt + $(window).innerHeight();
    if($(window).innerWidth() > 700){
      if(wt > 1400){
        ianic = 0;
        console.log('inian');
        if(ianiflg == 0){
        initanim();
        }
      }else{
       reset();
      }
    }else{
     if(wt > 690){
        //initanim();
      }else{
       reset();
      }
      if(wt > 930){
        //initanim();
      }else{
       reset();
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
      reset();
   
   scin();     
    }, 200);
  });



function initanim(){
  ianiflg = 1;
  iani = setInterval(function(){
    if(ianic == 0){ianic++
      console.log('ini');
      $('head').append("<link class='apps' href='http://fonts.googleapis.com/css?family=Antic+Slab' rel='stylesheet' type='text/css'><link class='apps' href='http://fonts.googleapis.com/css?family=Days+One' rel='stylesheet' type='text/css'><link class='apps' href='http://fonts.googleapis.com/css?family=Iceland' rel='stylesheet' type='text/css'><link class='apps' href='http://fonts.googleapis.com/css?family=Doppio+One' rel='stylesheet' type='text/css'><link class='apps' href='http://fonts.googleapis.com/css?family=Montserrat+Alternates' rel='stylesheet' type='text/css'><link class='apps' href='http://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>");
      $('#skill').css('margin', '170px auto -2px');
      }else if(ianic == 1){ianic++
      $('#inb1').prepend("<div class='skill3  anim'><h1 class='sk2' style='margin-top: 26px;font-size: 23px;font-family: Antic Slab, serif;color: rgba(52, 80, 101, 0.71);'>Copy Any Web Page in 1 Hour</h1><div style='width: 80px;height: 80px;margin: -10px auto;background: url(http://farm4.staticflickr.com/3760/11006194374_4fac3ef0fa_o.png);background-size: 100%;'></div></div>");
      $('.skill2').css('margin', '170px auto -2px');
      }else if(ianic == 2){ianic++
      $('#inb2').prepend("<div class='skill3  anim'><h1 class='sk2' style='margin-top: 25px;font-size: 24px;font-family: Days One, sans-serif;color:rgb(211, 181, 63);'>for Advertising</h1><div style='width: 80px;height: 80px;margin: -10px auto;background: url(http://farm8.staticflickr.com/7384/11006351214_b3eedd3421_o.png);'></div></div>");
      }else if(ianic == 3){ianic++
      $('#inb1 .skill3').fadeOut();
      $('#inb1').prepend("<div class='skill4  anim'><h1 id='ral' class='sk2' style='margin-top: 24px;font-size: 33px;font-family: Iceland, cursive;color:rgb(175, 196, 197);'>Connect Any Web Sites in Real Time</h1><div style='width: 80px;height: 80px;margin: -10px auto;background: url(http://farm4.staticflickr.com/3717/11006425076_7ea231afeb_o.png);'></div></div>");
      }else if(ianic == 4){ianic++
      $('#inb2 .skill3').fadeOut();
      $('#inb2').prepend("<div class='skill4  anim'><h1 class='sk2' style='margin-top: 25px;font-size: 23px;font-family: Doppio One, sans-serif; color:rgba(151, 30, 7, 0.79);'>for Online Shop</h1><div style='width: 80px;height: 80px;margin: -10px auto;background: url(http://farm6.staticflickr.com/5478/11006670413_18a48c4f78_o.png);'></div></div>");
      }else if(ianic == 5){ianic++
      $('#inb1 .skill4').fadeOut();
      $('#inb1').prepend("<div class='skill5  anim'><h1 class='sk2' style='margin-top:25px;font-size:21px;font-family: Montserrat Alternates, sans-serif;color:rgb(68, 163, 216);'>Adapt to Any Browser or Any Device</h1><div style='width: 80px;height: 80px;margin: -10px auto;background: url(http://farm8.staticflickr.com/7366/11006631456_404abffc67_o.png);'></div></div>");
      }else if(ianic == 6){ianic++
      $('#inb2 .skill4').fadeOut();
      $('#inb2').prepend("<div class='skill5  anim'><h1 class='sk2' style='font-size: 24px;margin-top: 26px;margin-bottom: 10px;font-family: Orbitron, sans-serif; color: rgba(255, 151, 60, 0.81);'>for Web Service</h1><div style='width: 80px;height: 80px;margin: -10px auto;opacity: 0.81;background: url(http://farm4.staticflickr.com/3767/11006606595_c88dd977b2_o.png);'></div></div>");
      }else if(ianic == 7){ianic++
      $('#inb2 .skill5, #inb1 .skill5').fadeOut();
      $('#skill').css('margin', '2px auto -2px');
      $('.skill2').css('margin', '2px auto -2px');
      ianic = -1;
    }else if(ianic == -1){      
      stopanim();
    }
   }, 400);
}
function stopanim(){
ianiflg = 0;
clearInterval(iani);
}
function reset(){
console.log('res');
stopanim();
$('.apps').remove();
$('.skill3, .skill4, .skill5').remove();
$('#skill').css('margin', '2px auto -2px');
$('.skill2').css('margin', '2px auto -2px');
}
});