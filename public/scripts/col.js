﻿$(function(){
      var colc = 0;
      var socket = io.connect('http://www.koheishingai.com:8080');
       
      cinit();
      function cinit(){
        $('.article').text("");
        $('.article').append('<div class="loader"><div><span></span><span></span><span></span><span></span></div><div class="second"><span></span><span></span><span></span><span></span></div><div class="third"><span></span><span></span><span></span><span></span></div></div>');
        socket.emit('colinit');
      };
      socket.on('colti', function (data, nums, data2) {
     
        console.log(data);
        console.log(nums);
        console.log('data++'+data2);
        var nums = nums + 1;
        var lodstr = '#col' + nums;
        var colid = lodstr;
        var colback = colid + ' .colback';
        var lodstr = lodstr + '> .loader'; 
        $(lodstr).fadeOut(function(){
          $(colid).prepend(data2).prepend(data).css('line-height', $(colback).innerHeight() + 'px').on('mouseover', function(){
            $(colid+' iframe').remove();
         }).on('mouseleave', function(){
            $(colid).prepend(data)
            //$(colid).prepend(data).css('line-height', $(colback).innerHeight() + 'px');     
         }).on('click', function(){
           $('body,html').animate({scrollTop: 0}, 300);
            console.log('colss');
            socket.emit('cgetc', colid);
         });          
          $(colback).css('line-height', $(colback).innerHeight() + 'px');
        });
      });
      function alerts(){}; 
      socket.on('articleini', function (data) {
     
      console.log(data);
      });
      socket.on('articleti', function (data) {
     
      console.log(data);
      $('.loader').fadeOut(function(){
        $('#wartis').css('height', 'auto');
        $('#wartis').append('<dl class="class'+colc+'"><div id="col'+colc+'" class="dlcon" style="width:100%; height:146px; background:#fff;"></div><p class="wdtitle">'+data+'</p></dl>');     
        $('.class'+colc).on('click', function(){
        $('body,html').animate({scrollTop: 0}, 300);
        socket.emit('wgetc', data);
        console.log("gogo"+data);
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
          $('#wrap3').append(data).fadeIn(function(){
          });
        });
      });
      $('.close2').click(function(){
      close2();
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
      });
});