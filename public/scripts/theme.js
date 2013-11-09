$(function(){


  var nowtheme = 0;
  var temptheme = 0;
  
  
  
   var timert = false;


  $(window).resize(function() {

    if (timert !== false) {

        clearTimeout(timert);

    }


    timer = setTimeout(function() {

        acbox();
    }, 200);
  });




  $('#top').click(function(){

   $('body,html').animate({scrollTop: 0}, 300);

    return false;
  
  });


  
  
  
  
  

$('#defgre').click(function(){
    if(temptheme != "1"){
      $("#theme2").removeClass("onm");
      $("#theme1").addClass("onm");
      temptheme = 1;
    }
  });

  $('#dayt').click(function(){
    if(temptheme != "2"){
      $("#theme1").removeClass("onm");
      $("#theme2").addClass("onm");
      temptheme = 2;
    }
  });


  
$('#close').click(function(){

    $('body').css('overflow-y', 'auto');

    $('#colorm').hide();

    localStorage.setItem("theme", nowtheme);
    thestrage();
  });


  $('#okbtn').click(function(){
    $('body').css('overflow-y', 'auto');

    $('#colorm').hide();

    localStorage.setItem("theme", temptheme);
    thestrage();
  });
  
  $('#color').click(function(){

    $('body').css('overflow-y', 'hidden');

    $('body,html').animate({scrollTop: 0}, 0);

    $('#colorm').fadeIn();
    if(nowtheme == "1"){
      temptheme = 1;
      $("#theme2").removeClass("onm");
      $("#theme1").addClass("onm");
    }else if(nowtheme == "2"){
      temptheme = 2;
      $("#theme1").removeClass("onm");
      $("#theme2").addClass("onm");
    }
    acbox();

  });






  
function acbox(){

    var cmw = $('#colorm').innerWidth();

    var boxw = $('#cbox').innerWidth();

    var cmh = $('#colorm').innerHeight();

    var boxh = $('#cbox').innerHeight();

          cmw = cmw/2;

          boxw = cmw - boxw/2;

          cmh = cmh/2;

          boxh = cmh - boxh/2;

    $('#cbox').css('margin-left', boxw);

    $('#cbox').css('margin-top', boxh);
 
  }
   
  thestrage();





  function thestrage(){

    var setthe = localStorage.getItem('theme');


    if(setthe == null){
      localStorage.setItem("theme", "1");
      nowtheme = 1;
    }else{

      if(setthe == "1"){
       $("body").css("background", "#f0f0f0").css("background-image", "url(http://farm4.staticflickr.com/3691/10369789325_d6d657e940_o.png)").css("color","#333");
       $("#logoh1").css("color", "#DBDBDB");
      }else if(setthe == "2"){
        $("body").css("background", "#fcd04b").css("background-image", "none").css("color","#FFAE03");
        $("#logoh1").css("color", "rgb(255, 174, 3)");
      }
      nowtheme = setthe;
    }
        

  };
  
  


$('#defgre').mouseover(function(){
    if(nowtheme != "1"){
    
    }
  });

$('#defgre').mouseleave(function(){
    if(nowtheme != "1"){

  }
});


$('#dayt').mouseover(function(){
    if(nowtheme != "2"){
    
    }
  });

$('#dayt').mouseleave(function(){
    if(nowtheme != "2"){

  }
});






});