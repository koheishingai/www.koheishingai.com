$(function(){

      //socket section
  
      var socket = io.connect('http://localhost:8081');
 
      var wpagenum = 0;
      
      winit();
      
      
      
        var wtimer;
        var wtimer2;
        var ntml = 0;

  
  function  wstartInit(){
    wtimer = setInterval(function(){  
    if($('#dates').css('margin-left').replace('px', '') >= ntml){
      wstopInit();
    }
    }, 1);
  }

  function wstopInit(){
    $('#dates').css('margin-left', 0);
    clearInterval(wtimer);
  }
  
    function  wstartInit2(){
    wtimer2 = setInterval(function(){  
    if($('#dates').css('margin-left').replace('px', '') <= -ntml){
      wstopInit2();
    }
    }, 1);
  }

  function wstopInit2(){
    $('#dates').css('margin-left', 0);
    clearInterval(wtimer2);
  }
      
      
      function winit(){
        $('#wartis').text("");
        $('#wartis').css('height', '240px');
        $('#wartis').append('<div class="loader"><div><span></span><span></span><span></span><span></span></div><div class="second"><span></span><span></span><span></span><span></span></div><div class="third"><span></span><span></span><span></span><span></span></div></div>');
        ntml = $('#nt1').css('margin-left').replace('px', '');
        ntml = Number(ntml) + 14;

        if(wpagenum == 0){
          wstartInit2();
          $('.rme').css('opacity', '0');
          $('.lme').css('opacity', '1');
          $('#nt1').css('background-image', 'url(http://farm6.staticflickr.com/5493/10643032576_f51ee7f6d7_o.png)');
          $('#tt1').css('color', '#FCAF8B').css('font-weight', '700');
          $('#dates').css('-webkit-transition', 'all 0.5s ease 0s');
          $('#dates').css('margin-left', -ntml);
          $('#tt1').text('1');
          $('#tt2').text('2');
          $('#tt3').text('3');
          $('#tt4').text('4');
        }else if(wpagenum == 1){
          wstartInit();
          $('.lme').css('opacity', '0');
          $('.rme').css('opacity', '1');
          $('#dates').css('-webkit-transition', 'all 0.5s ease 0s');
          $('#dates').css('margin-left', ntml);
          $('#tt1').text('2');
          $('#tt2').text('3');
          $('#tt3').text('4');
          $('#tt4').text('5');
        }
        socket.emit('worksinit', wpagenum);
      };
      
      $('.lme').click(function(){
        if(wpagenum == 0){
          wpagenum = 1;    
          winit();
          colc = 4;
        };
      });
      
     $('.rme').click(function(){
        if(wpagenum == 1){
          wpagenum = 0;    
          winit();
          colc = 0;
        };
      });
      
      var colc = 0;
      
      socket.on('articleini', function (data) {
     
      console.log(data);
      });
      socket.on('articleti', function (data) {
     
      console.log(data);
      $('.loader').fadeOut(function(){
        $('#wartis').css('height', 'auto');
        $('#wartis').append('<dl><div id="col'+colc+'" class="dlcon" style="width:100%; height:146px; background:#fff;"></div><p class="wdtitle">'+data+'</p></dl>');     
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






});