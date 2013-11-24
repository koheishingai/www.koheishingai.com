$(function(){
  var nowtheme = 0;
  var temptheme = 0;
  var timert = false;
  thestrage();
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
      $("#theme2, #theme3").removeClass("onm");
      $("#theme1").addClass("onm");
      temptheme = 1;
    }
  });
  $('#dayt').click(function(){
    if(temptheme != "2"){
      $("#theme1, #theme3").removeClass("onm");
      $("#theme2").addClass("onm");
      temptheme = 2;
    }
  });
  $('#stra').click(function(){
    if(temptheme != "3"){
      $("#theme1, #theme2").removeClass("onm");
      $("#theme3").addClass("onm");
      temptheme = 3;
    }
  });
  
$('#close').click(function(){


    $('#colorm').hide();

    localStorage.setItem("theme", nowtheme);
    thestrage();
  });
  $('#okbtn').click(function(){

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
      $("#theme2, #theme3").removeClass("onm");
      $("#theme1").addClass("onm");
    }else if(nowtheme == "2"){
      temptheme = 2;
      $("#theme1, #theme3").removeClass("onm");
      $("#theme2").addClass("onm");
    }else if(nowtheme == "3"){
      temptheme = 3;
      $("#theme1, #theme2").removeClass("onm");
      $("#theme3").addClass("onm");
    }
    acbox();

  });
  $('#phone').click(function(){

    $('body').css('overflow-y', 'hidden');

    $('body,html').animate({scrollTop: 0}, 0);

    $('#colorm').fadeIn();
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
      }else if(setthe =="3"){
        $("body").css("background", "rgb(255, 153, 206)").css("background-image", "url(http://farm6.staticflickr.com/5477/11013305333_15cbe2cce4_o.png)");
        $("#logoh1").css("color", "#DBDBDB");
      }
      nowtheme = setthe;
    }
  };
});