﻿$(function(){
  var socket = io.connect('http://www.koheishingai.com:8080');
 
  var colc = 0;
  awheight();
  cinit();
  function awheight(){
    $('#wrap').css('min-height', $('body').innerHeight() -280);
  }
  function cinit(){
    $('#arts').text("");
    $('#arts').append('<div id="lods" style="margin: 28px 22px -20px;color: silver;">loading...</div>');
    socket.emit('arinit');
  };
  function close2(){
      $('#wrap3').fadeOut(function(){
        $(this).text('').append('<div class="close2"></div>').on('click', function(){
          close2(); 
        });
        $('#wrap2').fadeIn(function(){
          $('.colback').css('line-height', $('.colback').innerHeight()+'px');
        });
      });
  }
  $('.close2').click(function(){
    close2();
  });    
  socket.on('arti', function (data, nums, data2) {
            
    $('#lods').fadeOut(function(){
      $('#arts').append('<li class="bbp-body"><ul id="bbp-forum-145724" class="post-145724 forum type-forum status-publish hentry loop-item-0 odd bbp-forum-status-open bbp-forum-visibility-publish"><div class="headset"></div><li class="bbp-forum-info"><h4 class="bbph4"><a class="bbp-forum-title" href="/article/thread" title="Design Den">My First Portfolio</a></h4><div class="bbp-forum-content"><p class="bbpp">My First Portfolio is ...</p></div></li><li class="bbp-forum-freshness"><a class="bbpra" href="" title="Nexus 5 Website">2/10/2013</a><div class="bbp-topic-meta"><span class="bbp-topic-freshness-author"><a href="" title="View Web_Devs profile" class="bbp-author-avatar" rel="nofollow"><img alt="" src="http://0.gravatar.com/avatar/a702d8aee7a311cd76fbc32fdf8af3d7?s=14&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D14&amp;r=PG" class="avatar avatar-14 photo" height="14" width="14" style="box-sizing: border-box; border: 0px; max-width: 100%; height: auto !important;"></a>&nbsp;<a href="" title="View Web_Devs profile" class="bbp-author-name" rel="nofollow" style="  ">Kohei Shingai</a></span></div></li>');
    });
  });
  socket.on('articleini', function (data){
});
  socket.on('articleti', function (data) {
     
    $('.loader').fadeOut(function(){
      $('#wartis').css('height', 'auto');
      $('#wartis').append('<dl class="class'+colc+'"><div id="col'+colc+'" class="dlcon" style="width:100%; height:146px; background:#fff;"></div><p class="wdtitle">'+data+'</p></dl>');     
      $('.class'+colc).on('click', function(){
      $('body,html').animate({scrollTop: 0}, 300);
      socket.emit('wgetc', data);
    });         
      socket.emit('cins', colc);
      colc++;
  });
  socket.on('articleti0', function (title1, title3) {
    $('.toptitle').text(title3+" > "+title1);
  });
     
  $('.toptitle').css("opacity", "1");
  });

  socket.on('articlein', function (data, colcs) {
 
    var colstr = '#col' + colcs; 
    $(colstr).append(data);
  });
  socket.on('ccon', function (data) {     
    $('#wrap2').fadeOut(function(){
      $('#wrap3').append(data).fadeIn();
    });
  });
});