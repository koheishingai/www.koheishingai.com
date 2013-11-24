$(function(){
  var swflg = 0;

  var timer = false;
  
init();

  timeline();
  adslide();


  adads();
  function init(){

    if(getlang() == 'ja'){

      $('#works').text('作品').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');

      $('#collection').text('コレクション').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');

      $('#collectionli').css('width', '97').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');

      $('#about').text('紹介').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');

      $('#article').text('記事').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');

      $('#sponsor').text('提供').css('font-size', '11px').css('line-height', '19px');

      $('#logoul li, #sponsor').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');
      $('#titlep').text('つくる、デザインする、なおす');
      $('#tit1').text('こんにちは').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');
      $('#txt2').text('私は、koheishingaiです').css('font-family', ' "メイリオ", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic"');
      $('.btn-blue').text('コレクションを見る');
      $('#wcid').text("できること");
      $('#wcij').text("ビジネスとして");
      $('#s').attr("placeholder", "www.koheishingai.com内を検索");
      $('.go-help').text('詳細');
      $('#ctg').text("All");
      $('#titlear').text('タイトル');
      $('#fness').text('更新者');
      $('#next').text('次へ');
      $('#previous').text('前へ');
      $('#logh4').text('ログイン');
      $('#user_login').attr('placeholder', 'ID');
      $('#user_pass').attr('placeholder', 'パスワード');
      $('#wp-submit').attr('value', 'ログイン');
      $('#regs').text('登録は無料&数秒で完了します。');
      $('#register').attr('value', '登録');
      $('#register').text('登録');
      $('#new-thread-button').text('新しい記事を投稿');
      $('#new-thread-button').attr('value', '新しい記事を投稿');      
      $('#msabout').text('紹介');
      $('#msworks').text('作品');
      $('#mscollections').text('コレクション');
      $('#msarticle').text('記事');
      $('#mmti').text('テーマ選択');
      $('#adp').text('お勧めのWebIDEです。骨の折れる開発環境のセットアップから解放されます。');
    }else{

  
  }

    $('#phone').hide();
    $('#remote').css('height', '111px');
  };

  
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
  };
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
  $(window).resize(function() {

    if (timer !== false) {

        clearTimeout(timer);

    }

    timer = setTimeout(function() {

        console.log('resized');
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



  function getlang() {

    try {

      return (navigator.browserLanguage || navigator.language ||   navigator.userLanguage).substr(0,2)

    }catch(e) {

    return undefined;

    }

  }
  $('#top').click(function(){

    $('body,html').animate({scrollTop: 0}, 300);

     return false;
  
  });
  $('.close2').click(function(){
    $('#wrap3').fadeOut(function(){
    $('#wrap2').fadeIn();
    timeline();
    adads();
    });
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
  $("#topmenu").click(function(){
    $("body").attr("ontouchmove", "event.preventDefault()").css("overflow-y", "hidden");
    $("#menumsk").show(); 
    adnav();
  });
});