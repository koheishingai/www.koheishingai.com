$(function(){


  var swflg = 0;


  
init();

  timeline();
  adslide();


  adads();
  
  function getlang() {

    try {

      return (navigator.browserLanguage || navigator.language ||   navigator.userLanguage).substr(0,2)

    }catch(e) {

    return undefined;

    }

  }

 

  function init(){

  
  };






  
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



  var timer = false;


  $(window).resize(function() {

    if (timer !== false) {

        clearTimeout(timer);

    }


    timer = setTimeout(function() {

        console.log('resized');

        acbox();

        adslide();

        timeline();
        adads();
        if($("window").innerWidth() > 700){
        $('#tit1').fitText(1.5);

        $('#txt2').fitText(5);

        $('#titlep').fitText(3.8);

        $('.btn-blue.btn-join').fitText(0.9);
        }else{
        adnav();
        }
    }, 200);
  });




  $('#top').click(function(){

   $('body,html').animate({scrollTop: 0}, 300);

    return false;
  
  });


  
  $('#color').click(function(){

    $('body').css('overflow-y', 'hidden');

    $('body,html').animate({scrollTop: 0}, 0);

    $('#colorm').fadeIn();
    acbox();

  });


  
$('#close').click(function(){

    $('body').css('overflow-y', 'auto');

    $('#colorm').hide();

  });


  $('#search').click(function(){

    $('#swrap').show();

  });


  $('#swrap').skOuterClick(function() {

    if($('#swrap').css('display') == 'block'){

      $(this).hide();

    }

  });


  $('#search').click(function(event) {

    event.stopPropagation();

    var offset = $(this).offset();

    $('#swrap').show();

  });

  $('#swrap').skOuterClick(function() {

    $(this).hide();

  });


  
function adslide(){

  var visw = $(".visual").innerWidth();

  var vish = $(".visual").innerWidth()/940;

  vish = vish*430;

  if($("window").innerWidth() < 701){
    vish = vish +100;
  }
  $(".visual").css('padding', vish+'px 0px 0px');

  $(".slide-item").css('width', visw).css('height', vish).css('background-size', visw+'px '+vish+'px');

  }
  

  function timeline(){
  var timewidth =  $('#dates').innerWidth(); 
  timewidth = timewidth - 52;
  timewidth = timewidth/3 - 1;
  $('.nt').css('margin-left', timewidth);
  }
  
  $("#topmenu").click(function(){
    $("body").attr("ontouchmove", "event.preventDefault()").css("overflow-y", "hidden");
    $("#menumsk").show(); 
    adnav();
  });
  
  function adnav(){
    $('body,html').animate({scrollTop: 0}, 0);
    var mskh = $("body").innerHeight();
    mskh = mskh - 42;
    mskh = mskh/2;
    mskh = mskh - 158;
    $("#msktxt").css("top", mskh);
    if(mskh < 75){
    $(".msktxts").css("font-size", "21px").css("line-height", "33px");
    }else{
    $(".msktxts").css("font-size", "25px").css("line-height", "40px");
    }
  };

  function adads(){
    var adsw = $("#addsimg").innerWidth();
        adsw = adsw/600;
    adsw = adsw*500;
    $("#addsimg").css("height", adsw);
    $("#addsimg2").css("height", adsw);
  }

});