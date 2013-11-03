$(function(){


  var swflg = 0;


  
init();

  timeline();
  adslide();


  
  function getlang() {

    try {

      return (navigator.browserLanguage || navigator.language ||   navigator.userLanguage).substr(0,2)

    }catch(e) {

    return undefined;

    }

  }

 

  function init(){

    if(getlang() == 'ja'){

    //if(getlang() != 'ja'){

      $('#works').text('作品');

      $('#collection').text('コレクション');

      $('#collectionli').css('width', '97');

      $('#about').text('紹介');

      $('#article').text('記事');

      $('#sponsor').text('提供').css('font-size', '11px').css('line-height', '19px');

      $('#logoul li, #sponsor').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');

    }else{

      $('#works').text('Works');

      $('#collection').text('Collections');

      $('#collectionli').css('width', '75');

      $('#about').text('About');

      $('#article').text('Article');

      $('#sponsor').text('SPONSOR');
 
    }

  };


  $('#logoh1').click(function(){

    location.href='/'

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
        $('#tit1').fitText(1.5);

        $('#txt2').fitText(5);

        $('#titlep').fitText(3.8);

        $('.btn-blue.btn-join').fitText(0.9);
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

  $(".visual").css('padding', vish+'px 0px 0px');

  $(".slide-item").css('width', visw).css('height', vish).css('background-size', visw+'px '+vish+'px');

  }
  

  function timeline(){
  var timewidth =  $('#dates').innerWidth(); 
  timewidth = timewidth - 52;
  timewidth = timewidth/3 - 1;
  $('.nt').css('margin-left', timewidth);
  }




});